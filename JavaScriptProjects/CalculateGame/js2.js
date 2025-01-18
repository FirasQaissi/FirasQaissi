
function calc() {
    let correctAnswers = 0
    document.querySelector('.first').innerHTML = `
        <h1 id = "text2" >Lets Start:</h1>
        <div id = "part2"> </div>
       
        <p id="corecct" ></p>
     `
    let userQuestion = 0


    plusMin()

    function plusMin() {

        if (userQuestion < 10) {
            let num1 = Math.floor(Math.random() * 10)
            let num2 = Math.floor(Math.random() * 10)
            const operatorss = ['+', '-', '*', '/'];
            let randomOper = Math.floor(Math.random() * operatorss.length);
            let oper = operatorss[randomOper]
            let corecctResults

            if (oper === '+') {
                corecctResults = num1 + num2;
            } else if (oper === '-') {
                corecctResults = num1 - num2;
            } else if (oper === '*') {
                corecctResults = num1 * num2;
            } else if (oper === '/') {
                corecctResults = num1 / num2;
            }


            document.getElementById("part2").innerHTML = `
                <div class="question">
                <h2 id = "h2q">Question (${userQuestion + 1}) from (10) </h2>
               <p id='q1' > ${num1}  ${oper} ${num2} </p>
                 <input type="number" id = "answerInput"><br><br>
                 <button id=ccc onclick= 'check( ${corecctResults})' >Check Your Answer</button></div>
            `


        } else {

            document.querySelector('#corecct').innerHTML = `
           Correct answers:  ${correctAnswers} 

            `
            const togreen = document.getElementById('corecct')
            togreen.style.color = 'green'
            togreen.style.fontSize = '40px'
            togreen.style.textDecoration = 'underline'


        }


        window.check = function (corecctResults) {
            let userAnswer = parseInt(document.getElementById('answerInput').value);
            if (userAnswer === corecctResults) {
                correctAnswers++;
            }
            userQuestion++;
            plusMin();

        }

    }

}





