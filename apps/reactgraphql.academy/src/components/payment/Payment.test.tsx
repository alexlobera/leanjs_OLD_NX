/* eslint-disable @typescript-eslint/no-empty-function */

import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, fireEvent, waitFor } from '@testing-library/react';

import Root from '../../../test/utils/Root';
import {
  PAY_MUTATION,
  VALIDATE_VIES_QUERY,
} from './checkout/CheckoutContainer';
import {
  QUERY_UPCOMING_TRAINING_VOUCHERS,
  VALIDATE_VOUCHER_QUERY,
  QUERY_UPCOMING_EVENT_VOUCHERS,
} from './PaymentSection';
import PaymentSection from './PaymentSection';

const paymentApi = {
  setPublishableKey: () => {},
  card: {
    createToken: (data, callback) => callback('test-status', { id: 2 }),
  },
};

const defaultItemData = {
  item: {
    address: 'Publicis Sapient - Eden House, 8 Spital Square',
    city: 'London',
    country: 'UK',
    endDate: '2039-05-23T20:00:00.000Z',
    id: '@VElOOjVlZjllYWE3MmJjZjNlNjUzYmFiNDRiMg==', //training instance
    mapUrl: 'https://goo.gl/maps/jjX9zs5Ags32',
    standardPrice: 995,
    startDate: '2039-04-23T17:00:00.000Z',
    __typename: 'UpMentoring_TrainingInstance',
  },
};

const defaultAutoVoucherQuery = {
  request: {
    query: QUERY_UPCOMING_TRAINING_VOUCHERS,
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
};

interface MountPaymentSection {
  itemData?: any;
  paymentMutation?: any;
  autoVoucherQuery?: any;
  validateVoucherQuery?: any;
  validateVatQuery?: any;
  navigate?: any;
  triggerSubscribe?: any;
}

const mountPaymentSection = ({
  itemData = defaultItemData,
  paymentMutation = null,
  autoVoucherQuery = defaultAutoVoucherQuery,
  validateVoucherQuery = null,
  validateVatQuery = null,
  navigate = () => {},
  triggerSubscribe = () => {},
}: MountPaymentSection) => {
  const mocks = [
    paymentMutation,
    autoVoucherQuery,
    validateVoucherQuery,
    validateVatQuery,
  ].filter((obj) => obj);

  return render(
    <Root graphQlMocks={mocks}>
      <PaymentSection
        {...itemData}
        navigate={navigate}
        paymentApi={paymentApi}
        triggerSubscribe={triggerSubscribe}
      />
    </Root>
  );
};

describe('<PaymentSection />', () => {
  let request = {
    query: PAY_MUTATION,
    variables: {
      voucherCode: '',
      quantity: 1,
      itemId: '@VElOOjVlZjllYWE3MmJjZjNlNjUzYmFiNDRiMg==',
      // shoppingItemEnum: 'training',
      email: 'test@example.com',
      name: 'Joe Bloggs',
      token: 2,
      vatCountry: null,
      vatNumber: null,
    },
  };
  let result = {
    data: {
      makePayment: {
        payment: {
          id: '123',
          currency: 'gbp',
          amount: 1194,
          metadata: {},
        },
      },
    },
  };

  describe('Making payments', () => {
    const fillPaymentForm = async ({
      getByLabelText,
      getByText,
      showSubscribeToNewsletter = null,
    }) => {
      const change = (text, value) =>
        fireEvent.change(getByLabelText(text), {
          target: { value },
        });
      await waitFor(() => {
        fireEvent.click(getByText(/Buy now/i));
      });
      change(/Your name:/i, 'Joe Bloggs');
      change(/Your email address:/i, 'test@example.com');
      if (showSubscribeToNewsletter) {
        const checkbox = getByLabelText(/Subscribe me/i);
        fireEvent.click(checkbox);
      }
      change(/Name on card:/i, 'Mr J Bloggs');
      change(/Card number:/i, '4242424242424242');
      change(/Expiry date:/i, '12/99');
      change(/CVC:/i, '123');
    };

    it('should make a payment', async () => {
      const navigate = jest.fn(() => {});
      const { getByText, getByLabelText } = mountPaymentSection({
        paymentMutation: { request, result },
        navigate,
      });

      await act(async () => {
        await fillPaymentForm({ getByText, getByLabelText });
      });

      fireEvent.click(getByText(/Place Order/i));

      await waitFor(() => {
        expect(navigate).toHaveBeenCalledWith('/payment-confirmation', {
          email: 'test@example.com',
          makePayment: result.data.makePayment,
          itemId: request.variables.itemId,
          // shoppingItemEnum: request.variables.shoppingItemEnum,
        });
      });
    });

    it('should not show the checkout if the training instance has endend', async () => {
      const navigate = jest.fn(() => {});
      const { getByText } = mountPaymentSection({
        paymentMutation: { request, result },
        navigate,
        itemData: {
          item: {
            address: 'Publicis Sapient - Eden House, 8 Spital Square',
            city: 'London',
            country: 'UK',
            endDate: '2019-05-23T20:00:00.000Z',
            id: '@VElOOjVlZjllYWE3MmJjZjNlNjUzYmFiNDRiMg==',
            mapUrl: 'https://goo.gl/maps/jjX9zs5Ags32',
            standardPrice: 995,
            startDate: '2019-04-23T17:00:00.000Z',
            __typename: 'UpMentoring_TrainingInstance',
          },
        },
      });

      await waitFor(() => {
        expect(getByText('The event has ended')).toBeTruthy();
      });
    });

    it('should trigger an email subscribe if meetup is true and the subscribe to newsletter checkbox is checked', async () => {
      const triggerSubscribe = jest.fn(() => {});

      const { getByText, getByLabelText } = mountPaymentSection({
        paymentMutation: { request, result },
        autoVoucherQuery: {
          request: {
            query: QUERY_UPCOMING_EVENT_VOUCHERS,
            variables: {
              eventId: '@RVZFOjVmMGNjMmRlM2JiMmM1MzMwNDE5NWIzNA==',
            },
          },
          result: {
            data: {
              events: {
                upcomingAutomaticDiscounts: {
                  edges: [],
                },
              },
            },
          },
        },
        triggerSubscribe,
        itemData: {
          item: {
            address: 'Publicis Sapient - Eden House, 8 Spital Square',
            city: 'London',
            country: 'UK',
            endDate: '2039-05-23T20:00:00.000Z',
            id: '@RVZFOjVmMGNjMmRlM2JiMmM1MzMwNDE5NWIzNA==',
            mapUrl: 'https://goo.gl/maps/jjX9zs5Ags32',
            standardPrice: 995,
            startDate: '2039-04-23T17:00:00.000Z',
            __typename: 'UpMentoring_Event',
          },
        },
      });

      await fillPaymentForm({
        getByText,
        getByLabelText,
        showSubscribeToNewsletter: true,
      });

      fireEvent.click(getByText(/Place Order/i));

      await waitFor(() => {
        expect(triggerSubscribe).toHaveBeenCalledWith({
          email: 'test@example.com',
          form: 'checkout',
          city: undefined,
        });
      });
    });

    it('should reflect API payment errors in the UI', async () => {
      const graphqlErrorResponse = {
        errors: [{ message: 'Test error' }],
      };
      const {
        getByText,
        getByLabelText,
        queryAllByTestId,
      } = mountPaymentSection({
        paymentMutation: {
          request,
          result: graphqlErrorResponse,
        },
      });
      await fillPaymentForm({ getByText, getByLabelText });

      const getNumWarnings = () => queryAllByTestId('danger-alert');

      expect(getNumWarnings().length).toBe(0);
      fireEvent.click(getByText(/Place order/i));

      await waitFor(() => {
        expect(getNumWarnings().length).toBe(1);
      });
    });
  });

  describe('Company details', () => {
    let request, result;
    beforeAll(() => {
      request = {
        query: VALIDATE_VIES_QUERY,
        variables: {
          countryCode: 'GB',
          vatNumber: '999 9999 73',
        },
      };
      result = {
        data: {
          isVatNumberValid: true,
        },
      };
    });

    const mountCompanyDetailsSection = async () => {
      const helpers = mountPaymentSection({
        paymentMutation: { request, result },
      });
      const { getByText, getByLabelText } = helpers;

      await waitFor(() => {
        fireEvent.click(getByText(/Buy now/i));
      });

      fireEvent.click(getByText(/Add company details/i));

      const change = (text, value) =>
        fireEvent.change(getByLabelText(text), {
          target: { value },
        });

      return {
        ...helpers,
        change,
      };
    };

    describe('Client-side validation', () => {
      it('should flag-up invalid-format EU vat numbers', async () => {
        const INVALID_EU_VAT_NUMBER = 'XYZ123';
        const {
          change,
          getByText,
          queryAllByText,
        } = await mountCompanyDetailsSection();

        expect(
          queryAllByText(/EU VAT number is not correct/i).length
        ).toBeFalsy();

        change(/EU VAT number:/i, INVALID_EU_VAT_NUMBER);

        getByText(/EU VAT number is not correct/i);
      });

      it('should not flag-up valid-format EU vat numbers', async () => {
        const VALID_EU_VAT_NUMBER = 'GB999 9999 73';
        const { change, queryAllByText } = await mountCompanyDetailsSection();
        expect(
          queryAllByText(/EU VAT number is not correct/i).length
        ).toBeFalsy();
        change(/EU VAT number:/i, VALID_EU_VAT_NUMBER);

        expect(
          queryAllByText(/EU VAT number is not correct/i).length
        ).toBeFalsy();
      });
    });

    describe('Server-side validation', () => {
      it('should show an ellipsis while graphql is validating the vat number', async () => {
        const { change, getByText } = await mountCompanyDetailsSection();

        change(/EU VAT number:/i, 'GB999 9999 73');

        fireEvent.click(getByText(/Validate EU VAT and update taxes/i));

        getByText(/Validating.../i);
      });

      it('should show an appropriate message in the validate-VAT-number button', async () => {
        const { change, getByText } = await mountCompanyDetailsSection();

        change(/EU VAT number:/i, 'GB999 9999 73');

        fireEvent.click(getByText(/Validate EU VAT and update taxes/i));

        await waitFor(() => {
          getByText(/VAT number validated/i);
        });
      });

      it('should show the default message in the validate-VAT-number button if the validation fails', async () => {
        result = {
          data: {
            isVatNumberValid: false,
          },
        };
        const { change, getByText } = await mountCompanyDetailsSection();

        change(/EU VAT number:/i, 'GB999 9999 73');
        fireEvent.click(getByText(/Validate EU VAT and update taxes/i));

        getByText(/Validating.../i);

        await waitFor(() => {
          getByText(/Validate EU VAT and update taxes/i);
        });
      });
    });
  });

  describe('Voucher functionality', () => {
    let graphqlRequest = {
      query: VALIDATE_VOUCHER_QUERY,
      variables: {
        voucherCode: 'asd',
        trainingInstanceId: '5aa2acda7dcc782348ea1234',
        quantity: 1,
      },
    };

    const mountVoucherSection = async (request, result) => {
      const helpers = mountPaymentSection({
        validateVoucherQuery: { request, result },
      });
      const { getByText, getAllByText, getByLabelText } = helpers;

      await waitFor(() => {
        fireEvent.click(getByText(/Buy now/i));
      });

      expect(getAllByText(/£1194/i).length).toBe(2);

      fireEvent.click(getByText(/Add discount voucher/i));

      fireEvent.change(getByLabelText(/Discount voucher:/i), {
        target: { value: 'asd' },
      });
      fireEvent.click(getByText(/Validate voucher/i));

      return helpers;
    };

    it('should display an error message if the voucher is not valid, and not update the price', async () => {
      const graphqlInvalidVoucherResult = {
        data: {
          redeemVoucher: null,
        },
      };
      const { findAllByText, getByText } = await mountVoucherSection(
        graphqlRequest,
        graphqlInvalidVoucherResult
      );

      await findAllByText('£1194');
      await waitFor(() => {
        getByText(/The voucher is not valid/i);
      });
    });

    it('should update the total price if the voucher is valid', async () => {
      const graphqlValidVoucherResponse = {
        data: {
          redeemVoucher: {
            standardPrice: 10,
            discountPrice: {
              currentPrice: 1,
            },
          },
        },
      };

      const { findAllByText } = await mountVoucherSection(
        graphqlRequest,
        graphqlValidVoucherResponse
      );

      await waitFor(async () => {
        const price = await findAllByText(/£1.2/i);
        expect(price.length).toBe(2);
      });
    });
  });

  describe('VAT rate when using EU-VAT-number', () => {
    const graphqlRequestGB = {
      query: VALIDATE_VIES_QUERY,
      variables: {
        countryCode: 'GB',
        vatNumber: '999 9999 73',
      },
    };

    const graphqlRequestFR = {
      query: VALIDATE_VIES_QUERY,
      variables: {
        countryCode: 'FR',
        vatNumber: '999 9999 73',
      },
    };

    const graphqlResponseValid = {
      data: {
        isVatNumberValid: true,
      },
    };

    const graphqlResponseInValid = {
      data: {
        isVatNumberValid: false,
      },
    };

    const VAT_NUMBER_GB = 'GB999 9999 73';
    const VAT_NUMBER_FR = 'FR999 9999 73';

    const showCompanyDetailsSection = async (
      { getByText, getByLabelText },
      vatNumber = null
    ) => {
      await waitFor(() => {
        fireEvent.click(getByText(/Buy now/i));
      });

      fireEvent.click(getByText(/Add company details/i));

      if (vatNumber) {
        fireEvent.change(getByLabelText(/EU VAT number:/i), {
          target: { value: vatNumber },
        });
      }
    };

    it('should use 1.2 as the VAT rate before the form is submitted', async () => {
      const helpers = mountPaymentSection({
        validateVatQuery: {
          request: graphqlRequestGB,
          result: graphqlResponseValid,
        },
      });

      await showCompanyDetailsSection(helpers);

      helpers.getAllByText(/VAT \(20%\):/i);
    });

    it('should show an ellipsis while graphql is validating the VAT number', async () => {
      const helpers = mountPaymentSection({
        validateVatQuery: {
          request: graphqlRequestGB,
          result: graphqlResponseValid,
        },
      });

      await showCompanyDetailsSection(helpers, VAT_NUMBER_GB);
      const { getByText } = helpers;

      fireEvent.click(getByText(/Validate EU VAT and update taxes/i));

      getByText(/Validating.../i);
    });

    it('should show the word "validated" in the validate-VAT-number button if the VAT number could be validated successfully', async () => {
      const helpers = mountPaymentSection({
        validateVatQuery: {
          request: graphqlRequestGB,
          result: graphqlResponseValid,
        },
      });

      await showCompanyDetailsSection(helpers, VAT_NUMBER_GB);
      const { getByText } = helpers;

      fireEvent.click(getByText(/Validate EU VAT and update taxes/i));

      await waitFor(() => {
        getByText(/VAT number validated/i);
      });
    });

    it('should show the default text in the validate-VAT-number button if the VAT number could not be validated successfully', async () => {
      const helpers = mountPaymentSection({
        validateVatQuery: {
          request: graphqlRequestGB,
          result: graphqlResponseInValid,
        },
      });

      await showCompanyDetailsSection(helpers, VAT_NUMBER_GB);
      const { getByText } = helpers;

      fireEvent.click(getByText(/Validate EU VAT and update taxes/i));

      await waitFor(() => {
        getByText(/Validate EU VAT and update taxes/i);
      });
    });

    it('should use 1.2 as the VAT rate if the user enters an invalid VAT number', async () => {
      const helpers = mountPaymentSection({
        validateVatQuery: {
          request: graphqlRequestGB,
          result: graphqlResponseInValid,
        },
      });

      await showCompanyDetailsSection(helpers, VAT_NUMBER_GB);
      const { getAllByText, getByText } = helpers;

      fireEvent.click(getByText(/Validate EU VAT and update taxes/i));

      getByText(/Validating.../i);

      await waitFor(() => {
        getAllByText(/£199/i);
        getAllByText(/VAT \(20%\)/i);
      });
    });

    it('should use 1.2 as the VAT rate if the user enters a valid VAT number with a GB country code', async () => {
      const helpers = mountPaymentSection({
        validateVatQuery: {
          request: graphqlRequestGB,
          result: graphqlResponseValid,
        },
      });

      await showCompanyDetailsSection(helpers, VAT_NUMBER_GB);
      const { getByText } = helpers;

      fireEvent.click(getByText(/Validate EU VAT and update taxes/i));

      getByText(/Validating.../i);

      await waitFor(() => {
        getByText(/VAT number validated/i);
        getByText(/VAT \(20%\):/i);
      });
    });

    it('should use 0 as the VAT rate if the user enters a valid VAT number with a non-GB country code', async () => {
      const helpers = mountPaymentSection({
        validateVatQuery: {
          request: graphqlRequestFR,
          result: graphqlResponseValid,
        },
      });

      await showCompanyDetailsSection(helpers, VAT_NUMBER_FR);
      const { getByText } = helpers;

      fireEvent.click(getByText(/Validate EU VAT and update taxes/i));

      await waitFor(() => {
        getByText(/VAT number validated/i);
        getByText(/VAT \(0%\):/i);
      });
    });
  });
});
