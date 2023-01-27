//Task 1
const greetingStart = 'Hello, my name is ';
const name = 'Enni';

const greeting = greetingStart + name;
console.log(greeting);


const greetingStart1 = 'Hello';
const name1 = 'Enni';

const greeting1 = `${greetingStart1}, my name is ${name1}`;
console.log(greeting1);


//const earthAge = 'Earth is estimated to be';
//const age = 2;

//const earthAgee = `${earthAge} ${age} billion years old`;
//console.log(earthAgee);


//Task 2
//1. Food and drinks cost more than 10 euros, so code prints 'Your card payment
//will be declined'

let age = 15;
const result = `${
  age > 18
    ? `You are eligible to vote.`
    : `You are not eligible to vote yet.`
}.`;
console.log(result);



//Task 3
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number * 2);
});

//Task 3.2
let totalSales = 0;
const monthlySales = [1234, 2345, 3456, 4567, 5678];
monthlySales.forEach(function(totalSales){
monthlySales += totalSales;
});
console.log('Total Sales are', totalSales);


