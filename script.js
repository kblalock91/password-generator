// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = [...Array(26)].map(_ => (++i).toString(36), i = 9);
var specChars = ["!", "@", "#", "$", "%", "^", "&"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var password = []
  var numChar = prompt("How many characters would you like in your password?");
  var withLowercase = confirm("Would you like your password to include lowercase letters?");
  var withUppercase = confirm("Would you like your password to include uppercase letters?");
  var withNumeric = confirm("Would you like your password to include numeric characters?");
  var withSpecChar = confirm("Would you like your password to include special characters?");

  if (numChar < 8 || numChar > 128) {
    alert("Character length needs to be between 8 and 128!");
  } else {
    for (var i = 0; i < numChar; i++) {
      var characters = []
      var letter = letters[Math.floor(Math.random() * letters.length)]
      var randNum = Math.floor(Math.random() * 10)
      var specChar = specChars[Math.floor(Math.random() * specChars.length)]

      if (withUppercase) {
        characters.push(letter.toUpperCase());
      };

      if (withLowercase) {
        characters.push(letter);
      };

      if (withNumeric) {
        characters.push(randNum);
      };

      if (withSpecChar) {
        characters.push(specChar)
      }

      var ranChar = characters[Math.floor(Math.random() * characters.length)];
      password.push(ranChar)
    }


  }
  return password.join("");
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);