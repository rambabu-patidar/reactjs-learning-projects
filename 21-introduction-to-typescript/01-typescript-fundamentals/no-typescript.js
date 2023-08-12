// Here in javascript we don't need to provide the types for parameters.
// And it dynamically get to know the types and perform the operation.
// if the proper arguments are not passed or used then we might run into errors.
// that is why we do have typescript
// typescript add type syntax in javascript
// it is a superset of javascript.
// the code we write in typescript gets converted into javascript at the end but by using it
// we can make sure the we don't have any error at run time.

function add(a, b) {
	return a + b;
}

const result = add(4, 5);
const result2 = add("4", "5");

console.log(result);
console.log(result2);
