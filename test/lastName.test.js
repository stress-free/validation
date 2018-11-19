const { expect, } = require('chai')
const { isValidLastName, } = require('..')

describe('Last Name', () => {
  it('should return true for "Smith"', () => {
    expect(isValidLastName('Paul')).to.be.equal(true)
  })
  it('should return false for empty strings', () => {
    expect(isValidLastName('')).to.be.equal(false)
  })
  it('should return false for null/undefined values', () => {
    expect(isValidLastName(null)).to.be.equal(false)
    expect(isValidLastName(undefined)).to.be.equal(false)
  })
  it('should return false empty strings', () => {
    expect(isValidLastName('')).to.be.equal(false)
  })
})
