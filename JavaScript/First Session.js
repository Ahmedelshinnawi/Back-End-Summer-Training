let x = 50;
console.log(x); //Global scope
function L() {
    let x = 70;
    console.log(x); //Block scope
}
L();
console.log(x);

var y = 50;
console.log(y);//Global scope
function R() {
    var y = 30;
    console.log(y); //Block scope
}
R();
console.log(y);


{
    let z = 20; //Block scope
    console.log(z);
}
//console.log(z) here will give an error
{
    var z = 20; //Global scope
}
console.log(z);

name = "ahmed";
var name; //Hoisiting


let a = 10; //Number
let b = ' Osama'; //String
let users = { 'name': "ahmed", age: 25, birthday: "20-3-1999" }; //Object
let Student_degrees = [99, 70, 50, 100]; //Array
const numbers = new Set([50, 70, 60, 50]) //Set
console.log(numbers);

console.log(typeof (a));
console.log(typeof (b));
console.log(typeof (users));
console.log(typeof (Student_degrees));



a = a + b; //Concat 
console.log(a);
b = b + users.age; //Concat with objects
console.log(b);

console.log(users.age); // Printing a specifc element of the object

console.log(Student_degrees[3]); //Printing a specifc element of an array








