const { expect, } = require('chai')
const { isValidEmail, } = require('..')

describe('Email', () => {
  it('should return true for "dev@cardash.com"', () => {
    expect(isValidEmail("dev@cardash.com")).to.be.equal(true)
  })
  it('should return true for "a@g.co"', () => {
    expect(isValidEmail("a@g.co")).to.be.equal(true)
  })
  it('should return false for emails without an "@" character', () => {
    expect(isValidEmail("ag.co")).to.be.equal(false)
    expect(isValidEmail("cardash.com")).to.be.equal(false)
  })
  it('should return false for inputs that are 3 characters or less', () => {
    expect(isValidEmail("ag@")).to.be.equal(false)
    expect(isValidEmail("a@g")).to.be.equal(false)
    expect(isValidEmail("@g.")).to.be.equal(false)
  })
})
