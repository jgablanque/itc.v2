let users = JSON.parse(localStorage.getItem('users')) || [];
const loginSection = document.getElementById('loginSection');
const signUpSection = document.getElementById('signUpSection');
const mainContent = document.getElementById('mainContent');
const navbar = document.getElementById('navbar');

// Login Function
function logIn() {
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    alert('Login successful!');
    loginSection.classList.add('hidden');
    mainContent.classList.remove('hidden');
    navbar.classList.remove('hidden');
  } else {
    alert('Invalid username or password.');
  }
}

// Sign-Up Function
function signUp() {
  const username = document.getElementById('signUpUsername').value.trim();
  const password = document.getElementById('signUpPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  if (users.some(user => user.username === username)) {
    alert('Username already exists.');
    return;
  }

  users.push({ username, password });
  localStorage.setItem('users', JSON.stringify(users));
  alert('Sign-up successful! You can now log in.');
  toggleLogin();
}

// Toggle Sections
function toggleSignUp() {
  loginSection.classList.add('hidden');
  signUpSection.classList.remove('hidden');
}

function toggleLogin() {
  signUpSection.classList.add('hidden');
  loginSection.classList.remove('hidden');
}

// Conversion Functions
function convertCtoF() {
  const celsius = document.getElementById('cToFInput').value;
  const fahrenheit = (celsius * 9 / 5 + 32).toFixed(2);
  alert(`Celsius to Fahrenheit: ${fahrenheit}°F`);
}

function convertFtoC() {
  const fahrenheit = document.getElementById('fToCInput').value;
  const celsius = ((fahrenheit - 32) * 5 / 9).toFixed(2);
  alert(`Fahrenheit to Celsius: ${celsius}°C`);
}

// Logout
function logOut() {
  alert('Logged out.');
  navbar.classList.add('hidden');
  mainContent.classList.add('hidden');
  loginSection.classList.remove('hidden');
}
