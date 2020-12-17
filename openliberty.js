window.onload = function () {
    SSOtext();
    addAccountReqText();
    fixRegisterPage();
}

function SSOtext() {
    document.getElementsByClassName('login-oa2-github')[0].getElementsByTagName('span')[0].textContent = 'Sign in with GitHub'
    document.getElementsByClassName('login-oa2-google-oauth2')[0].getElementsByTagName('span')[0].textContent = 'Sign in with Google'
    document.getElementsByClassName('login-oa2-ibmid')[0].getElementsByTagName('span')[0].textContent = 'Sign in with IBMid'
    document.getElementsByClassName('login-oa2-linkedin-oauth2')[0].getElementsByTagName('span')[0].textContent = 'Sign in with LinkedIn'
}

function addAccountReqText() {
    document.getElementsByClassName('toggle-form')[0].insertAdjacentHTML('beforebegin', '<span class="text">To prevent abuse of our cloud hosted environments we require users to authenticate themselves, this can be done via the provided social login options or by creating a account.</span>');
}

function fixRegisterPage() {
    var SSOused = document.getElementsByClassName('js-auth-warning status')[0]
    if (typeof(SSOused) != 'undefined' && SSOused != null) {
        document.getElementById("register").style.display = "block";
    }
}