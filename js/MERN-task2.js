/**TASK -- 2**/
/**
 * Lab Task: Rest and Spread Operators, Destructuring, Shallow and Deep Copy, and the this Keyword
In this lab, you will practice using the rest and spread operators, destructuring arrays and objects, making shallow and deep copies, and understanding the this keyword in JavaScript.

Part 1: Rest and Spread Operators
Create a function called sum that takes an unlimited number of arguments and returns their sum. Use the rest operator to capture all the arguments in the function.

Create an array called numbers with the following values: 1, 2, 3, 4, 5.

Use the spread operator to pass the elements of the numbers array as arguments to the sum function. Print the result to the console.

Create an object called person with the following properties:

name: 'John'
age: 30
country: 'USA'
Use the spread operator to create a new object called personClone that is a shallow copy of the person object. Modify the name property of personClone to 'Jane'. Print both objects to the console to verify that they are different objects with different property values.
Part 2: Destructuring
Using destructuring, create variables a, b, and rest from the numbers array.

Using destructuring, create variables name, age, and country from the person object.

Use destructuring to swap the values of a and b. Print the values of a and b to the console.

Use destructuring to create a new object called user from the person object, with the properties name and age. Print the user object to the console.

Part 3: Shallow and Deep Copy
Create a deep copy of the person object and store it in a variable called personDeepCopy. Modify the age property of the original person object to 35. Print both the original person object and the personDeepCopy object to the console to verify that they are different objects with different property values.

Create a shallow copy of the numbers array and store it in a variable called numbersShallowCopy. Modify the first element of the original numbers array to 0. Print both the original numbers array and the numbersShallowCopy array to the console to verify that they are different arrays but share the same elements.

Part 4: this Keyword
Create an object called user1 with the following properties:
name: 'John'
age: 30
sayHi: a function that logs 'Hi, my name is John' to the console
Create an object called user2 with the following properties:
name: 'Jane'
age: 25
sayHi: a function that logs 'Hi, my name is Jane' to the console
Call the sayHi function of both user1 and user2 using the this keyword. Verify that the correct name is logged for each object.
 */