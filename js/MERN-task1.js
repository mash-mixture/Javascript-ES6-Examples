/**TASK -- 1**/
/**
 *  - declare and initialize an object with properties of fullName (string ) ,age (number) , 
address (object containing properties presentAddress , permanentAddress and postalCode ) and hobbies ( array of string ).
	- change the presentAddress property of above object;
	- add new hobby using push 
	- access object property using bracker notation obj[variable]
	- log object's keys, values and , key-value pairs to console (using Object.keys, values and entries )

 *  -declare and initialize 2 variables and perform all operations between them (+,-,*,/,% , == , === , >=, <= , !== , )
    -declare and initialize an array of numbers, and perform these operations/method in such a way that the purpose of method is clarified , also log the result in the console
	-Sort the array in descending array ( using sort)
	-Calculare Average of array elements ( using reduce)
	-return a new array containing exponential of each element ( using map )
	-filter the elements who are fully divided by 2 ( using filter )
	-add new element to start and end of array
	-remove an element from start and end of array
	-for each element of array , print it on the console (using forEach)
	-perform 4 types of slice and splice methods ( like slice (5) and slice (5,6) are 2 types )
	-find an element with value 1 (using arr.find() method )
	-find the highest element of array   

 *  - declare and initialize a string , and perform these operations :
	-find its length
	-find if it contains a character a ( using indexOf)
	-replace whitespace of string by hyphen "-" (using replace)

 *  Also perform these string methods : 
    -String slice(
    -String replace()
    -String toUpperCase()
    -String toLowerCase()
    -String concat()
    -String trim()
    -String charAt()
    -String split()
*/



/***QUESTIONS #1 - solution***/

/*Declare and Initialize Object*/
const personData = {
    fullName: 'Asad Rasool',
    age: 22,
    address: {
        presentAddress: 'Wah Cantt',
        permanentAddress: 'Wah Cantt',
        postalCode: 411
    },
    hobbies: ['Playing Cricket' , 'Coding' , 'Playing Video Games']
}


/*Changing the presentAddress Property*/
personData.address.presentAddress = 'Ghari Afghana';

/*Adding New Hobby using `push` method*/
personData.hobbies.push('Exploring Internet')

/*Access object using bracket notation*/
let fullName =  personData['fullName'];
let postalCode = personData.address.postalCode;

/*logging accessed properties*/
console.log(`Full Name: ${fullName}\nPostal Code: ${postalCode}`)

/*Logging Object keys using Object.keys method*/
let objKeys = Object.keys(personData)

console.log(`Person Data Keys:` , objKeys)

/*Logging Object value using Object.values method*/
let objValues = Object.values(personData)

console.log(`Person Data Values:`, objValues)

/*Logging Object key-value pair using Object.entries method*/
let keyValPair = Object.entries(personData)

console.log(`Person Data Keys-Values pair:`, keyValPair)



/***QUESTIONS #2 - solution***/

/*Declare & initialize two variables*/
let a = 5 , b = 10;
/*Performing Operations*/
let add = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;
let mod = a % b;
let equality = a == b;
let strictEquality = a === b;
let greatEqual = a >= b;
let lessEqual = a <= b;
let strictNotEquality = a !== b;
console.log(`Add:` , add, `\nSub:` , sub , `\nMultiply:` , mul , `\nDivision:` , div , `\nMod:` , mod , `\nEquality:` , equality , `\nStrict Equality:` , strictEquality , `\nGreat Than Or Equal:` , greatEqual , `\nLess than Equal:` , lessEqual , `\nStrict Not Equal:` , strictNotEquality)


/*Declare And Initialize Array*/

let myArray = [4, 5, 3, 2, 6, 8, 9]

myArray.sort((a ,b) => {return a-b});
myArray.reverse();
console.log(`Desnding Array:` , myArray)


/*-Calculare Average of array elements ( using reduce)*/
let initialValue = 0;
let arrSum = myArray.reduce((previousValue , currentValue) => { return previousValue + currentValue} , initialValue) ;
let avg = arrSum / myArray.length;

console.log(`Array Average Reduce Method` , avg);



/* -return a new array containing exponential of each element ( using map ) */

const exponentialArray = myArray.map(value => {return value**2})


/* -filter the elements who are fully divided by 2 ( using filter ) */

const divisorBy2 = [];
divisorBy2.push(myArray.filter((element) => {
    if(element%2 == 0) return element;
}))

console.log(`Filtered array element Didided By 2` , divisorBy2)


/* -add new element to start and end of array */

/*add to start*/
myArray.unshift(101);

console.log(`Add new element to the start of array` , myArray)

/*Add to End*/
myArray.push(1000);
console.log(`Add new element to the end of array` , myArray)

/* -remove an element from start and end of array */

/*remove to start*/
myArray.shift(101);

console.log(`Remove new element to the start of array` , myArray)

/*remove to End*/
myArray.pop(1000);
console.log(`Remove new element to the end of array` , myArray)

/* -for each element of array , print it on the console (using forEach) */
console.log(`Print all element using forEach`);
myArray.forEach((value) => console.log(value))