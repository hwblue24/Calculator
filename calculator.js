//Arrow fns handle simple arithmetic

const sum = ((a, b) => a + b);
const difference = ((a, b ) => a -b); 
const product = ((a, b) => a * b); 
const quotient = ((a, b) => a/b); 
//variables for num1, operation and num2 

let num1;
let num2; 
let operator;

function operate(a, b, operator) {
    if (operator = "+") {
        return sum(a,b)

    } else if (operator = "-"){

        return difference(a,b);

    } else if(operator = "*") {

        return product(a,b)

    } else if(operator = "/") {

        return product(a,b);

    }

}


const buttonsContainer = document.querySelector('.buttonsContainer');

buttonsContainer.addEventListener('click', (event)=> {
    const screen = document.querySelector('.screen')
    screen.textContent = event.target.innerText
});
