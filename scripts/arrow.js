this.firstName='Grace' //do not define arrow function inside an object

const person = {
 firstName: 'Grace',
 lastName: 'Hopper',
 age: 89,
 fullName: () => { return this.firstName + ' ' + this.lastName }// it inherits the first line where the is the (surrounding lexical)/ (parent) scope of (the this object)
}// but we can change this to person and it could work

let x = person.fullName();
console.log(x);
