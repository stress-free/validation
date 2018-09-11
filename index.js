module.exports = {
  isValidEmail: email => email.length > 3 && email.includes('@'),
  isValidPassword: password => password.length >= 6,
  isValidPhone: phoneNumber => phoneNumber.length > 6,
}
