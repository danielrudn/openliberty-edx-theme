function SSOtext() {
    var GitHub_login = document.querySelector('.login-oa2-github span')
    var Google_login = document.querySelector('.login-oa2-google-oauth2 span')
    var IBMid_login = document.querySelector('.login-oa2-ibmid span')
    var LinkedIn_login = document.querySelector('.login-oa2-linkedin-oauth2 span')
    var GitHub_register = document.querySelector('.register-oa2-github span')
    var Google_register = document.querySelector('.register-oa2-google-oauth2 span')
    var IBMid_register = document.querySelector('.register-oa2-ibmid span')
    var LinkedIn_register = document.querySelector('.register-oa2-linkedin-oauth2 span')

    if (GitHub_login) {
        GitHub_login.textContent = 'Sign in with GitHub'
        }
        if (Google_login) {
        Google_login.textContent = 'Sign in with Google'
        }
        if (IBMid_login) {
        IBMid_login.textContent = 'Sign in with IBMid'
        }
        if (LinkedIn_login) {
        LinkedIn_login.textContent = 'Sign in with LinkedIn'
    }

    if (GitHub_register) {
        GitHub_register.textContent = 'Register with GitHub'
        }
        if (Google_register) {
        Google_register.textContent = 'Register with Google'
        }
        if (IBMid_register) {
        IBMid_register.textContent = 'Register with IBMid'
        }
        if (LinkedIn_register) {
        LinkedIn_register.textContent = 'Register with LinkedIn'
    }
}

function addAccountReqText() {
    var newUserText = document.querySelector('#login-form')

    if (newUserText) {
        const span = document.createElement('span');
        span.textContent = 'To prevent abuse of our cloud hosted environments we require users to authenticate themselves, this can be done via the provided social login options or by creating a account.';
        newUserText.insertBefore(span, document.querySelector('.toggle-form'));
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