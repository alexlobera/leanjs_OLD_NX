import React from 'react'
import { mount } from 'enzyme'
import waitForExpect from 'wait-for-expect'
import { Route } from 'react-router-dom'

import Root from '../../../test/utils/Root'
import VALIDATE_VOUCHER from './ValidateVoucher.graphql'
import VALIDATE_VIES from './checkout/ValidateVies.graphql'
import PAY from './checkout/Pay.graphql'
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
} from './checkout/CheckoutForm'
import { CheckoutContainer } from './checkout/CheckoutContainer'
import { Alert } from '../elements'

const paymentApi = {
  setPublishableKey: () => {},
  card: {
    createToken: (data, callback) => callback('test-status', { id: 2 }),
  },
}

const mountPaymentSection = (graphqlRequest, graphqlResponse) =>
  mount(
    <Root
      graphQlMocks={[
        {
          request: graphqlRequest,
          result: graphqlResponse,
        },
      ]}
    >
      <Route
        render={props => (
          <PaymentSection
            {...props}
            data={{
              trainingInstanceId: '5aa2acda7dcc782348ea1234',
              price: 995,
              ticketName: 'Regular Ticket',
              currency: 'gbp',
            }}
            paymentApi={paymentApi}
          />
        )}
      />
    </Root>
  )

describe('<PaymentSection />', () => {
  let wrapper

  let graphqlRequest = {
    query: PAY,
    variables: {
      voucherCode: '',
      quantity: 1,
      trainingInstanceId: '5aa2acda7dcc782348ea1234',
      email: 'test@example.com',
      name: 'Joe Bloggs',
      token: 2,
      vatRate: 1.2,
      companyName: undefined,
      companyVat: undefined,
    },
  }
  let graphqlResponse = {
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
    const fillPaymentForm = wrapper => {
      wrapper.find(BuyButton).simulate('click')
      wrapper.update()

      const change = (Component, newValue) =>
        wrapper
          .find(Component)
          .find('input')
          .simulate('change', { target: { value: newValue } })
      change(NameInput, 'Joe Bloggs')
      change(EmailInput, 'test@example.com')
      change(CCNameInput, 'Mr J Bloggs')
      change(CCNumberInput, '4242424242424242')
      change(CCExpiryInput, '12/99')
      change(CCCVCInput, '123')
      return wrapper
    }

    it('should make a payment', async () => {
      wrapper = mountPaymentSection(graphqlRequest, graphqlResponse)
      wrapper = fillPaymentForm(wrapper)

      // NB if you simulate 'click' it does not reliably trigger a 'submit' event in the parent form
      // So select the form and explicitly simulate a 'submit'.  For some reason simulating a 'submit'
      // on the button works as well, but that seems hackish so this method was used instead.
      wrapper
        .find(SubmitPaymentFormButton)
        .closest('form')
        .simulate('submit')

      await waitForExpect(() => {
        wrapper.update()
        expect(
          wrapper.find(PaymentSection).props().history.location.pathname
        ).toBe('/payment-confirmation')
      })
    })

    it('should reflect payment errors in the UI', async () => {
      const graphqlErrorResponse = {
        errors: [{ message: 'Test error' }],
      }
      wrapper = mountPaymentSection(graphqlRequest, graphqlErrorResponse)
      fillPaymentForm(wrapper)

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
    let change

    beforeAll(() => {
      graphqlRequest = {
        query: VALIDATE_VIES,
        variables: {
          countryCode: 'GB',
          vatNumber: '999 9999 73',
        },
      }
      graphqlResponse = {
        data: {
          isVatNumberValid: true,
        },
      }
    })

    const mountCompanyDetailsSection = () => {
      wrapper = mountPaymentSection(graphqlRequest, graphqlResponse)
      wrapper.find(BuyButton).simulate('click')
      wrapper.find(AddCompanyDetailsButton).simulate('click')

      wrapper.update()
      change = (Component, newValue) =>
        wrapper
          .find(Component)
          .find('input')
          .simulate('change', { target: { value: newValue } })
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

      it('should flag-up invalid-format EU vat numbers', () => {
        const { wrapper, change } = mountCompanyDetailsSection()
        expect(getNumErrorNodes(wrapper)).toBe(0)
        change(EUVATNumberField, INVALID_EU_VAT_NUMBER)
        wrapper.update()
        expect(getNumErrorNodes(wrapper)).toBe(1)
      })

      it('should not flag-up valid-format EU vat numbers', () => {
        const { wrapper, change } = mountCompanyDetailsSection()
        expect(getNumErrorNodes(wrapper)).toBe(0)
        change(EUVATNumberField, VALID_EU_VAT_NUMBER)
        wrapper.update()
        expect(getNumErrorNodes(wrapper)).toBe(0)
      })
    })

    describe('Server-side validation', () => {
      let getValidateButtonText, originalValidateVoucherText

      beforeEach(() => {
        const { wrapper, change } = mountCompanyDetailsSection()
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
          graphqlResponse = {
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

    const mountVoucherSection = (graphqlRequest, graphqlResponse) => {
      wrapper = mountPaymentSection(graphqlRequest, graphqlResponse)
      // steps
      wrapper.find(BuyButton).simulate('click')

      // initial expectation
      expect(wrapper.find(TotalPayablePrice).text()).toEqual('£1194')

      wrapper.find(ShowVoucherButton).simulate('click')
      wrapper
        .find('input[name="voucher"]')
        .simulate('change', { target: { value: 'asd' } })
      wrapper.find(ValidateVoucherButton).simulate('click')
      return wrapper
    }

    it('should display an error message if the voucher is not valid, and not update the price', async () => {
      const graphqlInvalidVoucherResponse = {
        data: {
          voucherGetNetPriceWithDiscount: null,
        },
      }

      wrapper = mountVoucherSection(
        graphqlRequest,
        graphqlInvalidVoucherResponse
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
          voucherGetNetPriceWithDiscount: {
            amount: 1,
          },
        },
      }
      wrapper = mountVoucherSection(graphqlRequest, graphqlValidVoucherResponse)
      await waitForExpect(() => {
        expect(wrapper.find(TotalPayablePrice).text()).toEqual('£1.2')
      })
    })
  })
})

// TODO:WV:20180907:Test updating taxes with EU VAT numbersy
