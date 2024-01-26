function toggleForm() {
    var loginForm = document.getElementById('login-form');
    var registerForm = document.getElementById('register-form');
    
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';

    document.getElementById('message').style.display = 'none';
}

function login(event) {
    event.preventDefault();

    
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    if (username === 'username' && password === 'password') {
        showMessage('Login successful!');
    } else {
        showMessage('Login failed. Check your credentials.');
    }
}

function register(event) {
    event.preventDefault();

    
    var username = document.getElementById('registerUsername').value;
    var password = document.getElementById('registerPassword').value;

    if (username && password) {
        showMessage('Signup successful!');
    } else {
        showMessage('Signup failed. Fill in all fields.');
    }
}

function showMessage(message) {
    var messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.style.display = 'block';
}
