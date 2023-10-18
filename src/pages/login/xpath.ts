module.exports = {
    socialLogin: {
        twitch: "//button[contains(@class, 'btn-twitch')]",
        google: "//button[contains(@class, 'btn-google')]",
        facebook: "//button[contains(@class, 'kep-login-facebook')]",
    },
    formLogin: {
        email: "//input[@id='username']",
        password: "//input[@id='password']",
        forgotPassword: "//a[text()='Forgot your password?']",
        signInButton: "//button[@type='submit']",
        signUpLink: "//a[text()='Sign Up']"
    },
    popup: {
        loginFailed: "//*[@id='swal2-title' and text()='Login Failed']"
    }
}