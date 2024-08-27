//Function --> is a block of code that can be called by name.


//Void function
function printname(name = 'Username', number1 = 1, number2 = 2) {
    console.log('Hello ' + name)
    let x = number1;
    let y = number2;
    let z = x + y;
    console.log(z);
}

printname('Ahmed', 20, 30);


//Non-void function
function calculate(a, b, c) {
    return a + b + c;
}

let result = calculate(10, 20, 30);
console.log(result + 10);

//Arrow function 
let mul = (s, d) => {
    return s * d;
}
console.log(mul(5, 6));

//Another way to write arrow function

let div = (w, r) => w / r;
console.log(div(20, 10));


const user = {
    name: 'Ahmed',
    age: '21',
    print: function () {
        console.log(this); // in the regular function, 'this' refers to the object that 'this' resides in and print any thing in this object 
    }
}
const user2 = {
    name: 'Ahmed',
    age: '21',
    print: () => {
        console.log(this); // in the arrow function 'this' refers to the global in the page and print the whole window
    }
}
console.log(user.print());
console.log(user2.print());
// Callback function
function add(a, b, Callback) {
    let result = a + b;
    Callback(result);
}
function print(result) {
    console.log(result);
}
add(5, 6, print)


//Promises
//new promise(resolve,reject)=>
// then, catch, finally
//async, await


// Now we will fetch api using then, catch, finally
let data = fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
    return response.json();
}).then(data => {
    console.log(data);
}).catch(error => {
    console.log('error');
}).finally(() => {
    console.log('finally');
});

//Now we will fetch api using async, await

let asyncData = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    console.log(data);
}
asyncData();

