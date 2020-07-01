import Payment from 'payment';

import {
  getMonthFromCardDate,
  getYearFromCardDate,
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from './card.js';

describe('getMonthFromCardDate', () => {
  it('should extract the month from a date in the format MM/YY', () => {
    expect(getMonthFromCardDate('16/19')).toBe(16);
  });
});

describe('getYearFromCardDate', () => {
  it('should extract the year from a date in the format MM/YY', () => {
    expect(getYearFromCardDate('16/19')).toBe(19);
  });
  it('should strip any non-numberic characters from around the year', () => {
    expect(getYearFromCardDate('16/-19abc:')).toBe(19);
  });
});

// Formats: https://github.com/jessepollak/payment/blob/master/src/index.coffee
describe('formatCreditCardNumber', () => {
  it('should return an empty string if a falsy value is passed in', () => {
    expect(formatCreditCardNumber(false)).toBe('');
  });
  it('should format amex correctly', () => {
    expect(formatCreditCardNumber('341234567890123')).toBe('3412 345678 90123');
  });
  it('should format dinersclub correctly', () => {
    expect(formatCreditCardNumber('36512345678901')).toBe('3651 234567 8901');
  });
  it('should format other (non-amex, non-dinersclub) correctly', () => {
    expect(formatCreditCardNumber('4123456789012345678')).toBe(
      '4123 4567 8901 2345678'
    );
  });
});

describe('formatCVC', () => {
  it('should strip any characters after the fourth character', () => {
    expect(formatCVC('1234567')).toBe('1234');
  });
  it('should strip any characters after the third, if the rest of the card details are provided in the second parameter, and the card is not an amex card', () => {
    expect(formatCVC('1234567', { number: '4123456789012345678' })).toBe('123');
  });
  it('should strip any characters after the fourth, if the rest of the card details are provided in the second parameter, and the card is an amex card', () => {
    expect(formatCVC('1234567', { number: '341234567890123' })).toBe('1234');
  });
});

describe('formatExpirationDate', () => {
  it('should return any expiration dates of 3 characters or less exactly as they are, except with non-numeric characters removed', () => {
    expect(formatExpirationDate('a12')).toBe('12');
  });
  it('should return the first four characters of any expiration dates longer than 3 character, with a slash(/)-character after the first two, and spaces around the slash', () => {
    expect(formatExpirationDate('12204')).toBe('12 / 20');
  });
});
