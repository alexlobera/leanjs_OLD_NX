import React from 'react';
import { navigate } from 'gatsby';

import { graphql, withStatelessClient } from '../../api/graphql/client';
import memoize from '../../api/graphql/memoize';
import { H2, H3, P } from '../text';
import { Ribbon } from '../elements';
import Card from '../elements/Card';
// import Link from '../navigation/Link';
import Checkout from './checkout/';
import formatPrice from '../utils/currency';
import { DEFAULT_VAT_RATE } from '../../config';
import { getVoucherByPathname } from '../utils/store';
import trackUserBehaviour, {
  VOUCHER_VALIDATE,
} from '../utils/trackUserBehaviour';
// import { MEETUP } from '../../config/data';
import Countdown from './Countdown';

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
  }

  validateVoucher = (voucher) => {
    const {
      statelessClient,
      item: { id: itemId },
      trackUserBehaviour,
    } = this.props;
    const { isVoucherValidationInProgress, quantity } = this.state;

    if (!voucher || isVoucherValidationInProgress) {
      return;
    }

    this.setVoucherInProgress(true);
    trackUserBehaviour({
      event: VOUCHER_VALIDATE,
      payload: { voucher },
    });

    return statelessClient
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
      item = {},
      navigate,
      data,
      errors,
      loading,
      isOnline,
      city,
      triggerSubscribe,
      trialTraingInstance,
    } = this.props;

    // let trainingInstanceId,
    //   eventId,

    let price = 0,
      currency,
      title,
      priceGoesUpOn,
      currentDiscountPrice,
      isMeetup = false,
      notSoldOut = true;

    if (errors) {
      title = 'There was an error';
    } else if (loading) {
      title = 'Loading ...';
    } else if (!item || !item.id) {
      title = 'There is no event scheduled';
    } else if (new Date(item.endDate) < new Date()) {
      title = 'The event has ended';
    } else {
      isMeetup = item.__typename === 'UpMentoring_Event';
      title = isMeetup ? 'Donation ticket' : 'Standard price ticket';
      let ticketsLeft;
      //   if (item.shoppingItemEnum === 'event') {
      //     eventId = item.id;
      //     ticketsLeft = item.ticketsLeft;
      //   } else {
      //     trainingInstanceId = item.id;
      //   }

      notSoldOut = !(
        ticketsLeft !== undefined &&
        ticketsLeft !== null &&
        parseInt(ticketsLeft) <= 0
      );
      price = item.standardPrice;

      const dataItem =
        data && data.trainingInstance
          ? data.trainingInstance
          : data && data.event
          ? data.event
          : {};

      const { discountPrice } = dataItem;
      currency = item.currency || 'gbp';

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
    } = this.state;
    const priceQuantity = price * quantity;
    const currentPriceQuantity = discountCodePrice
      ? discountCodePrice
      : currentDiscountPrice
      ? currentDiscountPrice * quantity
      : priceQuantity;

    const showSubscribeToNewsletter = isMeetup;
    const isDonationTicket = isMeetup;

    return (
      <React.Fragment>
        <React.Fragment>
          <H2>
            Prices
            <a to="#pricing" name="pricing" />
          </H2>
          {/* <H2>
            {isNominalFee ? 'Nominal Fee' : 'Prices'}{' '}
            <a to="#pricing" name="pricing" />
          </H2>
          {isNominalFee && (
            <React.Fragment>
              <P>
                <strong>Why do we charge a nominal fee?</strong>
              </P>
              <P>
                We charge a nominal fee for community events in order to confirm
                attendance to ensure we have an accurate RSVP list. Our meetups
                are always over-subscribed so when people don't show it stops
                somone else attending.
              </P>
              <P>
                <strong>What do we do with the fee?</strong>
              </P>
              <P>
                By paying for the nominal fee you're supporting minorities in
                tech. You can read more about it in this{' '}
                <Link to="/blog/join-our-meetups-and-support-minorities-in-tech#why_we_charge_a_nominal_fee">
                  link
                </Link>
                .
              </P>
              <P>The payment confirmation email is your ticket.</P>
            </React.Fragment> */}
          <Card variant="secondary">
            <H3>
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
                    itemId={item.id}
                    // trainingInstanceId={trainingInstanceId}
                    // eventId={eventId}
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
                    isVoucherValidationInProgress={
                      isVoucherValidationInProgress
                    }
                    paymentApi={paymentApi}
                    showSubscribeToNewsletter={showSubscribeToNewsletter}
                  />
                )}
              </React.Fragment>
            )}
          </Card>
          {!isMeetup && !isOnline && (
            <P sx={{ pt: 4 }}>
              Please be aware that the ticket only covers the cost of the
              training, it does not include travel expenses.
            </P>
          )}
        </React.Fragment>
      </React.Fragment>
    );
  }
}

PaymentSection.defaultProps = {
  trackUserBehaviour,
  navigate,
};

export const QUERY_UPCOMING_TRAINING_VOUCHERS = `
query instanceDiscountPrice($trainingInstanceId: ID!) {
    trainingInstance(id: $trainingInstanceId) {
        discountPrice {
            currentPrice
            endsOn
        }
    }
}
`;

export const QUERY_UPCOMING_EVENT_VOUCHERS = `
query eventDiscountPrice($eventId: ID!) {
    event(id: $eventId) {
        ticketsLeft
        discountPrice {
            currentPrice
            endsOn
        }
    }
}
`;

const memoizedTrainingOptions = memoize((item) => ({
  variables: { trainingInstanceId: item.id },
}));

const withUpcomingTrainingVouchers = graphql(QUERY_UPCOMING_TRAINING_VOUCHERS, {
  options: ({ item }) => memoizedTrainingOptions(item),
  // skip: ({ item }) => !item || item.shoppingItemEnum !== 'training',
  skip: ({ item }) =>
    !item || item.__typename !== 'UpMentoring_TrainingInstance',
});

const memoizedEventOptions = memoize((item) => ({
  variables: { eventId: item.id },
}));

const withUpcomingEventVouchers = graphql(QUERY_UPCOMING_EVENT_VOUCHERS, {
  options: ({ item }) => memoizedEventOptions(item),
  // skip: ({ item }) => !item || item.shoppingItemEnum !== 'event',
  skip: ({ item }) => !item || item.__typename !== 'UpMentoring_Event',
});

export default withUpcomingTrainingVouchers(
  withUpcomingEventVouchers(withStatelessClient(PaymentSection))
);
