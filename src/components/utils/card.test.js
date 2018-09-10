import Payment from 'payment'

import {
  getMonthFromCardDate,
  getYearFromCardDate,
  formatCreditCardNumber,
} from './card.js'

describe('getMonthFromCardDate', () => {
  it('should extract the month from a date in the format MM/YY', () => {
    expect(getMonthFromCardDate("16/19")).toBe(16)
  })
})

describe('getYearFromCardDate', () => {
  it('should extract the year from a date in the format MM/YY', () => {
    expect(getYearFromCardDate("16/19")).toBe(19)
  })
  it('should strip any non-numberic characters from around the year', () => {
    expect(getYearFromCardDate("16/-19abc:")).toBe(19)
  })
})

// Formats: https://github.com/jessepollak/payment/blob/master/src/index.coffee
describe('formatCreditCardNumber', () => {
  it('should return an empty string if a falsy value is passed in', () => {
    expect(formatCreditCardNumber(false)).toBe('')
  })
  it('should format amex correctly', () => {
    expect(formatCreditCardNumber('341234567890123')).toBe('3412 345678 90123')
  })
  it('should format dinersclub correctly', () => {
    expect(formatCreditCardNumber('36512345678901')).toBe('3651 234567 8901')
  })
  it('should format other (non-amex, non-dinersclub) correctly', () => {
    expect(formatCreditCardNumber('4123456789012345678')).toBe('4123 4567 8901 2345678')
  })
})

/*
export function formatCreditCardNumber(value) {
  if (!value) {
    return ''
  }

  const issuer = Payment.fns.cardType(value)
  const clearValue = clearNumber(value)
  let nextValue

  switch (issuer) {
    case 'amex':
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 15)}`
      break
    case 'dinersclub':
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 14)}`
      break
    default:
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        8
      )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`
      break
  }

  return nextValue.trim()
}

export function formatCVC(value, allValues = {}) {
  const clearValue = clearNumber(value)
  let maxLength = 4

  if (allValues.number) {
    const issuer = Payment.fns.cardType(allValues.number)
    maxLength = issuer === 'amex' ? 4 : 3
  }

  return clearValue.slice(0, maxLength)
}

export function formatExpirationDate(value) {
  const clearValue = clearNumber(value)

  if (clearValue.length >= 3) {
    return `${clearValue.slice(0, 2)} / ${clearValue.slice(2, 4)}`
  }

  return clearValue
}
*/