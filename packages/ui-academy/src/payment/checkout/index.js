import React, { Fragment, useState } from 'react';
import { Button, Span, P } from '@leanjs/ui-core';
import styled from 'styled-components';
// import { Button } from '../../buttons';
// import { Span, P } from '../../text';
import { Price } from '../';
import { aliasComponent, formatPrice } from '../utils';
// import trackUserBehaviour, {
//   BUY_BUTTON_CLICK,
// } from '../../utils/trackUserBehaviour';
import CheckoutContainer from './CheckoutContainer';

const PurchaseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 12px 0;
`;

const PriceAndDiscount = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const BuyButton = aliasComponent(Button);

const CheckoutContext = React.createContext();

export const CheckoutProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const expandCheckout = () => setIsOpen(true);

  return (
    <CheckoutContext.Provider value={{ isOpen, expandCheckout, setIsOpen }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useExpandCheckout = () => {
  const checkoutContext = React.useContext(CheckoutContext);

  return checkoutContext && checkoutContext.expandCheckout;
};

const Checkout = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const checkoutContext = React.useContext(CheckoutContext);
  const isCheckoutOpen = (checkoutContext && checkoutContext.isOpen) || isOpen;

  const openCheckout = () => {
    // props.trackUserBehaviour({
    //   event: BUY_BUTTON_CLICK,
    // });
    setIsOpen(true);
  };

  const {
    trainingInstanceId,
    eventId,
    price,
    discountPrice,
    currency,
    quantity,
    removeCourse,
    addCourse,
    priceQuantity,
    currentPriceQuantity,
    vatRate,
    updateVatRate,
    resetVoucher,
    validateVoucher,
    voucher,
    isVoucherValid,
    isVoucherValidationInProgress,
    paymentApi,
    navigate,
    showSubscribeToNewsletter,
    city,
    triggerSubscribe,
    trialTraingInstance,
  } = props;

  return (
    <Fragment>
      {!isCheckoutOpen ? (
        <PurchaseWrapper className="gtm-purchase-box">
          <Fragment>
            {currentPriceQuantity ? (
              <PriceAndDiscount>
                <Price sx={{ textAlign: 'center', pt: 1, pb: 1 }}>
                  {formatPrice(currency, currentPriceQuantity, vatRate)}
                </Price>
                {priceQuantity !== currentPriceQuantity && (
                  <P>
                    <Span sx={{ textDecoration: 'line-through' }}>
                      (Full price:{' '}
                      {formatPrice(currency, priceQuantity, vatRate)})
                    </Span>
                  </P>
                )}
              </PriceAndDiscount>
            ) : (
              <Price>{formatPrice(currency, priceQuantity, vatRate)}</Price>
            )}
            <BuyButton
              onClick={openCheckout}
              sx={{
                ml: 'auto',
              }}
              children="Buy now"
              variant="primary"
              className={
                showSubscribeToNewsletter
                  ? `meetup-details-cta`
                  : `pricing-clicks`
              }
            />
          </Fragment>
        </PurchaseWrapper>
      ) : (
        <CheckoutContainer
          trialTraingInstance={trialTraingInstance}
          city={city}
          navigate={navigate}
          trainingInstanceId={trainingInstanceId}
          eventId={eventId}
          vatRate={vatRate}
          updateVatRate={updateVatRate}
          currency={currency}
          price={price}
          discountPrice={discountPrice}
          quantity={quantity}
          priceQuantity={priceQuantity}
          currentPriceQuantity={currentPriceQuantity}
          removeCourse={removeCourse}
          addCourse={addCourse}
          resetVoucher={resetVoucher}
          validateVoucher={validateVoucher}
          voucher={voucher}
          isVoucherValid={isVoucherValid}
          isVoucherValidationInProgress={isVoucherValidationInProgress}
          paymentApi={paymentApi}
          triggerSubscribe={triggerSubscribe}
          showSubscribeToNewsletter={showSubscribeToNewsletter}
          {...props}
        />
      )}
    </Fragment>
  );
};

Checkout.defaultProps = {
  quantity: 1,
  // trackUserBehaviour,
};

export default Checkout;
