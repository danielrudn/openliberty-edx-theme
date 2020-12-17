function SSOtext() {
    var GitHub_enabled = document.querySelector('.button-oa2-github')
    var Google_enabled = document.querySelector('.button-oa2-google-oauth2')
    var IBMid_enabled = document.querySelector('.button-oa2-ibmid')
    var LinkedIn_enabled = document.querySelector('.button-oa2-linkedin-oauth2')

    if (GitHub_enabled) {
    GitHub_enabled.textContent = 'Sign in with GitHub'
    }
    if (Google_enabled) {
    Google_enabled.textContent = 'Sign in with Google'
    }
    if (IBMid_enabled) {
    IBMid_enabled.textContent = 'Sign in with IBMid'
    }
    if (LinkedIn_enabled) {
    LinkedIn_enabled.textContent = 'Sign in with LinkedIn'
    }
}

function addAccountReqText() {
    var newUserText = document.querySelector('.toggle-form')

    if (newUserText) {
        const span = document.createElement('span');
        span.textContent = 'To prevent abuse of our cloud hosted environments we require users to authenticate themselves, this can be done via the provided social login options or by creating a account.';
        newUserText.insertBefore(span);
    }
}

function fixRegisterPage() {
    var ssoUsed = document.querySelector('.js-auth-warning .status')
    var registerForm = document.getElementById('register')
    var loginForm = document.getElementById('login')

    if (ssoUsed) {
        if (registerForm) {
            registerForm.style.display = "block";
        }
        if (loginForm) {
            loginForm.style.display = "block";
        }
    }
}

SSOtext();
addAccountReqText();
fixRegisterPage();