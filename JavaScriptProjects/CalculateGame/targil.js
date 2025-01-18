const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const operatorss = ['+', '-', '*', '/'];
let randomOper = Math.floor(Math.random() * operatorss.length);
let oper = operatorss[randomOper]
let result = 0;

if (oper === '+') {
    result = num1 + num2
}
else if (oper === '-') {
    result = num1 - num2
} else if (oper === '*') {
    result = num1 * num2
} else if (oper === '/') {
    result = num1 / num2
}


console.log(`${num1} ${oper} ${num2} = ${result} `);


let q1 = 0
for (let q1 = 1; q1 <= 1; q1++) {
    const q1 = prompt(`${num1} ${oper} ${num2} = `)

    if (q1 == result) {
        alert('1 mark')
    } else if (q1 !== result) {
        alert('try Again')


    }
}








let main = () => {
    const questions = [['1+1'], ['2+2'], ['3+3'], ['4*4'], ['6-2']]
    for (let i = 0; i < questions.length; i++) {
        console.log(questions[i]);

    }
}

main()



