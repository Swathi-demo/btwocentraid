const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_Test", // Replace with your sign-in policy name
        editProfile: "B2C_1_edit_profile" // Replace with your edit profile policy name
    },
    authorities: {
        signUpSignIn: {
            authority: "https://pcsconsumer.b2clogin.com/pcsconsumer.onmicrosoft.com/B2C_1_ecom123", // Replace with your sign-in policy authority URL
        },
        editProfile: {
            authority: "https://pcsconsumer.b2clogin.com/pcsconsumer.onmicrosoft.com/B2C_1_edit_profile" // Replace with your edit profile policy authority URL
        }
    },
    authorityDomain: "pcsconsumer.b2clogin.com" // Replace with your tenant domain
}

export default b2cPolicies;