 // Assignment Code
 var generateBtn = document.querySelector("#generate");

 var pwLength; //confirm password length
 var pwStringConcat = "";
 
 var specialCharacters = "!#$&'*+-_./:;<=>?@;"
 var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 //var lower = "abcdefghijklmnopqrstuvwxyz"
 var lower = upper.toLowerCase();
 var numbers = "1234567890";
 
 var pwLength = Number(window.prompt("How long do you want your password? Pick a number between 8 and 128."));


 // Logic for password length within parameters
 if (pwLength >= 8 && pwLength <= 128) {
   var finalPwLength = pwLength;
 } else if (pwLength < 8 || pwLength > 128) {
   window.prompt("Please enter a number between 8 & 128.");
 }
 
 var pwUpper = window.confirm("Do you want your password to include upper-case letters?"); 
 var pwLower = window.confirm("Do you want your password to include lower-case letters?"); 
 var pwNumber = window.confirm("Do you want your password to include numbers?"); 
 var pwSpecialCharacters = window.confirm("Do you want your password to include special characters?"); 

 

if (pwSpecialCharacters != false) {
    pwStringConcat += specialCharacters
}

if (pwUpper != false) {
   pwStringConcat += upper
}

if (pwLower != false) {
    pwStringConcat += lower
}

if (pwNumber != false) {
    pwStringConcat += numbers
}

function generatePassword(length, characters) {
  
  //Transform string into an array
  var charArray = characters.split("");
  //length and amount of random characters from transformed array
  var result = "";
  //add length amount of random characters from charArray to result string
  
  //return result
  return result;
}

 // Write password to the #password input
 function writePassword() {
  var password = generatePassword(pwLength, pwStringConcat);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);


