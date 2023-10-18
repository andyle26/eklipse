module.exports = {
    registerForm: {
        name: "//input[@id='name']",
        email: "//input[@id='email']",
        password: "//input[@id='password']",
        confirmPassword: "//input[@id='password_confirmation']",
        submit: "//button[@type='submit']",
    },
    errorMessage: {
        emailDoseExist: "//div[contains(@class, 'alert') and contains(text(), 'The email has already been taken.')]",
    }
}