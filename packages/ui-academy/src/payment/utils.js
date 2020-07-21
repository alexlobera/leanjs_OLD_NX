import Payment from 'payment';

export const getMonthFromCardDate = (cardDate) =>
  cardDate && parseInt(cardDate.substring(0, cardDate.lastIndexOf('/')), 10);

export const getYearFromCardDate = (cardDate) =>
  cardDate &&
  parseInt(
    clearNumber(
      cardDate.substring(cardDate.lastIndexOf('/') + 1, cardDate.length)
    ).substring(0, 2)
  );

function clearNumber(value = '') {
  return value.replace(/\D+/g, '');
}

export function formatCreditCardNumber(value) {
  if (!value) {
    return '';
  }

  const issuer = Payment.fns.cardType(value);
  const clearValue = clearNumber(value);
  let nextValue;

  switch (issuer) {
    case 'amex':
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 15)}`;
      break;
    case 'dinersclub':
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 14)}`;
      break;
    default:
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        8
      )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`;
      break;
  }

  return nextValue.trim();
}

export function formatCVC(value, allValues = {}) {
  const clearValue = clearNumber(value);
  let maxLength = 4;

  if (allValues.number) {
    const issuer = Payment.fns.cardType(allValues.number);
    maxLength = issuer === 'amex' ? 4 : 3;
  }

  return clearValue.slice(0, maxLength);
}

export function formatExpirationDate(value) {
  const clearValue = clearNumber(value);

  if (clearValue.length >= 3) {
    return `${clearValue.slice(0, 2)} / ${clearValue.slice(2, 4)}`;
  }

  return clearValue;
}

export const formatPrice = (currencyCode = '', price, vatRate) => {
  const netPrice = vatRate ? price * vatRate : price;
  const roundPrice = Math.round(netPrice * 100) / 100;

  switch (currencyCode.toLowerCase()) {
    case 'usd':
      return `$${roundPrice}`;
    case 'eur':
      return `${roundPrice}€`;
    case 'aud':
      return `A$${roundPrice}`;
    default:
      return `£${roundPrice}`;
  }
};

export const DEFAULT_VAT_RATE = 1.2;

// TODO REMOVE THIS
export const aliasComponent = (Component) => (props) => (
  <Component {...props} />
);

// TODO REMOVE THIS
export const getComponentAliaser = (Component) => () =>
  aliasComponent(Component);
