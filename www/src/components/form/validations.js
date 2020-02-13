import PaymentLib from 'payment'
import {
  getMonthFromCardDate,
  getYearFromCardDate,
  formatCVC,
} from '../utils/card'

export const composeValidators = (...validators) => value =>
  validators.reduceRight(
    (error, validator) => error || validator(value),
    undefined
  )

export const required = value => (value ? undefined : 'Required')

export const mustBeEmail = value => {
  const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reEmail.test(value) ? undefined : 'Email format is not correct'
}

export const mustBeCardNumber = number =>
  PaymentLib.fns.validateCardNumber(number)
    ? undefined
    : 'Card number is not correct'

export const mustBeCvc = cvc => {
  const formatedCvc = formatCVC(cvc)
  return PaymentLib.fns.validateCardCVC(formatedCvc)
    ? undefined
    : 'CVC number is not correct'
}

export const mustBeCardDate = expirationDate => {
  const month = getMonthFromCardDate(expirationDate)
  const year = getYearFromCardDate(expirationDate)
  return PaymentLib.fns.validateCardExpiry(month, year)
    ? undefined
    : 'Expiry date is not valid'
}

export const mustBeEuVat = (vatNumber = '') => {
  const reVat = /^((AT)?U[0-9]{8}|(BE)?0[0-9]{9}|(BG)?[0-9]{9,10}|(CY)?[0-9]{8}L|(CZ)?[0-9]{8,10}|(DE)?[0-9]{9}|(DK)?[0-9]{8}|(EE)?[0-9]{9}|(EL|GR)?[0-9]{9}|(ES)?[0-9A-Z][0-9]{7}[0-9A-Z]|(FI)?[0-9]{8}|(FR)?[0-9A-Z]{2}[0-9]{9}|(GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3})|(HU)?[0-9]{8}|(IE)?[0-9]S[0-9]{5}L|(IT)?[0-9]{11}|(LT)?([0-9]{9}|[0-9]{12})|(LU)?[0-9]{8}|(LV)?[0-9]{11}|(MT)?[0-9]{8}|(NL)?[0-9]{9}B[0-9]{2}|(PL)?[0-9]{10}|(PT)?[0-9]{9}|(RO)?[0-9]{2,10}|(SE)?[0-9]{12}|(SI)?[0-9]{8}|(SK)?[0-9]{10})$/
  const formatedVatNumber = vatNumber.replace(/[\W_]+/g, '')
  return reVat.test(formatedVatNumber)
    ? undefined
    : 'EU VAT number is not correct'
}
