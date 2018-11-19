const { expect, } = require('chai')
const { isValidName, } = require('..')

describe('Name', () => {
  it('should return true for "John"', () => {
    expect(isValidName('John')).to.be.equal(true)
  })
  it('should return false for empty strings', () => {
    expect(isValidName('')).to.be.equal(false)
  })
  it('should return false for null/undefined values', () => {
    expect(isValidName(null)).to.be.equal(false)
    expect(isValidName(undefined)).to.be.equal(false)
  })
})
