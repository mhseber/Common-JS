// function pass reference

function multiply(x,y){
    const mult = x * y;
    return mult;
}

const a = 5;
const b = 10;

const result = multiply(a, b);
console.log(result);