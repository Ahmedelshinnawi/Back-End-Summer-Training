let x = 10;
if (x == 10) { //true condtion
    console.log('x is 10');
}
console.log('additional code');

if (x == 5) {  //false condition
    console.log('x is 5');
}
console.log('addtional code 2');


//else statement
let z = 20;
if (z == 50) {
    console.log('z is 50');
}
else {
    console.log('Your question is wrong');
}

//else if statement
let degree = 66;
if (degree >= 50 && degree <= 70) {
    console.log("D");
}
else if (degree > 70 && d <= 80) {
    console.log("C");
}
else if (d > 80 && degree <= 90) {
    console.log("B")
}
else {
    console.log("A");
}

//Switch
let temp = 35;
switch (temp) {
    case temp = 37:
        console.log("Normal");
        break;
    default:
        console.log("Abnormal");
}

//For loop
let arr = ["Ahmed", "Mohamed", "Omar", "Khaled", "Mahmoud", "Ali", "Osama"];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//For each

let arrage = [17, 18, 21, 25, 15, 13, 20]
arrage.forEach(element => {
    if (element >= 18) {
        console.log("Above age");
    }
    else {
        console.log("Underage");
    }

});