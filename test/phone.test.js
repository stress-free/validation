const { expect, } = require('chai')
const { isValidPhone, } = require('..')

describe('Phone', () => {
  it('should return true for "6504892337"', () => {
    expect(isValidPhone('6504892337')).to.be.equal(true)
  })
  it('should return true for numbers with international prefix', () => {
    expect(isValidPhone('+16504892337')).to.be.equal(true)
  })
  it('should return true for numbers with hyphens', () => {
    expect(isValidPhone('650-489-2337')).to.be.equal(true)
  })
  it('should return true for numbers with spaces', () => {
    expect(isValidPhone('650 489 2337')).to.be.equal(true)
  })
  it('should return true for numbers with parentheses', () => {
    expect(isValidPhone('(650)4892337')).to.be.equal(true)
    expect(isValidPhone('(650) 489 2337')).to.be.equal(true)
  })
  it('should return false for numeric 6504892337', () => {
    expect(isValidPhone(6504892337)).to.be.equal(false)
  })
  it('should return false for falsey inputs', () => {
    expect(isValidPhone(null)).to.be.equal(false)
    expect(isValidPhone(false)).to.be.equal(false)
    expect(isValidPhone(0)).to.be.equal(false)
  })
  it('should return false for phone numbers with letters', () => {
    expect(isValidPhone('(650) 489 2337a')).to.be.equal(false)
    expect(isValidPhone('(650) d89 2337')).to.be.equal(false)
  })
  it('should return false for phone numbers too long', () => {
    expect(isValidPhone('(650) 489 23371')).to.be.equal(false)
    expect(isValidPhone('65048923372')).to.be.equal(false)
  })
  it('should return false for phone numbers too short', () => {
    expect(isValidPhone('(650) 4')).to.be.equal(false)
    expect(isValidPhone('65048')).to.be.equal(false)
  })
  it('should return false for fake phone numbers', () => {
    expect(isValidPhone('5551234123')).to.be.equal(false)
  })
})
