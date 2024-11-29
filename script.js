const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Uppercase letters
const lowerCase = "abcdefghijklmnopqrstuvwxyz"; // Lowercase letters
const number = "0123456789"; // Numbers
const symbol = "!@#$%^&*()_+-={}[]|\\:;'\"<>,.?/"; // Symbols

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = ""; // Empty string for password.

  // Add one character from each category
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)]; // Fixed here
  password += symbol[Math.floor(Math.random() * symbol.length)];

  // Fill the rest of the password with random characters
  while (password.length < length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  // Set the value in the password box
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy"); // Selects text inside password field
}
