import React from 'react';
import { navigate } from 'gatsby';
import { H2, H3, P, Card } from '@leanjs/ui-core';
import { Link } from '@leanjs/ui-link';
import { withMagic } from '@leanjs/magic-link';
import { withGraphQLClient } from '@leanjs/graphql-client';

import Ribbon from './Ribbon';
import Checkout from './checkout/';
import Countdown from './Countdown';
import { DEFAULT_VAT_RATE, formatPrice } from './utils';

const getVoucherByPathname = () => null;

const MEETUP = 'Meetup';

export const VALIDATE_VOUCHER_QUERY = `
  query validateVoucher(
    $itemId: ID!
    $voucherCode: String!
    $quantity: Int!
  ) {
    redeemVoucher(
      itemId: $itemId
      quantity: $quantity
      voucherCode: $voucherCode
    ) {
      discountPrice {
        endsOn
        currentPrice
      }
    }
  }
`;
class PaymentSection extends React.Component {
  state = {
    quantity: 1,
    isVoucherValid: null,
    isVoucherValidationInProgress: false,
    voucher: '',
    discountCodePrice: null,
    vatRate: DEFAULT_VAT_RATE,
  };

  componentDidMount() {
    const voucher = getVoucherByPathname();
    if (voucher) {
      this.setState({ voucher });
      this.validateVoucher(voucher);
    }

    this.props.magic?.magic?.user?.getMetadata().then((metaData) => {
      if (metaData?.email) {
        this.setState({ sessionEmail: metaData.email });
      }
    });
  }

  validateVoucher = (voucher) => {
    const { client, itemId } = this.props;
    const { isVoucherValidationInProgress, quantity } = this.state;

    if (!voucher || isVoucherValidationInProgress) {
      return;
    }

    this.setVoucherInProgress(true);
    return client
      .query({
        query: VALIDATE_VOUCHER_QUERY,
        variables: {
          voucherCode: voucher,
          itemId,
          quantity,
        },
      })
      .then(({ data = {} }) => {
        const { discountPrice } = data.redeemVoucher || {};
        const { currentPrice } = discountPrice || {};
        this.setVoucherInProgress(false);
        this.setState({
          isVoucherValid: !!currentPrice,
          discountCodePrice: currentPrice,
        });
      })
      .catch((error) => {
        this.setVoucherInProgress(false);
      });
  };

  setVoucherInProgress = (isVoucherValidationInProgress) => {
    this.setState({ isVoucherValidationInProgress });
  };

  resetVoucher = (voucher = '') => {
    this.setState({
      isVoucherValid: null,
      voucher,
      discountCodePrice: null,
    });
  };

  removeCourse = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity - 1 <= 0 ? 1 : prevState.quantity - 1,
    }));
    this.resetVoucher();
  };

  addCourse = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1 > 30 ? 30 : prevState.quantity + 1,
    }));
    this.resetVoucher();
  };

  updateVatRate = (vatRate) => {
    this.setState({ vatRate });
  };

  render() {
    const {
      paymentApi,
      navigate,
      errors,
      loading,
      city,
      triggerSubscribe,
      trialTraingInstance,
      discountPrice,
      standardPrice,
      endDate,
      itemId,
      type,
      currency,
      onDemand,
    } = this.props;

    let price = 0,
      title,
      priceGoesUpOn,
      currentDiscountPrice,
      notSoldOut = true;

    if (errors) {
      title = 'There was an error';
    } else if (loading) {
      title = 'Loading ...';
    } else if (!itemId) {
      title = 'There is no event scheduled';
    } else if (new Date(endDate) < new Date()) {
      title = 'The event has ended';
    } else {
      title = type === MEETUP ? 'Donation ticket' : 'Standard price ticket';
      let ticketsLeft;

      notSoldOut = !(
        ticketsLeft !== undefined &&
        ticketsLeft !== null &&
        parseInt(ticketsLeft) <= 0
      );
      price = standardPrice;

      if (discountPrice) {
        title = 'Discount Ticket';
        priceGoesUpOn = discountPrice.endsOn
          ? new Date(discountPrice.endsOn)
          : null;
        currentDiscountPrice = discountPrice.currentPrice;
      }
    }

    const {
      quantity,
      vatRate,
      discountCodePrice,
      voucher,
      isVoucherValid,
      isVoucherValidationInProgress,
      sessionEmail,
    } = this.state;
    const priceQuantity = price * quantity;
    const currentPriceQuantity = discountCodePrice
      ? discountCodePrice
      : currentDiscountPrice
      ? currentDiscountPrice * quantity
      : priceQuantity;

    const showSubscribeToNewsletter = type === MEETUP;
    const isDonationTicket = type === MEETUP;

    return (
      <React.Fragment>
        <H2 sx={{ color: 'inverseText', mt: 0 }}>
          Price
          <Link to="#pricing" id="pricing" />
        </H2>
        <Card>
          <H3 sx={{ mt: 2 }}>
            <strong>{notSoldOut ? title : 'Sold out!'}</strong>
          </H3>
          {notSoldOut && (
            <React.Fragment>
              {currentDiscountPrice ? (
                <Ribbon>
                  <strong>
                    SAVE{' '}
                    {formatPrice(
                      currency,
                      priceQuantity - currentPriceQuantity,
                      vatRate
                    )}
                  </strong>
                </Ribbon>
              ) : null}
              {priceGoesUpOn > Date.now() ? (
                <React.Fragment>
                  <P>This price is only available for...</P>
                  <Countdown date={priceGoesUpOn} />
                </React.Fragment>
              ) : null}
              {isNaN(price) === false && price > 0 && (
                <Checkout
                  {...this.props}
                  trialTraingInstance={trialTraingInstance}
                  isDonationTicket={isDonationTicket}
                  city={city}
                  navigate={navigate}
                  itemId={itemId}
                  vatRate={vatRate}
                  updateVatRate={this.updateVatRate}
                  price={price}
                  discountPrice={currentDiscountPrice}
                  currency={currency}
                  quantity={this.state.quantity}
                  removeCourse={this.removeCourse}
                  addCourse={this.addCourse}
                  priceQuantity={priceQuantity}
                  currentPriceQuantity={currentPriceQuantity}
                  validateVoucher={this.validateVoucher}
                  resetVoucher={this.resetVoucher}
                  voucher={voucher}
                  isVoucherValid={isVoucherValid}
                  triggerSubscribe={triggerSubscribe}
                  isVoucherValidationInProgress={isVoucherValidationInProgress}
                  paymentApi={paymentApi}
                  showSubscribeToNewsletter={showSubscribeToNewsletter}
                  sessionEmail={sessionEmail}
                />
              )}
            </React.Fragment>
          )}
        </Card>
        {!onDemand && (
          <P sx={{ pt: 4 }}>
            Please be aware that the ticket only covers the cost of the
            {type === 'training' ? 'training' : 'event'}, it does not include
            travel expenses.
          </P>
        )}
      </React.Fragment>
    );
  }
}

PaymentSection.defaultProps = {
  navigate,
};

export default withGraphQLClient(withMagic(PaymentSection));
