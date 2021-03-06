// Assignment Code
var generateBtn = document.querySelector("#generate");    //Returns the first element that matches a specified CSS selector(s) in the document.

function UppercaseLetter(length,repo){
  var Uletters = ['A','B','C','D','E','F','G','H','I','J',            //Uppercase letters array
  'K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  for (var i = 0; i < length; i++) {                                  //Generate random numbers to insert them in the uppercase array to generate random letters.
    var random = Math.floor(Math.random()*Uletters.length);   
    console.log(random);
    repo.push(Uletters[random]);                    //Append random letters into the empty array
  }
  console.log(repo);
  return (repo)
};

function LowercaseLetter(length,repo) {         
  var Lletters = ['a','b','c','d','e','f','g','h','i','j',
  'k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  if (repo.length == length) {                  //If to know if the repo is empty or full
    l = Math.floor(length /3);                  
    for (var i = 0; i < l; i++) {               //If the repo is full, create random index to have random letters and susbstitute elements in the array.
      var random = Math.floor(Math.random()*Lletters.length);
      var indexRandom = Math.floor(Math.random()*repo.length);
      console.log(random);
      repo[indexRandom] = (Lletters[random]);
    }
  } else {                                    //If the repo is empty, append elements until full the array.
    l = length;
    for (var i = 0; i < length; i++) {
      var random = Math.floor(Math.random()*Lletters.length);
      console.log(random);
      repo.push(Lletters[random]);
    }
  }

  console.log(repo);
  return (repo)
};

function RandomCharacters (length,repo) {
  var SpecialCharacters = ['!','#','$','%','&','/','(',')','=','?',
  '¡','¿','+','-','_','*','~','{','}','[',']',':',';',',','|','"'];
  if (repo.length == length) {
    l = Math.floor(length /3);
    for (var i = 0; i < l; i++) {
      var random = Math.floor(Math.random()*SpecialCharacters.length);
      var indexRandom = Math.floor(Math.random()*repo.length);
      console.log(random);
      repo[indexRandom] = (SpecialCharacters[random]);
    }
  } else {
    l = length;
    for (var i = 0; i < length; i++) {
      var random = Math.floor(Math.random()*SpecialCharacters.length);
      console.log(random);
      repo.push(SpecialCharacters[random]);
    }
  }
  console.log(repo);
  return (repo);
};

function RandomNumbers(length,repo) {
  if (repo.length == length) {
    l = Math.floor(length /3);
    console.log(l);
    for (var i = 0; i < l; i++) {
      var random = Math.floor(Math.random()*11);
      var indexRandom = Math.floor(Math.random()*repo.length);
      console.log(random);
      repo[indexRandom] = random;
    }
  } else {
    l = length;
    for (var i = 0; i < l; i++) {
      var random = Math.floor(Math.random()*11);
      var indexRandom = Math.floor(Math.random()*repo.length);
      console.log(random);
      repo.push(random);
    }
  }
 
  console.log(repo);
  console.log(repo.join(""));
  return (repo);
};

var passwordText = [                                        //Array with object elements. 
  {q: 'Do you want to have Uppercase letters in your password?',  
    a:'y',
  },
  {q: 'Do you want to have lowercase letters in your password?',
    a:'y'
  },
  {q: 'Do you want to have special characters in your password?',
    a:'y'
  },
  {q: 'Do you want to have numbers in your password?',
    a:'y'
  }
];

function generatePassword(){            //Function that will generate the password.
  var passwordLength = prompt('Enter the number of characters between 8 and 128: ');
  var answer = "";
  var boolToString = "";
  var AnswerList = [];
  var repo = [];

  if (passwordLength >= 8 && passwordLength <= 128) {     //If to know if the password has the right length.
    for (var i = 0; i < passwordText.length; i++) {       //for to convert true and false into strings (y or n).
      answer = confirm(passwordText[i].q);

      if (answer) {
        boolToString = 'y';
        AnswerList.push(boolToString);
      } else {
        boolToString = 'n';
        AnswerList.push(boolToString);
      }
    }
    console.log(AnswerList);                            //Visualize the answer vector

    for (var j = 0; j < AnswerList.length; j++) {      //for to loop into the passwordText object where the questions are found.
      if (j === 0){                                     //If to know the number of question
        if (AnswerList[j] === passwordText[j].a) {      //if to compare the user answers
          UppercaseLetter(passwordLength,repo);         //Call the function and send the empty array and the password length. 
          } else {
            passwordLength = passwordLength;          //Make sure that the password length size wont change.
          } 
        }

      if (j === 1) {
        if (AnswerList[j] === passwordText[j].a) {
          LowercaseLetter(passwordLength,repo);
        } else {
          passwordLength = passwordLength;
        } 
      }
          
      if (j === 2) {
        if (AnswerList[j] === passwordText[j].a) {
          RandomCharacters(passwordLength,repo);
        } else {
          passwordLength = passwordLength;
        }
      }

      if (j === 3) {
        if (AnswerList[j] === passwordText[j].a) {
          RandomNumbers(passwordLength,repo);
        } else{
            passwordLength = passwordLength;
          }
        }
    }
    var password = repo.join("");         //After the for loop ends, get the final version of the repo and convert it to string.
    console.log(password);
    return password;
  } else {
    alert("No valid length");}
};

// Write password to the #password input
function writePassword() {                                //writePassword function
  var password = generatePassword();                      //Password its equal to the function that will generate the password.
  var passwordText = document.querySelector("#password"); //Returns the first element that matches a specified CSS selector(s) in the document.

  passwordText.value = password;                          //Value is a property of passwordText

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);   //When click the button, call writePassword function
