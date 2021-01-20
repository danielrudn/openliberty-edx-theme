function addAccountReqText() {
    var newUserText = document.querySelector('#login-form')

    if (newUserText) {
        newUserText.insertAdjacentHTML('afterend', '<span class="text register-explain">To prevent abuse of our cloud hosted environments we require users to authenticate themselves, this can be done via the provided social login options or by creating a account.</span>');
        newUserText.style.maxWidth = "80%";
    }
}

function fixRegisterPage() {
    var ssoUsed = document.querySelector('.js-auth-warning')
    var registerForm = document.querySelector('#register')
    var loginForm = document.querySelector('#login')

    if (ssoUsed) {
        if (registerForm) {
            registerForm.style.display = "block";
        }
        if (loginForm) {
            loginForm.style.display = "block";
        }
    }
}

function changeTitleText() {
    var signIn = document.querySelector('#login-form h2')

    if (signIn) {
        signIn.textContent = 'Access Cloud Hosted Guides'
    }
};

document.addEventListener("DOMContentLoaded", function() {
    addAccountReqText();
    fixRegisterPage();
    changeTitleText();
});
