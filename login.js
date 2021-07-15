// Login
const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const answersMessage = document.getElementById('answers');
const closeMessageBtn = document.getElementById('close-message-btn');
closeMessageBtn.addEventListener('click', () => {
    answersMessage.style.display = 'none';
});
const logIn = () => {
    const rightEmail = 'admin@meetyou.com';
    const rightPassword = 'user2021';
    if(email.value === rightEmail && password.value === rightPassword){
        window.close('login.html');
        window.open('home.html');
    } else {
        alert('Email or password is incorrect.');
        email.value = '';
        password.value = '';
    }
}
loginBtn.addEventListener('click', logIn);