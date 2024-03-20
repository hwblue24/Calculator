
let num1;
let num2;
let operator;
let resultOperator;
let result; 

//Arrow fns handle simple arithmetic

const sum = ((num1, num2) => {
    const screen = document.querySelector('.screen')
    result = num1 + num2
    return screen.textContent = result.toFixed(2);

});


const difference = ((num1, num2) => {
    const screen = document.querySelector('.screen')
    result = num1 - num2
    return screen.textContent = result.toFixed(2);
});


const product = ((num1, num2) => {
    const screen = document.querySelector('.screen') 
    result = num1 * num2
    return screen.textContent = result.toFixed(2);
});


const quotient = ((num1, num2) => {
    if(num2 === 0) {
        const screen = document.querySelector('.screen')
        screen.textContent = 'U R SlOW'
        result = screen.textContent
       
    }else {
        const screen = document.querySelector('.screen') 
        result = num1/num2
        return screen.textContent = result.toFixed(2); 
    }
    
});
//variables for num1, operation and num2 


// calls one of above functions 
function operate(num1, num2, operator) {
    if (operator === '+') {
        return sum(num1, num2)

    }else if (operator === '-') {
        return difference(num1, num2)

    }else if (operator === '*') {
        return product(num1, num2)

    }else if (operator === '/') {
        return quotient(num1, num2)
    }
}

const buttonsContainer = document.querySelector('.buttonsContainer');

buttonsContainer.addEventListener('click', (event) => {
    if (event.target.innerText>=0 && result === 'U R SlOW') {
        const screen = document.querySelector('.screen')
        screen.textContent = event.target.innerText
        num1 = event.target.innerText
        num2 = undefined
        operator = undefined
        result = undefined
        resultOperator = undefined
    }else if (event.target.innerText === 'C') {
        const screen = document.querySelector('.screen')
        screen.textContent = undefined;
        num1 = undefined
        num2 = undefined
        operator = undefined
        result = undefined
        resultOperator = undefined
    }else if (result !==undefined && event.target.innerText >=0){
        num1 = result
        operator = resultOperator
        result = undefined 
        num2 = event.target.innerText
        const screen = document.querySelector('.screen')
        screen.textContent = num2 
    }else if (event.target.className === 'operators' && num1 !== undefined && num2 !== undefined && operator !==undefined) {
        num1 = Number(num1)
        num2 = Number(num2)
        resultOperator = event.target.innerText
        return(operate(num1,num2,operator))
    }else if (event.target.className === 'operators') {
        operator = event.target.innerText
    }else if (num2 !== undefined && event.target.innerText >=0) {
        num2 = num2 + event.target.innerText 
        const screen = document.querySelector('.screen')
        screen.textContent = num2 
    }else if (num1 !== undefined && operator !== undefined && event.target.innerText >=0) { 
        num2 = event.target.innerText
        const screen = document.querySelector('.screen')
        screen.textContent = num2
    }else if (num1 !==undefined && operator === undefined) {
        num1 = num1 + event.target.innerText 
        const screen = document.querySelector('.screen')
        screen.textContent = num1
    }else if (event.target.innerText>= 0) {
        num1 = event.target.innerText
        const screen = document.querySelector('.screen')
        screen.textContent = num1
    }
    
});
