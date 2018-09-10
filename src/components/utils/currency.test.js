
import formatPrice from './currency'

describe('formatPrice', () => {
  it('should prefix USD values with a Dollar sign', () => {
    expect(formatPrice('USD', 100)).toBe("$100")
  })
  it('should append a Euro sign to EUR values', () => {
    expect(formatPrice('EUR', 100)).toBe("100€")
  })
  it('should prefix AUD values with a capital A followed by a Dollar sign', () => {
    expect(formatPrice('AUD', 100)).toBe("A$100")
  })
  it('should prefix GBP values with a pound sign', () => {
    expect(formatPrice('GBP', 100)).toBe("£100")
  })
  it('should prefix values that are not USD, EUR, or AUD, with a pound sign', () => {
    expect(formatPrice('XYZ', 100)).toBe("£100")
  })
  it('should multiply the price by the VAT rate, if one is provided', () => {
    expect(formatPrice('GBP', 100, 1.2)).toBe("£120")
  })
  it('should not change the price (except for rounding) if no VAT rate is provided', () => {
    expect(formatPrice('GBP', 100)).toBe("£100")
  })
  it('should round the price to the nearest 100th of a unit if no VAT supplied', () => {
    expect(formatPrice('GBP', 100.155)).toBe("£100.16")
  })
  it('should round the price to the nearest 100th of a unit, after applying any VAT', () => {
    expect(formatPrice('GBP', 101.23, 1.2)).toBe("£121.48")
  })
  it('should accept country codes in either uppercase or lowercase format', () => {
    expect(formatPrice('USD', 100)).toBe("$100")
    expect(formatPrice('usd', 100)).toBe("$100")
    expect(formatPrice('EUR', 100)).toBe("100€")
    expect(formatPrice('eur', 100)).toBe("100€")
    expect(formatPrice('GBP', 100)).toBe("£100")
    expect(formatPrice('gbp', 100)).toBe("£100")
  })
})
