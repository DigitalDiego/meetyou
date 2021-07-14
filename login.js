// alert('Email: admin#meetyou.com, password: user2021')
// Login
const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
alert('Email: admin@meetyou.com, Password: user2021')
const logIn = () => {
    const rightEmail = 'admin@meetyou.com';
    const rightPassword = 'user2021';
    if(email.value === rightEmail && password.value === rightPassword){
        window.open('home.html');
        window.close();
    } else {
        alert('Email or password is incorrect.');
        email.value = '';
        password.value = '';
    }
}
loginBtn.addEventListener('click', logIn);