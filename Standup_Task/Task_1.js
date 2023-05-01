'use strict'
console.log("First");
const url = 'https://jsonplaceholder.typicode.com/users';

setTimeout(()=>{
    let a=10,b=20;
    console.log(a+b);
},2000);
fetch(url).then(
    setTimeout(()=>{
        console.log("Data Fetch")
    },1950)
);
