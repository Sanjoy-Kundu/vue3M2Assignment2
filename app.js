/*
|Exercise 1: 

Write a function named destructureExample that takes in an object and an array as parameters. The function should use destructuring to extract the values 'name' and 'age' from the object and the values at index 0 and index 2 from the array. The function should then return an object with the extracted values as properties with name and age.
*/

function destructureExample( obj, arr){
	const {name, age} = obj;
	const [index0,index2] = arr;
	return {name,age};
}

const object = { name: 'John', age: 30, city: 'New York' };
const arr = [10, 20, 30, 40];
const output = destructureExample(object, arr);
console.log(output);
//output = {name: 'John', age: 30}





/*
|Exercise 2:
Write a function named sumNumbers that takes in multiple numbers as arguments using the  rest   operator. The function should return the sum of all the numbers.
*/

function sumNumbers(...elements){
	let sum = 0;
	for(i=0; i<elements.length; i++){
		sum = sum + elements[i];
	}
	console.log(sum);
}
sumNumbers(1, 2, 3, 4, 5);
//output = 15





/* 
|Exercise 3:
 Write a function named createGreeting that takes in a name as a parameter and returns a greeting message using template literals. The message should be in the format: "Hello, [name]! Welcome to our website."
*/

function createGreeting(name){
	console.log("Hello, "+name+"!"+" Welcome to our website.");
}
createGreeting("Alice");
//output = Hello, Alice! Welcome to our website.






/* 
|Exercise 4
Write a function named isEven that takes in a number as a parameter and returns the string "Even" if the number is even, and "Odd" if the number is odd. Use a ternary operator instead of an if/else statement.
*/
function isEven(num){
	console.log(num%2== 0 ? 'Even' : 'Odd');
}
isEven(7);
//output = Odd








/*
|Exercise 5: 
Convert the following function to an arrow function:
function multiply(a, b) {
  return a * b;
}
*/
const multiple =(a,b)=>{return a*b};
//console.log(multiple(5,5));







/* 
|Exercise 6
Write a function named getLargestNumber that takes in two numbers as parameters. The function should return the larger number using short-circuiting and logical operators (&&, ||, ??).
*/
function getLargestNumber(number1, number2){
	const output = (number1>number2 ? number1 : number2);
	return output;
}
const result = getLargestNumber(10, 5);
console.log(result);
//output = 10







/* 
Exercise 7
Write a function named getAddressCity that takes in an object representing a person's address. The address object has properties 'street', 'city', and 'country'. The function should return the value of the 'city' property if it exists, or the string "Unknown" if it doesn't exist, using optional chaining.
*/

function getAddressCity(address){
	return address?.city || 'Unknown';
}
const address = { street: '123 Main St', country: 'USA'};
const finalResult = getAddressCity(address);
console.log(finalResult);
//output = Unknown







/**
Exercise 8: 
Write a function named doubleNumbers that takes in an array of numbers and returns a new array with each number doubled using the array map method.
 */

function doubleNumbers(numbers){
	return numbers.map(n => n*2);
}
const doubleOutput = doubleNumbers([1, 2, 3, 4, 5]);
console.log(doubleOutput);
//output = [2, 4, 6, 8, 10]








/**
 * Exercise 9
 * Write a function named filterEvenNumbers that takes in an array of numbers and returns a new array with only the even numbers using the array filter method.
 */
function filterEvenNumbers(numbers){
	return numbers.filter(n => n%2 == 0);
}

const fiEvenNum = filterEvenNumbers([1, 2, 3, 4, 5]);
console.log(fiEvenNum);
//output =  [2, 4]










/**
 * Exercise 10: 
Write a function named sumArray that takes in an array of numbers and returns the sum of all the numbers using the array reduce method.
 */

function sumArray(array){
	const sum = array.reduce((m, n) => m+n);
	console.log(sum);
}
sumArray([1, 2, 3, 4, 5]);
//output =  15










/*
|Example 11: 
Write a function named sortNumbers that takes in an array of numbers and returns a new array with the numbers sorted in ascending order using the array sort method.
*/
function sortNumbers(num){
	const sorting = num.sort((x,y) => x-y);
	console.log(sorting);
}
sortNumbers([5, 2, 8, 1, 4]);
//output = [1, 2, 4, 5, 8]
