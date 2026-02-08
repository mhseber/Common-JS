//  Different Truthy and Falsy values in JavaScript

let data;
data = 0;
data = "";
data = " ",
data = "0",
data = "seber"
console.log('Value of data',data); 

if (data){
    console.log("Truthy");
}
else{
    console.log("Falsy");
}

if (!data){
    console.log("Falsy");
}
if (!!data === true){
    console.log("Truthy");
}