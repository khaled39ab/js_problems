function add(...args){
    return args.reduce((previous, current) => {
        return previous + current;
    });
}

function multiply(...args){
    return args.reduce((previous, current) => {
        return previous * current;
    });
}

function subtract(x,y){
    return x - y
}
function divide(x,y){
    return x / y
}

const addition = add(4,5,6);
console.log("Addition is : "+ addition);

const multiplication = multiply(4,5,6,10);
console.log("Multiplication is : " + multiplication);

const subtraction = subtract(21 , 12);
console.log("Subtraction is : " + subtraction);

const division = divide (150, 15);
console.log("Division is : " + division);