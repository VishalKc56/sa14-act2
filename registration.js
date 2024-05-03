document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    // Validation logic
    if (username.length < 6) {
        message.textContent = 'Username must be at least 6 characters long.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        message.textContent = 'Invalid email format.';
    } else if (password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
        message.textContent = 'Password must be at least 8 characters long and include at least one uppercase letter and one number.';
    } else {
        message.textContent = 'Registration successful!';
    }
});