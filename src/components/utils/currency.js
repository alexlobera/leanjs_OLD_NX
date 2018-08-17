const getCurrencySymbol = (code, price) => {
    const priceRounded = Math.round(price * 100) / 100
    switch (code) {
      case 'usd':
        return `$${priceRounded}`
      case 'eur':
        return `€${priceRounded}`
      case 'aud':
        return `A$${priceRounded}`
      default:
        return `£${priceRounded}`
    }
  }
  
  export default getCurrencySymbol
  