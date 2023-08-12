// Primitives: number, string, boolean, null and undefined.
// More complext types: arrays, objects.
// Function types and parameters.

// Primitives:

let n: number; // declaration
n = 10; // initilization

let num: number = 10; // declaration + initialization

let myName: string;
myName = "Rambabu Patidar";

let isStudent: boolean;
isStudent = true;

const isDeveloper: boolean = true;

// this specifying the data types to variables are known as type annotations.
//-----------------------------------------------------------------------------------

// More complex Types

let nums: number[]; // declaration of array that contain numbers.
nums = [1, 2, 3, 4, 5, 6];

let strings: string[];
strings = ["string1", "string2", "string3"];

let person: {}; // declaration for object to be stored in person but which fields should be there are not given.
person = {
	name: "Rambabu Patidar",
	age: 32,
	address: "Jabalpur, Madhya pradesh",
};

let book: {
	name: string;
	price: number;
	isProgramming: boolean;
}; // declaration of object that must have the specified data type

book = {
	name: "Craking the coding interview",
	price: 20,
	isProgramming: true,
};
// NOTE: we cann't miss any property in the initilization if we specified it in declaration

let nuts: {
	name: string;
	season: string;
	amount: number;
}[]; // array of object

nuts = [
	{
		name: "Almonds",
		season: "Winter",
		amount: 8,
	},
	{
		name: "GroundNuts",
		season: "All Season",
		amount: 50,
	},
	{
		name: "Dry Grapes",
		season: "Winter",
		amount: 15,
	},
];

// --------------------------------------------------------------------------

// Type Inference
// it is a feture in typescript to automatically knows the type of varible if it is based on initialization.

let courseName = "React - The complete guide"; // courseName varialbe is inferred as string type
// courseName = 34; // so assigning number will now show error

// but there might be case where we want to store more then one type of data in a same varible.
// So there must be a another type of data type, and yes we do have.
// UNION TYPE

let address: string | number = "Jabalpur, Madhya Prades, India";
address = 482005; // now we are storing number.

// ---------------------------
// Type Aliases
// we can see that we are using code duplication where we are defining type on line no. 51 and 38
// so the better option is to make our own type and then assing it to both so that code duplication can be removed.
// that why typescript has "type" keyword

type Animal = {
	name: string;
	color: string;
	horns: number;
};

let animal: Animal = { name: "Horse", color: "White Or Black", horns: 2 };

let animals: Animal[] = [
	{ name: "Buffalo", color: "Black", horns: 2 },
	{ name: "Elephent", color: "Grey", horns: 2 },
];

// Functions and types

function add(a: number, b: number): number {
	return a + b;
}
// this function automatically infere its return value as number because it sees that we are adding two number and the output of the number will be number.
// so we not need to explictly define that this function is of type number.
// although we can do if we want
// also we can also use union type with functions also
// the thing to remember is that the type for function are to be written after the argument parenthesis.

function printOutput(value: any) {
	console.log(value);
}
// for the function which doesn't return anything there is special type which is void
// it's similar to undefined or null but the void value can only be used by functions which doesn't return anything.

// GENERICS:(Very Important)

// let's make a function where we can pass "any" type array and a value of "any" type and want to put the value in front of that array and return it.
function insertInFront(array: any, value: any) {
	const newArray = [value, ...array];
	return newArray;
}

const tempArray = [1, 2, 3]; // number type

const newArray = insertInFront(tempArray, 0); // returned value is of "any" type

// hence we can call split() method on this newArray and typescript will not gives us error.
// that is very bad because newArray is consited of number and we don't have split() method on number(actually);
newArray[0].split(" ");
// This happens bcz when we passed the tempArray(number type) and 0(number type) into the insertInFront() function it lost its type and the function also returned "any" type.
// so our newArray is also of "any" type and hence line 141 is not throwing error because we as a developer knows that the newArray is full of number but typescript doesn't know it.

// The above is the problem we have with normal approach
// so we have generics to solve this problem.
// we need a way of capturing the type of the argument in such a way that we can also use it to denote what is being returned. Here, we will use a type variable, a special kind of variable that works on types rather than values.

function insertInFrontII<T>(array: T[], value: T) {
	const newArray = [value, ...array];
	return newArray;
}

const tempStringArray = ["Ram", "Abhi", "Dy"];
const newStringArray = insertInFrontII(tempStringArray, "Vishal");
// The type are send via inference but while calling function
// but we can call it with type also like : insertInFrontII<string>(tempStringArray, "Vishal");
//now it capture the argument type and return the appropiate type hence the newStringArray is of type 'string' instead of any.

// check it out for more : https://www.typescriptlang.org/docs/handbook/2/generics.html
