import React from 'react'

function GoogleAdsConversion({ data }) {
  function gtag() {
    dataLayer.push(arguments)
  }

  const { makePayment = {}, trainingInstanceId = '' } = data || {}
  const { amount = 100, id } = makePayment
  //conversion
  const conversionValue = {
    send_to: 'AW-877316317/KPHjCIHC7ocBEN2Rq6ID',
    currency: 'GBP',
    value: amount * 0.01,
    transaction_id: id ? `${trainingInstanceId}_${id}` : '',
  }

  console.log(conversionValue)
  gtag('event', 'conversion', conversionValue)

  return null
}

export default GoogleAdsConversion
