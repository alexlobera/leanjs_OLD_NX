import React from 'react'
import { mount } from 'enzyme'
import waitForExpect from 'wait-for-expect'

import Root from '../../../test/utils/Root'
import VALIDATE_VOUCHER from './ValidateVoucher.graphql'
import VALIDATE_VIES from './checkout/ValidateVies.graphql'
import PAY from './checkout/Pay.graphql'
import PAYMENT_SECTION_QUERY from './PaymentSection.graphql'
import PaymentSection from './PaymentSection'
import { BuyButton } from './checkout'
import {
  AddCompanyDetailsButton,
  EUVATNumberField,
  ValidateViesButton,
  ShowVoucherButton,
  ValidateVoucherButton,
  TotalPayablePrice,
  VoucherInput,
  NameInput,
  EmailInput,
  CCNameInput,
  CCNumberInput,
  CCExpiryInput,
  CCCVCInput,
  SubmitPaymentFormButton,
  MeetupCheckbox,
} from './checkout/CheckoutForm'
import { CheckoutContainer } from './checkout/CheckoutContainer'
import { Alert } from '../elements'

const paymentApi = {
  setPublishableKey: () => {},
  card: {
    createToken: (data, callback) => callback('test-status', { id: 2 }),
  },
}

const defaultTrainingData = {
  training: {
    address: 'Publicis Sapient - Eden House, 8 Spital Square',
    city: 'London',
    country: 'UK',
    endDate: '2019-05-23T20:00:00.000Z',
    id: '5aa2acda7dcc782348ea1234',
    mapUrl: 'https://goo.gl/maps/jjX9zs5Ags32',
    price: 995,
    startDate: '2019-04-23T17:00:00.000Z',
    training: { type: 'Part-time' },
  },
  trainingLoading: false,
  trainingError: false,
}

const defaultAutoVoucherQuery = {
  request: {
    query: PAYMENT_SECTION_QUERY,
    variables: {
      trainingInstanceId: '5aa2acda7dcc782348ea1234',
    },
  },
  result: {
    data: {
      trainingInstance: {
        upcomingAutomaticDiscounts: {
          edges: [],
          __typename: 'VoucherConnection',
        },
      },
    },
  },
}

const mountPaymentSection = ({
  paymentMutation,
  autoVoucherQuery = defaultAutoVoucherQuery,
  validateVoucherQuery,
  validateVatQuery,
  navigate = () => {},
  triggerSubscribe = () => {},
}) => {
  const mocks = [
    paymentMutation,
    autoVoucherQuery,
    validateVoucherQuery,
    validateVatQuery,
  ].filter(obj => obj)

  return mount(
    <Root graphQlMocks={mocks}>
      <PaymentSection
        {...defaultTrainingData}
        navigate={navigate}
        paymentApi={paymentApi}
        triggerSubscribe={triggerSubscribe}
      />
    </Root>
  )
}

describe('<PaymentSection />', () => {
  let request = {
    query: PAY,
    variables: {
      voucherCode: '',
      quantity: 1,
      trainingInstanceId: '5aa2acda7dcc782348ea1234',
      email: 'test@example.com',
      name: 'Joe Bloggs',
      token: 2,
      vatCountry: null,
      vatNumber: null,
      companyName: undefined,
    },
  }
  let result = {
    data: {
      makePayment: {
        id: '123',
        currency: 'gbp',
        amount: 1194,
        metadata: {},
      },
    },
  }

  describe('Making payments', () => {
    const fillPaymentForm = async (wrapper, { meetup } = {}) => {
      await waitForExpect(() => {
        wrapper.update()
        expect(wrapper.find(BuyButton).length).toBe(1)
        wrapper.find(BuyButton).simulate('click')
        wrapper.update()
        const change = (Component, newValue, simulatedAction = 'change') =>
          wrapper
            .find(Component)
            .find('input')
            .simulate(simulatedAction, { target: { value: newValue } })

        change(NameInput, 'Joe Bloggs')
        change(EmailInput, 'test@example.com')
        if (meetup) {
          change(MeetupCheckbox, 'click')
        }
        change(CCNameInput, 'Mr J Bloggs')
        change(CCNumberInput, '4242424242424242')
        change(CCExpiryInput, '12/99')
        change(CCCVCInput, '123')
      })
      return wrapper
    }

    it('should make a payment', async () => {
      const navigate = jest.fn(() => {})
      let wrapper = mountPaymentSection({
        paymentMutation: { request, result },
        navigate,
      })
      wrapper = await fillPaymentForm(wrapper)

      // NB if you simulate 'click' it does not reliably trigger a 'submit' event in the parent form
      // So select the form and explicitly simulate a 'submit'.  For some reason simulating a 'submit'
      // on the button works as well, but that seems hackish so this method was used instead.
      wrapper
        .find(SubmitPaymentFormButton)
        .closest('form')
        .simulate('submit')

      await waitForExpect(() => {
        expect(navigate).toHaveBeenCalledWith('/payment-confirmation', {
          email: 'test@example.com',
          makePayment: result.data.makePayment,
          trainingInstanceId: request.variables.trainingInstanceId,
        })
      })
    })

    xit('should trigger an email subscribe if meetup', async () => {
      const meetupSubscribe = jest.fn(() => {})

      let wrapper = mountPaymentSection({
        paymentMutation: { request, result },
        meetupSubscribe,
      })
      wrapper = await fillPaymentForm(wrapper, { meetup: true })

      // NB if you simulate 'click' it does not reliably trigger a 'submit' event in the parent form
      // So select the form and explicitly simulate a 'submit'.  For some reason simulating a 'submit'
      // on the button works as well, but that seems hackish so this method was used instead.
      // wrapper
      //   .find(SubmitPaymentFormButton)
      //   .closest('form')
      //   .simulate('submit')

      // await waitForExpect(() => {
      //   expect(meetupSubscribe).toHaveBeenCalledWith({
      //     email: 'test@example.com',
      //     pathname: 'checkout',
      //   })
      // })
    })

    it('should reflect payment errors in the UI', async () => {
      const graphqlErrorResponse = {
        errors: [{ message: 'Test error' }],
      }
      let wrapper = mountPaymentSection({
        paymentMutation: {
          request,
          result: graphqlErrorResponse,
        },
      })
      wrapper = await fillPaymentForm(wrapper)

      const getNumWarnings = () =>
        wrapper.find(Alert).filterWhere(element => element.props().danger)
          .length
      expect(getNumWarnings()).toBe(0)

      wrapper
        .find(SubmitPaymentFormButton)
        .closest('form')
        .simulate('submit')

      await waitForExpect(() => {
        wrapper.update()
        expect(getNumWarnings()).toBe(1)
      })
    })
  })

  describe('Company details', () => {
    let request, result
    beforeAll(() => {
      request = {
        query: VALIDATE_VIES,
        variables: {
          countryCode: 'GB',
          vatNumber: '999 9999 73',
        },
      }
      result = {
        data: {
          isVatNumberValid: true,
        },
      }
    })

    const mountCompanyDetailsSection = async () => {
      let change
      const wrapper = mountPaymentSection({
        paymentMutation: { request, result },
      })
      await waitForExpect(() => {
        wrapper.update()
        expect(wrapper.find(BuyButton).length).toBe(1)

        wrapper.find(BuyButton).simulate('click')
        wrapper.find(AddCompanyDetailsButton).simulate('click')

        wrapper.update()
        change = (Component, newValue) =>
          wrapper
            .find(Component)
            .find('input')
            .simulate('change', { target: { value: newValue } })
      })
      return {
        wrapper,
        change,
      }
    }

    describe('Client-side validation', () => {
      const INVALID_EU_VAT_NUMBER = 'XYZ123'
      const VALID_EU_VAT_NUMBER = 'GB999 9999 73'

      const getNumErrorNodes = wrapper =>
        wrapper
          .find(EUVATNumberField)
          .findWhere(
            node =>
              node.children().length === 0 &&
              node.text() === 'EU VAT number is not correct'
          ).length

      it('should flag-up invalid-format EU vat numbers', async () => {
        const { wrapper, change } = await mountCompanyDetailsSection()
        expect(getNumErrorNodes(wrapper)).toBe(0)

        change(EUVATNumberField, INVALID_EU_VAT_NUMBER)
        wrapper.update()
        expect(getNumErrorNodes(wrapper)).toBe(2)
      })

      it('should not flag-up valid-format EU vat numbers', async () => {
        const { wrapper, change } = await mountCompanyDetailsSection()
        expect(getNumErrorNodes(wrapper)).toBe(0)
        change(EUVATNumberField, VALID_EU_VAT_NUMBER)
        wrapper.update()
        expect(getNumErrorNodes(wrapper)).toBe(0)
      })
    })

    describe('Server-side validation', () => {
      let getValidateButtonText, originalValidateVoucherText, wrapper

      beforeEach(async () => {
        const {
          change,
          ...restResultMounting
        } = await mountCompanyDetailsSection()
        wrapper = restResultMounting.wrapper

        change(EUVATNumberField, 'GB999 9999 73')

        getValidateButtonText = () => wrapper.find(ValidateViesButton).text()
        originalValidateVoucherText = getValidateButtonText()

        wrapper.find(ValidateViesButton).simulate('click')
        wrapper.update()
      })

      it('should show an ellipsis while graphql is validating the vat number', () => {
        expect(getValidateButtonText()).toBe('...')
      })

      describe('Success response', () => {
        it('should show an appropriate message in the validate-VAT-number button', async () => {
          expect(getValidateButtonText()).toBe('...')
          await waitForExpect(() => {
            wrapper.update()
            expect(getValidateButtonText()).toBe('Validated')
          })
        })
      })

      describe('Failure response', () => {
        beforeAll(() => {
          result = {
            data: {
              isVatNumberValid: false,
            },
          }
        })

        it('should show the default message in the validate-VAT-number button', async () => {
          expect(getValidateButtonText()).toBe('...')
          await waitForExpect(() => {
            wrapper.update()
            expect(getValidateButtonText()).toBe(originalValidateVoucherText)
          })
        })
      })
    })
  })

  describe('Voucher functionality', () => {
    let graphqlRequest = {
      query: VALIDATE_VOUCHER,
      variables: {
        voucherCode: 'asd',
        trainingInstanceId: '5aa2acda7dcc782348ea1234',
        quantity: 1,
      },
    }

    const mountVoucherSection = async (request, result) => {
      let wrapper = mountPaymentSection({
        validateVoucherQuery: { request, result },
      })
      await waitForExpect(() => {
        wrapper.update()
        wrapper.find(BuyButton).simulate('click')

        // initial expectation
        expect(wrapper.find(TotalPayablePrice).text()).toEqual('£1194')

        wrapper.find(ShowVoucherButton).simulate('click')
        wrapper
          .find('input[name="voucher"]')
          .simulate('change', { target: { value: 'asd' } })
        wrapper.find(ValidateVoucherButton).simulate('click')
      })
      return wrapper
    }

    it('should display an error message if the voucher is not valid, and not update the price', async () => {
      const graphqlInvalidVoucherResult = {
        data: {
          redeemVoucher: null,
        },
      }

      const wrapper = await mountVoucherSection(
        graphqlRequest,
        graphqlInvalidVoucherResult
      )

      await waitForExpect(() => {
        wrapper.update()
        expect(wrapper.find(TotalPayablePrice).text()).toEqual('£1194')
        expect(wrapper.find(VoucherInput).props().meta.error).toBeTruthy()
      })
    })

    it('should update the total price if the voucher is valid', async () => {
      const graphqlValidVoucherResponse = {
        data: {
          redeemVoucher: {
            netPrice: 1,
            totalDiscount: 10,
          },
        },
      }

      const wrapper = await mountVoucherSection(
        graphqlRequest,
        graphqlValidVoucherResponse
      )

      await waitForExpect(() => {
        expect(wrapper.find(TotalPayablePrice).text()).toEqual('£1.2')
      })
    })
  })

  describe('VAT rate when using EU-VAT-number', () => {
    const graphqlRequestGB = {
      query: VALIDATE_VIES,
      variables: {
        countryCode: 'GB',
        vatNumber: '999 9999 73',
      },
    }

    const graphqlRequestFR = {
      query: VALIDATE_VIES,
      variables: {
        countryCode: 'FR',
        vatNumber: '999 9999 73',
      },
    }

    const graphqlResponseValid = {
      data: {
        isVatNumberValid: true,
      },
    }

    const graphqlResponseInValid = {
      data: {
        isVatNumberValid: false,
      },
    }

    const VAT_NUMBER_GB = 'GB999 9999 73'
    const VAT_NUMBER_FR = 'FR999 9999 73'

    const showCompanyDetailsSection = async wrapper =>
      await waitForExpect(() => {
        wrapper.update()
        wrapper.find(BuyButton).simulate('click')
        wrapper.find(AddCompanyDetailsButton).simulate('click')
        wrapper.update()
      })

    const submitCompanyDetailsSection = wrapper => {
      wrapper.find(ValidateViesButton).simulate('click')
      wrapper.update()
    }

    const getButtonText = wrapper => wrapper.find(ValidateViesButton).text()

    const change = (wrapper, Component, newValue) =>
      wrapper
        .find(Component)
        .find('input')
        .simulate('change', { target: { value: newValue } })

    it('should use 1.2 as the VAT rate before the form is submitted', async () => {
      const wrapper = mountPaymentSection({
        validateVatQuery: {
          request: graphqlRequestGB,
          result: graphqlResponseValid,
        },
      })

      await showCompanyDetailsSection(wrapper)

      expect(wrapper.find(CheckoutContainer).props().vatRate).toBe(1.2)
    })

    it('should show an ellipsis while graphql is validating the VAT number', async () => {
      const wrapper = mountPaymentSection({
        validateVatQuery: {
          request: graphqlRequestGB,
          result: graphqlResponseValid,
        },
      })

      await showCompanyDetailsSection(wrapper)
      change(wrapper, EUVATNumberField, VAT_NUMBER_GB)
      submitCompanyDetailsSection(wrapper)

      expect(getButtonText(wrapper)).toBe('...')
    })

    it('should show the word "validated" in the validate-VAT-number button if the VAT number could be validated successfully', async () => {
      const wrapper = mountPaymentSection({
        validateVatQuery: {
          request: graphqlRequestGB,
          result: graphqlResponseValid,
        },
      })

      await showCompanyDetailsSection(wrapper)
      change(wrapper, EUVATNumberField, VAT_NUMBER_GB)
      submitCompanyDetailsSection(wrapper)

      expect(getButtonText(wrapper)).toBe('...')
      await waitForExpect(() => {
        wrapper.update()
        expect(getButtonText(wrapper)).toBe('Validated')
      })
    })

    it('should show the default text in the validate-VAT-number button if the VAT number could not be validated successfully', async () => {
      const wrapper = mountPaymentSection({
        validateVatQuery: {
          request: graphqlRequestGB,
          result: graphqlResponseInValid,
        },
      })

      await showCompanyDetailsSection(wrapper)
      change(wrapper, EUVATNumberField, VAT_NUMBER_GB)
      const originalText = getButtonText(wrapper)
      submitCompanyDetailsSection(wrapper)

      expect(getButtonText(wrapper)).toBe('...')
      await waitForExpect(() => {
        wrapper.update()
        expect(getButtonText(wrapper)).toBe(originalText)
      })
    })

    it('should use 1.2 as the VAT rate if the user enters an invalid VAT number', async () => {
      const wrapper = mountPaymentSection({
        validateVatQuery: {
          request: graphqlRequestGB,
          result: graphqlResponseInValid,
        },
      })

      await showCompanyDetailsSection(wrapper)
      change(wrapper, EUVATNumberField, VAT_NUMBER_GB)
      const originalText = getButtonText(wrapper)
      submitCompanyDetailsSection(wrapper)

      expect(getButtonText(wrapper)).toBe('...')
      await waitForExpect(() => {
        wrapper.update()
        expect(getButtonText(wrapper)).toBe(originalText)
        expect(wrapper.find(CheckoutContainer).props().vatRate).toBe(1.2)
      })
    })

    it('should use 1.2 as the VAT rate if the user enters a valid VAT number with a GB country code', async () => {
      const wrapper = mountPaymentSection({
        validateVatQuery: {
          request: graphqlRequestGB,
          result: graphqlResponseValid,
        },
      })

      await showCompanyDetailsSection(wrapper)
      change(wrapper, EUVATNumberField, VAT_NUMBER_GB)
      const originalText = getButtonText(wrapper)
      submitCompanyDetailsSection(wrapper)

      expect(getButtonText(wrapper)).toBe('...')
      await waitForExpect(() => {
        wrapper.update()
        expect(getButtonText(wrapper)).toBe('Validated')
        expect(wrapper.find(CheckoutContainer).props().vatRate).toBe(1.2)
      })
    })

    it('should use 0 as the VAT rate if the user enters a valid VAT number with a non-GB country code', async () => {
      const wrapper = mountPaymentSection({
        validateVatQuery: {
          request: graphqlRequestFR,
          result: graphqlResponseValid,
        },
      })

      await showCompanyDetailsSection(wrapper)
      change(wrapper, EUVATNumberField, VAT_NUMBER_FR)
      const originalText = getButtonText(wrapper)
      submitCompanyDetailsSection(wrapper)

      expect(getButtonText(wrapper)).toBe('...')
      await waitForExpect(() => {
        wrapper.update()
        expect(getButtonText(wrapper)).toBe('Validated')
        expect(wrapper.find(CheckoutContainer).props().vatRate).toBe(0)
      })
    })
  })
})
