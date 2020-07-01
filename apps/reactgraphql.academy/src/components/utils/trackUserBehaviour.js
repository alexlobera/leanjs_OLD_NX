export const CHECKOUT_OPENED_MODAL = 'CHECKOUT_OPENED_MODAL';
export const CHECKOUT_USER_CLOSED_MODAL = 'CHECKOUT_USER_CLOSED_MODAL';
export const VOUCHER_VALIDATE = 'VOUCHER_VALIDATE';
export const CHECKOUT_PAYMENT_VALIDATE_ERROR =
  'CHECKOUT_PAYMENT_VALIDATE_ERROR';
export const CHECKOUT_PAYMENT_REQUEST = 'CHECKOUT_PAYMENT_REQUEST';
export const CHECKOUT_PAYMENT_SUCCESS = 'CHECKOUT_PAYMENT_SUCCESS';
export const CURRICULUM_MORE_DETAILS = 'CURRICULUM_MORE_DETAILS';
export const SOCIAL_NETWORK_LINK_CLICK = 'SOCIAL_NETWORK_LINK_CLICK';
export const CLICK_ON_CTA = 'CLICK_ON_CTA';
export const BUY_BUTTON_CLICK = 'BUY_BUTTON_CLICK';
export const FORM_SUBMIT = 'FORM_SUBMIT';

const trackUserBehaviour = ({ event, payload = {} }) => {
  if (typeof window === 'undefined') {
    return;
  }
  window.dataLayer &&
    window.dataLayer.push({
      event,
      payload,
    });
};

export default trackUserBehaviour;
