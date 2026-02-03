document.addEventListener('DOMContentLoaded', () => {
    console.log('Login page script loaded!');
    // Add your JavaScript logic here for form submission, validation, etc.
    const loginForm = document.querySelector('.login-container form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        console.log('Username:', username);
        console.log('Password:', password);

        // Here you would typically send these credentials to a server for authentication.
        // For this basic setup, we'll just log them.
        alert('Login attempt with Username: ' + username);

        // You might want to add more robust validation or an actual fetch request here.
    });
});