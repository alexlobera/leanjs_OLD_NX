const formatPrice = (currencyCode = '', price, vatRate) => {
  const netPrice = vatRate ? price * vatRate : price
  const roundPrice = Math.round(netPrice * 100) / 100

  switch (currencyCode.toLowerCase()) {
    case 'usd':
      return `$${roundPrice}`
    case 'eur':
      return `${roundPrice}€`
    case 'aud':
      return `A$${roundPrice}`
    default:
      return `£${roundPrice}`
  }
}

export default formatPrice
