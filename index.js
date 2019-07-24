const { parsePhoneNumberFromString, } = require('libphonenumber-js/min')
const validZipcodes = new Set(require('./data/validZipcodes'))
// Source: http://emailregex.com/ - JavaScript section
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

module.exports = {
  isValidEmail: email => emailRegex.test(email), 
  isValidPassword: password => !!( password && password.length >= 6 ),
  isValidPhone: (phone, region = 'US') => {
    // Reject numbers with letters in them because google-libphonenumber accepts numbers with letters sometimes
    // See: https://github.com/googlei18n/libphonenumber/blob/master/FAQ.md#why-does-the-library-treat-some-non-digit-characters-as-digits
    if (/[a-zA-Z]/.test(phone)) {
      return false
    }

    let number
    try {
      number = parsePhoneNumberFromString(phone, region)
    } catch (e) {
      return false
    }

    return number && number.isValid()
  },
  isValidZipcode: zipcode => validZipcodes.has(String(zipcode)),
  isValidName: name => !!name && name.length > 0,
}
