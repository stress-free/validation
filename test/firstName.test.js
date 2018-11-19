const { expect, } = require('chai')
const { isValidFirstName, } = require('..')

describe('First Name', () => {
  it('should return true for "John"', () => {
    expect(isValidFirstName('John')).to.be.equal(true)
  })
  it('should return false for empty strings', () => {
    expect(isValidFirstName('')).to.be.equal(false)
  })
  it('should return false for null/undefined values', () => {
    expect(isValidFirstName(null)).to.be.equal(false)
    expect(isValidFirstName(undefined)).to.be.equal(false)
  })
  it('should return false empty strings', () => {
    expect(isValidFirstName('')).to.be.equal(false)
  })
})
