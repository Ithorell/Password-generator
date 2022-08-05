// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabetLower  = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var alphabetUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','V','X','Y','Z']
var symbols = ['!','@','#','$','%','^','&','*','(',')']
var numbers = ['1','2','3','4','5','6','7','8','9','0']

// function randomLower (){
//   return String.fromCharCode(Math.floor(math.random()*26))
// }
// console.log (randomLower)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordlength = prompt("How long of a password?")
// Length of the password popups

  if(passwordlength < 8){
    alert("Password to short")
    return;  
  }
  else if (passwordlength > 128){
    alert("Password to long")
    return;
  }
  else if (isNaN(passwordlength)){
    alert("Invalid Entry")
    return;
  } 
  
// choosing modifiers for password
var Uppercasechoice = confirm("Include Uppercase letters?")
var lowerCasechoice = confirm("Include Lowercase Letters?")
var symbolChoice = confirm ("include Special Characters")
var numberChoice = confirm ("Include numbers?")

var possibleChoices = []

if(Uppercasechoice){
  possibleChoices = possibleChoices.concat(alphabetUpper)

}
if(lowerCasechoice){
  possibleChoices = possibleChoices.concat(alphabetLower)

}
if(symbolChoice){
  possibleChoices = possibleChoices.concat(symbols)

}
if(numberChoice){
  possibleChoices = possibleChoices.concat(numbers)

}

for (let i=0; i<passwordlength; i++){
   [Math.floor(Math.random(possibleChoices))];
  console.log(possibleChoices)
    

}

// for (let i = 0; i<passwordlength; i++){
//    Math.floor(Math.random())
// }

// for(let i = 0; i < length; i += typesCount) {
//   possibleChoices.forEach(type => {
//     var funcName = Object.keys(type)[0];
//     // console.log("funcName: ", funcName);

//     generatePassword += randomFunc[funcName]();

//   });

 






}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


