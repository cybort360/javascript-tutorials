//Numbers

// An integer is a whole number.
const myNumber = 42;

//A number with a decimal point is a float which references the "floating point"

const myFloat = 42.0151

const myString = "42.123abc"


console.log(myString); 

console.log(myNumber === myString);

console.log(typeof myString );

console.log(typeof myNumber);

//we can change the data type of string to number by using the number function

console.log(Number(myString) === myNumber);

//Number Methods
//The Number .isInteger() method determines whether the passed value is an interger

console.log(Number.isInteger(myFloat));

console.log(Number.isInteger(myString));

//The Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from 
//the argument, it returns NaN.

console.log(Number.parseFloat(myString));

//The toFixed() method formats a number according to how many decimal points you provide as the parameter

console.log(Number.parseFloat(myString).toFixed(2));

console.log(myFloat.toFixed(2));

//The toString() method returns a string representing the number.

console.log(myFloat.toString());
console.log(typeof myFloat.toString());
console.log(typeof Number.parseFloat(myString ))

//The Number.parseInt() method parses a string argument and returns an integer

console.log(parseInt(myString));

