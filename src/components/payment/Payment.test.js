import React from 'react'
import waitForExpect from 'wait-for-expect'
import { act } from 'react-dom/test-utils'
import { render, fireEvent, wait } from '@testing-library/react'

import { MEETUP } from '../../config/data'
import Root from '../../../test/utils/Root'
import { PAY_MUTATION, VALIDATE_VIES_QUERY } from './checkout/CheckoutContainer'
import {
  QUERY_UPCOMING_VOUCHERS,
  VALIDATE_VOUCHER_QUERY,
} from './PaymentSection'
import PaymentSection from './PaymentSection'

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
    type: 'Part-time',
  },
}

const defaultAutoVoucherQuery = {
  request: {
    query: QUERY_UPCOMING_VOUCHERS,
    variables: {
      trainingInstanceId: '5aa2acda7dcc782348ea1234',
    },
  },
  result: {
    data: {
      trainingInstance: {
        upcomingAutomaticDiscounts: {
          edges: [],
        },
      },
    },
  },
}

const mountPaymentSection = ({
  trainingData = defaultTrainingData,
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

  return render(
    <Root graphQlMocks={mocks}>
      <PaymentSection
        {...trainingData}
        navigate={navigate}
        paymentApi={paymentApi}
        triggerSubscribe={triggerSubscribe}
      />
    </Root>
  )
}

describe('<PaymentSection />', () => {
  let request = {
    query: PAY_MUTATION,
    variables: {
      voucherCode: '',
      quantity: 1,
      itemId: '5aa2acda7dcc782348ea1234',
      itemType: 'training',
      email: 'test@example.com',
      name: 'Joe Bloggs',
      token: 2,
      vatCountry: null,
      vatNumber: null,
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
    const fillPaymentForm = async ({
      getByLabelText,
      getByText,
      showSubscribeToNewsletter,
    }) => {
      await wait(() => {
        fireEvent.click(getByText(/Buy now/i))

        const change = (text, value) =>
          fireEvent.change(getByLabelText(text), {
            target: { value },
          })

        change(/Your name:/i, 'Joe Bloggs')
        change(/Your email address:/i, 'test@example.com')
        if (showSubscribeToNewsletter) {
          fireEvent.click(getByLabelText(/Subscribe me/i))
        }
        change(/Name on card:/i, 'Mr J Bloggs')
        change(/Card number:/i, '4242424242424242')
        change(/Expiry date:/i, '12/99')
        change(/CVC:/i, '123')
      })
    }

    it('should make a payment', async () => {
      const navigate = jest.fn(() => {})
      const { getByText, getByLabelText } = mountPaymentSection({
        paymentMutation: { request, result },
        navigate,
      })

      await act(async () => {
        await fillPaymentForm({ getByText, getByLabelText })
      })

      fireEvent.click(getByText(/Buy now/i))

      await waitForExpect(() => {
        expect(navigate).toHaveBeenCalledWith('/payment-confirmation', {
          email: 'test@example.com',
          makePayment: result.data.makePayment,
          trainingInstanceId: request.variables.itemId,
        })
      })
    })

    it('should trigger an email subscribe if meetup is true and the subscribe to newsletter checkbox is checked', async () => {
      const triggerSubscribe = jest.fn(() => {})

      const { getByText, getByLabelText } = mountPaymentSection({
        paymentMutation: { request, result },
        triggerSubscribe,
        trainingData: {
          training: {
            address: 'Publicis Sapient - Eden House, 8 Spital Square',
            city: 'London',
            country: 'UK',
            endDate: '2019-05-23T20:00:00.000Z',
            id: '5aa2acda7dcc782348ea1234',
            mapUrl: 'https://goo.gl/maps/jjX9zs5Ags32',
            price: 995,
            startDate: '2019-04-23T17:00:00.000Z',
            type: MEETUP,
          },
        },
      })

      await fillPaymentForm({
        getByText,
        getByLabelText,
        showSubscribeToNewsletter: true,
      })

      fireEvent.click(getByText(/Buy now/i))

      await waitForExpect(() => {
        expect(triggerSubscribe).toHaveBeenCalledWith({
          email: 'test@example.com',
          pathname: 'checkout',
        })
      })
    })

    it('should reflect API payment errors in the UI', async () => {
      const graphqlErrorResponse = {
        errors: [{ message: 'Test error' }],
      }
      const {
        getByText,
        getByLabelText,
        queryAllByTestId,
      } = mountPaymentSection({
        paymentMutation: {
          request,
          result: graphqlErrorResponse,
        },
      })
      await fillPaymentForm({ getByText, getByLabelText })

      const getNumWarnings = () => queryAllByTestId('danger-alert')

      expect(getNumWarnings().length).toBe(0)
      fireEvent.click(getByText(/Buy now/i))

      await waitForExpect(() => {
        expect(getNumWarnings().length).toBe(1)
      })
    })
  })

  describe('Company details', () => {
    let request, result
    beforeAll(() => {
      request = {
        query: VALIDATE_VIES_QUERY,
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
      const helpers = mountPaymentSection({
        paymentMutation: { request, result },
      })
      const { getByText, getByLabelText } = helpers
      await wait(() => {
        fireEvent.click(getByText(/Buy now/i))
      })
      fireEvent.click(getByText(/Add company details/i))

      const change = (text, value) =>
        fireEvent.change(getByLabelText(text), {
          target: { value },
        })

      return {
        ...helpers,
        change,
      }
    }

    describe('Client-side validation', () => {
      it('should flag-up invalid-format EU vat numbers', async () => {
        const INVALID_EU_VAT_NUMBER = 'XYZ123'
        const {
          change,
          getAllByText,
          findAllByText,
        } = await mountCompanyDetailsSection()
        expect(
          findAllByText(/EU VAT number is not correct/i).length
        ).toBeFalsy()
        change(/EU VAT number:/i, INVALID_EU_VAT_NUMBER)

        expect(getAllByText(/EU VAT number is not correct/i).length).toBe(1)
      })

      it('should not flag-up valid-format EU vat numbers', async () => {
        const VALID_EU_VAT_NUMBER = 'GB999 9999 73'
        const { change, findAllByText } = await mountCompanyDetailsSection()
        expect(
          findAllByText(/EU VAT number is not correct/i).length
        ).toBeFalsy()
        change(/EU VAT number:/i, VALID_EU_VAT_NUMBER)

        expect(
          findAllByText(/EU VAT number is not correct/i).length
        ).toBeFalsy()
      })
    })

    describe('Server-side validation', () => {
      it('should show an ellipsis while graphql is validating the vat number', async () => {
        const {
          change,
          getAllByText,
          getByText,
        } = await mountCompanyDetailsSection()

        change(/EU VAT number:/i, 'GB999 9999 73')
        fireEvent.click(getByText(/Validate EU VAT and update taxes/i))
        expect(getAllByText(/Validating.../i).length).toBe(1)
      })

      it('should show an appropriate message in the validate-VAT-number button', async () => {
        const { change, getByText } = await mountCompanyDetailsSection()

        change(/EU VAT number:/i, 'GB999 9999 73')
        fireEvent.click(getByText(/Validate EU VAT and update taxes/i))

        await wait(() => {
          expect(getByText(/VAT number validated/i)).toBeTruthy()
        })
      })

      it('should show the default message in the validate-VAT-number button if the validation fails', async () => {
        result = {
          data: {
            isVatNumberValid: false,
          },
        }
        const {
          change,
          getByText,
          getAllByText,
        } = await mountCompanyDetailsSection()

        change(/EU VAT number:/i, 'GB999 9999 73')
        fireEvent.click(getByText(/Validate EU VAT and update taxes/i))

        expect(getAllByText(/Validating.../i).length).toBe(1)

        await wait(() => {
          expect(getByText(/Validate EU VAT and update taxes/i)).toBeTruthy()
        })
      })
    })
  })

  describe('Voucher functionality', () => {
    let graphqlRequest = {
      query: VALIDATE_VOUCHER_QUERY,
      variables: {
        voucherCode: 'asd',
        trainingInstanceId: '5aa2acda7dcc782348ea1234',
        quantity: 1,
      },
    }

    const mountVoucherSection = async (request, result) => {
      const helpers = mountPaymentSection({
        validateVoucherQuery: { request, result },
      })
      const { getByText, getAllByText, getByLabelText } = helpers
      await wait(() => {
        fireEvent.click(getByText(/Buy now/i))
        expect(getAllByText(/£1194/i).length).toBe(2)

        fireEvent.click(getByText(/Add discount voucher/i))
        fireEvent.change(getByLabelText(/Discount voucher:/i), {
          target: { value: 'asd' },
        })

        expect(getByText(/Validate voucher/i)).toBeTruthy()
      })

      return helpers
    }

    it('should display an error message if the voucher is not valid, and not update the price', async () => {
      const graphqlInvalidVoucherResult = {
        data: {
          redeemVoucher: null,
        },
      }
      const { findByText } = await mountVoucherSection(
        graphqlRequest,
        graphqlInvalidVoucherResult
      )

      await wait(() => {
        expect(findByText('£1194'))
        expect(findByText(/The voucher is not valid/i)).toBeTruthy()
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

      const { getByText, findAllByText } = await mountVoucherSection(
        graphqlRequest,
        graphqlValidVoucherResponse
      )

      fireEvent.click(getByText(/Validate voucher/i))

      await waitForExpect(async () => {
        const price = await findAllByText(/£1.2/i)
        expect(price.length).toBe(2)
      })
    })
  })

  describe('VAT rate when using EU-VAT-number', () => {
    const graphqlRequestGB = {
      query: VALIDATE_VIES_QUERY,
      variables: {
        countryCode: 'GB',
        vatNumber: '999 9999 73',
      },
    }

    const graphqlRequestFR = {
      query: VALIDATE_VIES_QUERY,
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

    const showCompanyDetailsSection = async ({ getByText, getByLabelText }) => {
      await wait(() => {
        fireEvent.click(getByText(/Buy now/i))
        fireEvent.click(getByText(/Add company details/i))
      })

      const changeVatNumber = value =>
        fireEvent.change(getByLabelText(/EU VAT number:/i), {
          target: { value },
        })

      return { changeVatNumber }
    }

    it('should use 1.2 as the VAT rate before the form is submitted', async () => {
      const helpers = mountPaymentSection({
        validateVatQuery: {
          request: graphqlRequestGB,
          result: graphqlResponseValid,
        },
      })

      await showCompanyDetailsSection(helpers)

      await waitForExpect(() => {
        const price = helpers.findAllByText(/VAT (20%):/i)
        expect(price).toBeTruthy()
      })
    })

    it('should show an ellipsis while graphql is validating the VAT number', async () => {
      const helpers = mountPaymentSection({
        validateVatQuery: {
          request: graphqlRequestGB,
          result: graphqlResponseValid,
        },
      })

      const { changeVatNumber } = await showCompanyDetailsSection(helpers)
      const { getAllByText, getByText } = helpers

      changeVatNumber(VAT_NUMBER_GB)
      fireEvent.click(getByText(/Validate EU VAT and update taxes/i))
      expect(getAllByText(/Validating.../i).length).toBe(1)
    })

    it('should show the word "validated" in the validate-VAT-number button if the VAT number could be validated successfully', async () => {
      const helpers = mountPaymentSection({
        validateVatQuery: {
          request: graphqlRequestGB,
          result: graphqlResponseValid,
        },
      })

      const { changeVatNumber } = await showCompanyDetailsSection(helpers)
      const { getAllByText, getByText } = helpers

      changeVatNumber(VAT_NUMBER_GB)
      fireEvent.click(getByText(/Validate EU VAT and update taxes/i))

      await waitForExpect(() => {
        expect(getAllByText(/VAT number validated/i).length).toBe(1)
      })
    })

    it('should show the default text in the validate-VAT-number button if the VAT number could not be validated successfully', async () => {
      const helpers = mountPaymentSection({
        validateVatQuery: {
          request: graphqlRequestGB,
          result: graphqlResponseInValid,
        },
      })

      const { changeVatNumber } = await showCompanyDetailsSection(helpers)
      const { getAllByText, getByText } = helpers

      changeVatNumber(VAT_NUMBER_GB)
      fireEvent.click(getByText(/Validate EU VAT and update taxes/i))

      await wait(() => {
        expect(getAllByText(/Validate EU VAT and update taxes/i).length).toBe(1)
      })
    })

    it('should use 1.2 as the VAT rate if the user enters an invalid VAT number', async () => {
      const helpers = mountPaymentSection({
        validateVatQuery: {
          request: graphqlRequestGB,
          result: graphqlResponseInValid,
        },
      })

      const { changeVatNumber } = await showCompanyDetailsSection(helpers)
      const { getAllByText, getByText, findAllByText } = helpers

      changeVatNumber(VAT_NUMBER_GB)
      fireEvent.click(getByText(/Validate EU VAT and update taxes/i))

      await wait(() => {
        expect(getAllByText(/Validate EU VAT and update taxes/i).length).toBe(1)
        const price = findAllByText(/VAT (20%):/i)
        expect(price).toBeTruthy()
      })
    })

    it('should use 1.2 as the VAT rate if the user enters a valid VAT number with a GB country code', async () => {
      const helpers = mountPaymentSection({
        validateVatQuery: {
          request: graphqlRequestGB,
          result: graphqlResponseValid,
        },
      })

      const { changeVatNumber } = await showCompanyDetailsSection(helpers)
      const { getAllByText, getByText, findAllByText } = helpers

      changeVatNumber(VAT_NUMBER_GB)
      fireEvent.click(getByText(/Validate EU VAT and update taxes/i))

      await waitForExpect(() => {
        expect(getAllByText(/VAT number validated/i).length).toBe(1)
        const price = findAllByText(/VAT (20%):/i)
        expect(price).toBeTruthy()
      })
    })

    it('should use 0 as the VAT rate if the user enters a valid VAT number with a non-GB country code', async () => {
      const helpers = mountPaymentSection({
        validateVatQuery: {
          request: graphqlRequestFR,
          result: graphqlResponseValid,
        },
      })

      const { changeVatNumber } = await showCompanyDetailsSection(helpers)
      const { getAllByText, getByText, findAllByText } = helpers

      changeVatNumber(VAT_NUMBER_FR)
      fireEvent.click(getByText(/Validate EU VAT and update taxes/i))

      await waitForExpect(() => {
        expect(getAllByText(/VAT number validated/i).length).toBe(1)
        const price = findAllByText(/VAT (0%):/i)
        expect(price).toBeTruthy()
      })
    })
  })
})
