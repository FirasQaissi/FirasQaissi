const pw = document.getElementById('pw');
const copy = document.getElementById('copy');
const lenElement = document.getElementById('lenght');

const upperCase = document.getElementById('UpperCase');
const lowerCase = document.getElementById('lowerCase');
const number = document.getElementById('number');
const symbols = document.getElementById('symbols');
const generate = document.getElementById('generate');




const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const sym = '!@#$%^&*()_+';

function getUpperCase() {
    return upper[Math.floor(Math.random() * upper.length)]
}

function getLowerCase() {
    return lower[Math.floor(Math.random() * lower.length)]
}
function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}
function getsym() {
    return sym[Math.floor(Math.random() * sym.length)]
}

function generatePassword() {
    len = lenElement.value;
    let password = '';

    if (upperCase.checked) {
        password += getUpperCase();
    }
    if (lowerCase.checked) {
        password += getLowerCase();
    }
    if (number.checked) {
        password += getNumber();
    }
    if (symbols.checked) {
        password += getsym();
    }
    if (password.length === 0) {
        alert('Please select atleast one option');
        return;
    }
    for (let i = password.length; i < len; i++) {
        const x = generateX()
        password += x;
    }
    pw.innerText = password;

}

function generateX() {
    const xs = [];
    if (upperCase.checked) {
        xs.push(getUpperCase());

    }

    if (lowerCase.checked) {
        xs.push(getLowerCase());

    }
    if (number.checked) {
        xs.push(getNumber());

    }
    if (symbols.checked) {
        xs.push(getsym());

    }
    if (xs.length === 0) return '';

    return xs[Math.floor(Math.random() * xs.length)];

}

generate.addEventListener('click', generatePassword);

copy.addEventListener('click', () =>
    copy.addEventListener('click', () => {
        const textarea = document.createElement('textarea');
        const password = pw.textContent;
        if (!password) { return; }
        textarea.value = password;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        alert('Password copied to clipboard');
    }));