// scripts/signup.js
document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if username and password are not empty
  if (username && password) {
    // Store username and password in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    // Redirect to login page after successful signup
    window.location.href = 'index.html';
  } else {
    alert('Please enter both username and password.');
  }
});
