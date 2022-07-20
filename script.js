const characterAmountRange =document.getElementById
('characterAmountRange')
const characterAmountNumber =document.getElementById
('characterAmountNumber')
const IncludeUppercaseElement = document.getElementById
('IncludeUppercase')
const IncludeNumbersElement = document.getElementById
('IncludeNumbers')
const IncludeSymbolsElement = document.getElementById
('IncludeSymbols')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

const UPPERCASE_CHAR_CODES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWCASE_CHAR_CODES = 'abcdefghijklmnopqrstuvwxyz';
const NUMBER_CHAR_CODES = '123456789';
const SYMBOL_CHAR_CODES = '`!@#$$%%^&*,./<>?+-';

characterAmountNumber.addEventListener('input', syncCharacterAmaount )
characterAmountRange.addEventListener('input', syncCharacterAmaount )

form.addEventListener('submit',e =>{
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const IncludeUppercase = IncludeUppercaseElement.checked
    const IncludeNumbers = IncludeNumbersElement.checked
    const IncludeSymbols = IncludeSymbolsElement.checked
    const password = generatePassword(characterAmount, IncludeUppercase, 
       IncludeNumbers, IncludeSymbols )
        passwordDisplay.innerText = password
})

function generatePassword(characterAmount, IncludeUppercase, IncludeNumbers
    ,IncludeSymbols){
        let password = '';
        let charCodes = LOWCASE_CHAR_CODES
       if (IncludeUppercase) charCodes += UPPERCASE_CHAR_CODES;
       if (IncludeNumbers) charCodes += LOWCASE_CHAR_CODES;
       if (IncludeSymbols) charCodes += SYMBOL_CHAR_CODES;

       for(var i = 0; i < characterAmount; i++){
        password += charCodes.charAt( Math.floor( Math.random() * charCodes.length ) );
       }

       return password
    }

function arrayFromLowToHigh(low, high){
    const array = []
    for (let i= low; i<= high; i++ ){
        array.push(i)
    }
    return array
}

function syncCharacterAmaount(e){
    const value= e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}