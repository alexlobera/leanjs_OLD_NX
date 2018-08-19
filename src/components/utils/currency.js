const formatPrice = (currencyCode, price, vatRate) => {
  const netPrice = vatRate ? price * vatRate : price

  switch (currencyCode) {
    case 'usd':
      return `$${netPrice}`
    case 'eur':
      return `${netPrice}€`
    case 'aud':
      return `A$${netPrice}`
    default:
      return `£${netPrice}`
  }
}

export default formatPrice
