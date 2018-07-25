export const getMonthFromCardDate = cardDate =>
  parseInt(cardDate.substring(0, cardDate.lastIndexOf('/')), 10)

export const getYearFromCardDate = cardDate =>
  parseInt(
    cardDate.substring(cardDate.lastIndexOf('/') + 1, cardDate.length),
    10
  )
