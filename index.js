const validZipcodes = new Set(require('./data/validZipcodes'))

// TODO add Regex for email
module.exports = {
  isValidEmail: email => email.length > 3 && email.includes('@') && !email.includes(' '), 
  isValidPassword: password => !!( password && password.length >= 6 ),
  isValidPhone: phoneNumber => phoneNumber.length > 6,
  isValidZipcode: zipcode => validZipcodes.has(String(zipcode)),
  isValidName: name => !!name && name.length > 0,
}
