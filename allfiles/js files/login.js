// scripts/login.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Retrieve username and password from local storage
  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  // Check if the entered username and password match the stored credentials
  if (username === storedUsername && password === storedPassword) {
    alert('Login successful!');
    // Redirect to homepage or dashboard after successful login
    // Replace 'homepage.html' with the actual URL of your homepage or dashboard
    window.location.href = 'main.html';
  } else {
    alert('Incorrect username or password. Please try again.');
  }
});
