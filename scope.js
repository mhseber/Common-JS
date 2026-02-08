// Block Scope, Global Scope, Function Scope
const name = 'seber';

// if(true){
//     const data = 58;
//     console.log('Inside block', data, name);
// }

// Function Scope

function  myFunc(){
    let age = 25;
    console.log('Inside function', age, name);
}
console.log('Global Scope', name);