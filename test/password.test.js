const { expect, } = require('chai')
const { isValidPassword, } = require('..')

describe('Email', () => {
  it('should return true for "password"', () => {
    expect(isValidPassword("password")).to.be.equal(true)
  })
  it('should return false for "pass"', () => {
    expect(isValidPassword("pass")).to.be.equal(false)
  })
  it('should return false for undefined', () => {
    expect(isValidPassword()).to.be.equal(false)
  })
})
