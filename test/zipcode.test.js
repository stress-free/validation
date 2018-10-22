const { expect, } = require('chai')
const { isValidZipcode, } = require('..')

describe('Zipcode', () => {
  it('should return true for "94025"', () => {
    expect(isValidZipcode('94025')).to.be.equal(true)
  })
  it('should return true for 94025', () => {
    expect(isValidZipcode(94025)).to.be.equal(true)
  })
  it('should return false for null/undefined/false', () => {
    expect(isValidZipcode(null)).to.be.equal(false)
    expect(isValidZipcode(undefined)).to.be.equal(false)
    expect(isValidZipcode(false)).to.be.equal(false)
  })
  it('should return false for short inputs', () => {
    expect(isValidZipcode(501)).to.be.equal(false)
  })
})
