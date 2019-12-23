let arrFunction = {
    lower: getRandomLowerCase,
    upper: getRandomUpperCase,
    symbol: getRandomSymbols,
    number: getRandomNumber,
}

// Gera uma letra minúscula aleatória
function getRandomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

// Gera uma letra maúscula aleatória
function getRandomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

// Gera um número aleatório
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 48)
}

// Gera um número aleatório
function getRandomSymbols() {
    const symbols = '!@#$%^&*(){}[]=<>/';

    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generateRandomPassword() {
    let password = ''

    let length = $('#pwdLength').val();
    let lower  = $('#lowercase').prop('checked');
    let upper  = $('#uppercase').prop('checked');
    let number = $('#numbers').prop('checked');
    let symbol = $('#symbols').prop('checked');

    const typeCount = lower + upper + number + symbol;
    const typeArray = [{ lower }, { upper }, { number }, { symbol }]
    .filter(item => Object.values(item)[0]);

    if (typeCount === 0) {
        return '';
    }

    for(let i = 0; i < length; i += typeCount) {
        
        typeArray.forEach(t => {
            const funcName = Object.keys(t);
            password += arrFunction[funcName]()
        })
    }
    
    $('#password').val(password)
}

