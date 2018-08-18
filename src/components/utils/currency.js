const formatCurrencyPrice = (currencyCode, price) => {
  const priceRounded = Math.round(price * 100) / 100
  switch (currencyCode) {
    case 'usd':
      return `$${priceRounded}`
    case 'eur':
      return `${priceRounded}€`
    case 'aud':
      return `A$${priceRounded}`
    default:
      return `£${priceRounded}`
  }
}

export default formatCurrencyPrice
