const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pass1El= document.getElementById("pass1")
let pass2El= document.getElementById("pass2")
let passwordLength =12

function generateRandomChar(){
    let randomChar= Math.floor(Math.random()*characters.length)
    return characters[randomChar]
}

function generateRandPass(){
    randomPass=""
    for(i=0;i<passwordLength;i++){
        randomPass+=generateRandomChar()
    }
    pass1El.textContent= randomPass
    
     randomPass2=""
    for(i=0;i<passwordLength;i++){
        randomPass2+=generateRandomChar()
    }
    pass2El.textContent= randomPass2
}


