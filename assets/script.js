 // Assignment Code
 var generateBtn = document.querySelector("#generate");

 var pwLength; //confirm password length
 var confSpec; //confirm special characters
 var confUp; //confirm uppercase
 var confLo; // confirm lowercase
 var confNum; // confirm numbers
 var userSel; // user selection
 
 var specialCharacters = " ! # $ % &' * + -_ . / : ; < =  > ? @ ; "

 var upper = ["A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"]
 var lower = ["a b c d e f g h i j k l m n o p q r s t u v w x y z"]
 var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
 
 
 // Write password to the #password input
 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
 
   passwordText.value = password;

 }
 
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

 function generatePassword() {
  pwLength = prompt("How long do you want your password? Pick a number between 8 and 128.");
{
  if(!pwLength) {
    alert("Does not compute")
  
}

 else if (pwLength <= 8 && pwLength >= 128) {
  passwordLength = prompt("You must choose between 8 and 128");
  console.log("Password length " + pwLength);

} else { 
  confLo = confirm("Do you want lower-case characters?");
  console.log("Lower case " + confLo);
  confUp = confirm("Do you want upper-case characters?");
  console.log("Upper case " + confUp);
  confNum = confirm("Do you want numbers?");
  console.log("Number " + confNum);
  confSpec = confirm("Do you want special characters?");
  console.log("Special Character " + confSpec);

};

// If no selection is made

if (!confLo && !confUp && !confNum && !confSpec) {
  userSel = window.prompt("You must choose a criteria");


// all four choices are selected

} else if (confLo && confUp && confNum && confSpec) {
  userSel = lower.concat(upper, numbers, specialCharacters);
  console.log(userSel);
}
// 3/4 choices are selected

else if (confLo && confUp && confNum) {
  userSel = lower.concat(upper, numbers);
  console.log(userSel);
}
else if (confLo && confUp && confSpec) {
  userSel = lower.concat(upper, specialCharacters);
  console.log(userSel);
}
else if (confLo && confNum && confSpec) {
  userSel = lower.concat(numbers, specialCharacters);
  console.log(userSel);
}
else if (confUp && confNum && confSpec) {
  userSel = upper.concat(numbers, specialCharacters);
  console.log(userSel);
}
// half of choices are selected

else if (confLo && confUp) {
  userSel = lower.concat(upper);
  console.log(userSel);
}
else if (confLo && confNum) {
  userSel = lower.concat(numbers);
  console.log(userSel);
}
else if (confLo && confSpec) {
  userSel = lower.concat(specialCharacters);
  console.log(userSel);
}
else if (confUp && confNum) {
  userSel = upper.concat(numbers);
  console.log(userSel);
}
else if (confUp && confSpec) {
  userSel = upper.concat(specialCharacters);
  console.log(userSel);
}
else if (confNum && confSpec) {
  userSel = numbers.concat(specialCharacters);
  console.log(userSel);
}
// 1/4 choices selected

else if (confLo) {
  userSel = lower;
  console.log(userSel);
}
else if (confUp) {
  userSel = blankUpper.concat(upper);
  console.log(userSel);
}
else if (confNum) {
  userSel = numbers;
  console.log(userSel);
}
else if (confSpec) {
  userSel = specialCharacters;
  console.log(userSel);
}
}
  // Empty variable for the password length
  var passwordBlank = [];
  
  // Loop for random selection
  for (var i = 0; i < pwLength; i++) {
    var allChoices = userSel[Math.floor(Math.random() * userSel.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  // Join and return the password 
  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return writePassword();
}