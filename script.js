const passwordBox = document.getElementById("password");
const length = 12;
const button = document.getElementById("GenBtn");
const copyIcon = document.getElementById("copyIcon");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#_&*$%";

const allCharacters = uppercase + lowerCase + numbers + symbols;

function generatePassword(){
    let password = "";
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += numbers[Math.floor(Math.random()*numbers.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];

    while(password.length < length){
        password += allCharacters[Math.floor(Math.random()*allCharacters.length)];
    }
    passwordBox.value = password;
}
button.addEventListener("click", generatePassword);
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
copyIcon.addEventListener("click", copyPassword);