const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

console.log(characters.length)
const letters = characters.slice(0, 52)
const numbers = characters.slice(52, 62)
const symbols = characters.slice(62)


let genBtn = document.getElementById("gen-btn")
let firstPass = document.getElementById("first-pass")
let secondPass = document.getElementById("second-pass")
let lengthInput = document.getElementById("length-input")
let numbersInput = document.getElementById("numbers")
let symbolsInput = document.getElementById("symbols")

genBtn.addEventListener("click", () => {
    let length = lengthInput.value
    firstPass.textContent = createPassword(length)
    secondPass.textContent = createPassword(length)
})

firstPass.addEventListener("click", (e) => {
    copyToClipboard(e.currentTarget.textContent)
})

secondPass.addEventListener("click", (e) => {
    copyToClipboard(e.currentTarget.textContent)
})

function createPassword(length) {
    // set the characters
    let charactersSet = letters
    if (numbersInput.checked) {
        charactersSet = charactersSet.concat(numbers)
    }
    if (symbolsInput.checked) {
        charactersSet = charactersSet.concat(symbols)
    }

    let password = ""
    for(let i = 0; i < length; i++) {
        let randIndex = Math.floor(Math.random() * charactersSet.length)
        password += charactersSet[randIndex]
    }

    return password
}

function copyToClipboard(text) {
    if(text) {
        navigator.clipboard.writeText(text)
        alert("Password copied to Clipboard!")
    }
}
