module.exports = {
    personalDetail: {
        profileSetting: {
            name: "//input[@name='Name']",
            email: "//input[@name='Email']",
            saveChanges: "//div[@class='form-input-detail']//button[text()='Save Changes']"
        },
        password: {
            modalChangePassword: "//div[@id='modalChangePassword' and contains(@style, 'display: block')]",
            changePassword: "//button[text()='Change Password']",
            currentPassword: "//input[@name='currentPassword']",
            newPassword: "//input[@name='newPassword']",
            confirmPassword: "//input[@name='confirmPassword']",
            saveChange: "//div[@class='modal-content']//button[text()='Save Changes']",
        },
        accountRemoval: {
            deleteAccount: "//button[text()='Delete Account']"
        }
    },
    popupUpdateProfile: {
        success: {
            content: "//*[text()='Updated Profile']",
            continue: "//button[text()='Continue']"
        },
        failed: {
            content: "//*[text()='Updated Profile Unsuccessful']",
            continue: "//button[text()='Continue']"
        }
        
    }
}