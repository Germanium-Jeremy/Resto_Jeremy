function emailValid (email) {
     if (!email | email == null | email == '') return "No Email Provided."
     const pattern = "[a-z]"
}

module.exports = { emailValid }