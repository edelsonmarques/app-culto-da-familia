const form = {
    email: () => document.getElementById("email"),
    username: () => document.getElementById("username"),
    password: () => document.getElementById("password"),
    registerButton: () => document.getElementById("register_button"),
    usernameRequiredError: () => document.getElementById("username-required-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    recoveryButton: () => document.getElementById("recovery_button"),
    loginButton: () => document.getElementById("login_button"),
    usernameName: () => document.getElementById("username"),
}


function onChangeUsername(){
    toogleButtonsDisable();
    toogleUsernameErrors();
}

function onChangePassword(){
    toogleButtonsDisable();
    tooglePasswordErrors();
}

function isEmailValid(){
    const email = form.email().value;
    return !email ? false : validateEmail(email);
    // if (!email){
    //     return false;
    // }
    // return validateEmail(email);
}

function isPasswordValid(){
    const password = form.password().value;
    return !password ? false : true;
}

function toogleUsernameErrors(){
    const username = form.username().value;
    form.usernameRequiredError().style.display = username ? "none" : "block";
}

function toogleEmailErrors(){
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function tooglePasswordErrors(){
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block";
}

function toogleButtonsDisable(){
    const usernameValid = isUsernameValid();
    const username = form.username().value;
    form.recoveryButton().disabled = !usernameValid;
    form.registerButton().disabled = !usernameValid;
    
    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !usernameValid || !passwordValid;
}

function isUsernameValid(){
    const username = form.username().value;
    return !username ? false : true;
}