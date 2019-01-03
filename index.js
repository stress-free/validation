const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance()
const validZipcodes = new Set(require('./data/validZipcodes'))

// TODO add Regex for email
module.exports = {
  isValidEmail: email => email.length > 3 && email.includes('@') && !email.includes(' '), 
  isValidPassword: password => !!( password && password.length >= 6 ),
  isValidPhone: (phone, region = 'US') => {
    // Reject numbers with letters in them because google-libphonenumber accepts numbers with letters sometimes
    // See: https://github.com/googlei18n/libphonenumber/blob/master/FAQ.md#why-does-the-library-treat-some-non-digit-characters-as-digits
    if (/[a-zA-Z]/.test(phone)) {
      return false
    }

    let number
    try {
      number = phoneUtil.parse(phone, region)
    } catch (e) {
      return false
    }

    return phoneUtil.isValidNumberForRegion(number, region)
  },
  isValidZipcode: zipcode => validZipcodes.has(String(zipcode)),
  isValidName: name => !!name && name.length > 0,
}
