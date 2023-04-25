'use strict'
console.log("First");
const url = 'https://jsonplaceholder.typicode.com/users';
setTimeout(()=>{
    let a=10,b=20;
    console.log(a+b);
},1000);

fetch(url).then(
    console.log("Data Fetch")
);