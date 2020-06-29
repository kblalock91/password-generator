// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = [...Array(26)].map(_ => (++i).toString(36), i = 9);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var password = []
  var numChar = prompt("How many characters would you like in your password?");
  if (numChar < 8 || numChar > 128) {
    alert("Character length needs to be between 8 and 128!");
  } else {
    for (var i = 0; i < numChar; i++) {
      var ranChar = characters[Math.floor(Math.random() * characters.length)];
      password.push(ranChar)
    }



    return password.join("");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);