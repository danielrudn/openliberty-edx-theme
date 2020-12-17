window.addEventListener('load', function (){
    SSOtext();
    addAccountReqText();
    fixRegisterPage();
});

function SSOtext() {
    var GitHub_enabled = document.getElementsByClassName('login-oa2-github')[0]
    var Google_enabled = document.getElementsByClassName('login-oa2-google-oauth2')[0]
    var IBMid_enabled = document.getElementsByClassName('login-oa2-ibmid')[0]
    var LinkedIn_enabled = document.getElementsByClassName('login-oa2-linkedin-oauth2')[0]

    if (GitHub_enabled) {
    document.getElementsByClassName('login-oa2-github')[0].getElementsByTagName('span')[0].textContent = 'Sign in with GitHub'
    }
    if (Google_enabled) {
    document.getElementsByClassName('login-oa2-google-oauth2')[0].getElementsByTagName('span')[0].textContent = 'Sign in with Google'
    }
    if (IBMid_enabled) {
    document.getElementsByClassName('login-oa2-ibmid')[0].getElementsByTagName('span')[0].textContent = 'Sign in with IBMid'
    }
    if (LinkedIn_enabled) {
    document.getElementsByClassName('login-oa2-linkedin-oauth2')[0].getElementsByTagName('span')[0].textContent = 'Sign in with LinkedIn'
    }
}

function addAccountReqText() {
    var New_User_Text = document.getElementsByClassName('toggle-form')[0]

    if (New_User_Text) {
        New_User_Text.insertAdjacentHTML('beforebegin', '<span class="text">To prevent abuse of our cloud hosted environments we require users to authenticate themselves, this can be done via the provided social login options or by creating a account.</span>');
    }
}

function fixRegisterPage() {
    var SSOused = document.getElementsByClassName('js-auth-warning status')[0]
    var register_form = document.getElementById('register')
    var login_form = document.getElementById('login')

    if (SSOused) {
        if (register_form) {
            register_form.style.display = "block";
        }
        if (login_form) {
            login_form.style.display = "block";
        }
    }
}