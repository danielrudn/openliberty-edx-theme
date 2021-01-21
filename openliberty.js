function addAccountReqText() {
    var newUserText = document.querySelector('#login-form')

    if (newUserText) {
        newUserText.insertAdjacentHTML('afterend', '<span class="text register-explain">To prevent abuse of our cloud hosted environments we require users to authenticate themselves, this can be done via the provided social login options or by creating a account.</span>');
        newUserText.style.maxWidth = "80%";
    }
}

function reloadPage() {
    // The last "domLoading" Time //
    var currentDocumentTimestamp =
    new Date(performance.timing.domLoading).getTime();
    // Current Time //
    var now = Date.now();
    // Ten Seconds //
    var tenSec = 10;
    // Plus Ten Seconds //
    var plusTenSec = currentDocumentTimestamp + tenSec;
    if (now > plusTenSec) {
    location.reload();
    } else {}
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
            reloadPage();
        }
    }
}

function changeTitleText() {
    var signIn = document.querySelector('#login-form h2')

    if (signIn) {
        signIn.textContent = 'Access Cloud Hosted Guides'
    }
}

setTimeout(function() {
    addAccountReqText();
    fixRegisterPage();
    changeTitleText();
},7);
