/* eslint no-undef: 0 */
/* eslint-disable @typescript-eslint/camelcase */

import React from 'react';

import { DEFAULT_VAT_RATE } from '../utils';
import CheckoutForm from './CheckoutForm';
import {
  getMonthFromCardDate,
  getYearFromCardDate,
  formatCreditCardNumber,
  formatExpirationDate,
  formatCVC,
} from '../utils';

const triggerSubscribe = () => alert('implement me');

const STRIPE_PUBLIC_KEY = process.env.GATSBY_STRIPE_PUBLIC_KEY;

export const VALIDATE_VIES_QUERY = `
  query isVatNumberValid(
    $countryCode: String!
    $vatNumber: String!
  ) {
    isVatNumberValid(
      countryCode: $countryCode
      vatNumber: $vatNumber
    )
  }
`;

export const PAY_MUTATION = `
mutation pay(
  $itemId: ID!
  $shoppingItemEnum: ShoppingItemEnum!
  $quantity: Int!
  $voucherCode: String
  $email: String!
  $token: String!
  $companyName: String
  $vatCountry: String
  $vatNumber: String
) {
  makePayment(
    payment: {
      shoppingItemEnum: $shoppingItemEnum
      itemId: $itemId
      quantity: $quantity
      voucherCode: $voucherCode
      email: $email
      token: $token
      companyName: $companyName
      vatCountry: $vatCountry
      vatNumber: $vatNumber
    }
  ) {
    payment {
        id
        currency
        amount
        metadata
    }
  }
}
`;
export class CheckoutContainer extends React.Component {
  state = {
    isPaymentInProgress: false,
    paymentErrorMessage: null,
    isViesValidationInProgress: false,
    isViesValid: null,
    xxx: STRIPE_PUBLIC_KEY,
  };

  resetVatRate = () => {
    if (this.state.isViesValid || this.props.vatRate !== DEFAULT_VAT_RATE) {
      this.props.updateVatRate(DEFAULT_VAT_RATE);
      this.setState({ isViesValid: false });
    }
  };

  addCourse = (e) => {
    return this.props.addCourse(e);
  };

  removeCourse = (e) => {
    return this.props.removeCourse(e);
  };

  validateVies = (fullVatNumber) => {
    if (!fullVatNumber || !fullVatNumber.length > 3) {
      return;
    }

    const vatNumber = fullVatNumber.substring(2, fullVatNumber.length);
    const countryCode = fullVatNumber.substring(0, 2);

    if (!vatNumber || !countryCode || this.state.isViesValidationInProgress) {
      return;
    }

    this.setState({ isViesValidationInProgress: true });
    this.props.statelessClient
      .query({
        query: VALIDATE_VIES_QUERY,
        variables: { countryCode, vatNumber },
      })
      .then(({ data = {} }) => {
        const { isVatNumberValid } = data;
        this.setState({
          isViesValid: isVatNumberValid,
          isViesValidationInProgress: false,
        });
        if (isVatNumberValid && countryCode.toLowerCase() !== 'gb') {
          this.props.updateVatRate(0);
        }
      })
      .catch(() => {
        this.setState({ isViesValidationInProgress: false });
      });
  };

  processPaymentError = (error) => {
    this.setState({ paymentErrorMessage: true, isPaymentInProgress: false });
    throw error;
  };

  pay = (values) => {
    if (this.state.isPaymentInProgress) {
      return;
    }
    const {
      quantity,
      statelessClient,
      trainingInstanceId,
      eventId,
      paymentApi = Stripe,
      voucher,
      navigate,
      city,
    } = this.props;

    this.setState({ paymentErrorMessage: false, isPaymentInProgress: true });
    const {
      CCnumber,
      CCexpiry,
      CCcvc,
      email,
      name,
      companyName,
      companyVat,
      meetupSubscribe,
    } = values;

    if (meetupSubscribe) {
      this.props.triggerSubscribe({ email, form: 'checkout', city });
    }

    const number = formatCreditCardNumber(CCnumber);
    const cvc = formatCVC(CCcvc);
    const formatedCCexpiry = formatExpirationDate(CCexpiry);
    const exp_month = getMonthFromCardDate(formatedCCexpiry);
    const exp_year = getYearFromCardDate(formatedCCexpiry);

    paymentApi.setPublishableKey(STRIPE_PUBLIC_KEY);
    paymentApi.card.createToken(
      { number, cvc, exp_month, exp_year },
      (status, response) => {
        let vatNumber = null,
          vatCountry = null;
        if (companyVat && companyVat.length > 2) {
          vatNumber = companyVat.substring(2, companyVat.length);
          vatCountry = companyVat.substring(0, 2);
        }
        const shoppingItemEnum = trainingInstanceId ? 'training' : 'event';
        const itemId = trainingInstanceId || eventId;
        const variables = {
          voucherCode: voucher,
          quantity,
          itemId,
          shoppingItemEnum,
          email,
          name,
          token: response.id,
          companyName,
          vatNumber,
          vatCountry,
        };

        return statelessClient
          .query({
            query: PAY_MUTATION,
            variables,
          })
          .then(({ data, errors }) => {
            if (!errors) {
              navigate('/payment-confirmation', {
                email,
                referrer: location.pathname,
                makePayment: data.makePayment,
                itemId,
                shoppingItemEnum,
              });
            } else {
              this.processPaymentError(error);
            }
          })
          .catch((error) => {
            this.processPaymentError(error);
          });
      }
    );
  };

  render() {
    const {
      quantity,
      priceQuantity,
      currentPriceQuantity,
      currency,
      vatRate,
      resetVoucher,
      validateVoucher,
      voucher,
      isVoucherValid,
      isVoucherValidationInProgress,
      showSubscribeToNewsletter,
      trialTraingInstance,
      isDonationTicket,
      sessionEmail,
    } = this.props;
    const {
      isViesValidationInProgress,
      isViesValid,
      paymentErrorMessage,
      isPaymentInProgress,
    } = this.state;
    const companyVat = {
      isViesValid,
      isViesValidationInProgress,
      validateVies: this.validateVies,
      resetVatRate: this.resetVatRate,
    };

    return (
      <CheckoutForm
        sessionEmail={sessionEmail}
        isDonationTicket={isDonationTicket}
        trialTraingInstance={trialTraingInstance}
        quantity={quantity}
        removeCourse={this.removeCourse}
        addCourse={this.addCourse}
        currency={currency}
        priceQuantity={priceQuantity}
        currentPriceQuantity={currentPriceQuantity}
        vatRate={vatRate}
        isPaymentInProgress={isPaymentInProgress}
        paymentErrorMessage={paymentErrorMessage}
        pay={this.pay}
        validateVoucher={validateVoucher}
        isVoucherValid={isVoucherValid}
        isVoucherValidationInProgress={isVoucherValidationInProgress}
        voucher={voucher}
        resetVoucher={resetVoucher}
        companyVat={companyVat}
        showSubscribeToNewsletter={showSubscribeToNewsletter}
      />
    );
  }
}

CheckoutContainer.defaultProps = {
  // trackUserBehaviour,
  triggerSubscribe,
};

CheckoutContainer.displayName = 'CheckoutContainer';

// export default withStatelessClient(CheckoutContainer);
export default CheckoutContainer;
