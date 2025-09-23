

//Problem 1
// even or odd number


let number = 10;

if(number % 2 == 0){
    console.log(`${number} is Even`);
}else{
    console.log(`${number} is Odd`);
}



// Problem 2
// grade catagory

let mark =90;
if(mark > 100 || mark <0){
    console.log("mark is Invalid");
}
else if(mark >= 80 && mark <= 100){
    console.log("A+");
}else if(mark >= 70 && mark <= 79){
    console.log("A");
}else if(mark >= 60 && mark <= 69){
    console.log("A-");
}else if(mark >=50 && mark <= 59){
    console.log("B");
}else if(mark >=40 && mark <= 49){
    console.log("C" );
}else{
    console.log("Fail");
}


// Problem 3
// week days finds

let day = 7;

switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default: 
    console.log("Invalid Number!");
}



//Problem 4
// great number find

let number1  = 70;
let number2 = 50;


if(number1 > number2){
    console.log(`${number1} is Greater then`);
}else if(number1 < number2){
    console.log(`${number2} is Greater then`);
}else {
    console.log("Number is equal");
}


//Problem 5 
// Check number positive, negative and zero

let number3 = -10;

if(number3 > 0){
    console.log("The number is Positive");
}else if(number3 < 0){
    console.log("The number is negative");
}else{
    console.log("The number is Zero");
}


//Problem 6
// voting age is 18+

let age = 10;

if(age >= 18){
    console.log("You can Vote");
}else{
    console.log("Cannot Vote!");
}


//Problem 7
// divisible number 2 and 3

let num = 12;

if(num %2 === 0 && num %3 ===0){
    console.log(`${num} is divisible by both 2 and 3`);
}else{
    console.log(`${num} is not divisible by both 2 and 3`);
}


// Problem 8
// convert celsius to fahrenheit

let celsiusTem = 100;

let fahrenheitTem = (celsiusTem * (9/5)) +32;

console.log(`${celsiusTem} °C = ${fahrenheitTem}°F`);

let fahrenheit = 50;

let celsius = ((fahrenheit -32) * 5/9).toFixed(2);
console.log(`${fahrenheit}°F = ${celsius}°C`);


//Problem 9
// leap Year program

let year = 2024;

if((year % 4 === 0 && year%100 !==0) || (year%400 === 0)){
    console.log(`${year} is leap year`);
}else {
    console.log(`${year} is not leap year`);
}



// Problem 10
//Largest number finds

let num1 = 30;
let num2 =20;
let num3 = 10;

if(num1 >num2 && num1> num3){
    console.log(`${num1} is largest `);
}else if(num2 > num1 && num2 > num3){
    console.log(`${num2} is largest`);
}else{
    console.log(`${num3} is largest number`);
}


// Problem 11
// smallest number finds

let smallNum1 = 10;
let smallNum2 = 20;
let smallNum3 = 30;
let smallNum4 = 40;

if(smallNum1 < smallNum2 && smallNum1 < smallNum3 && smallNum1 < smallNum4){
    console.log(`${smallNum1} is smallest `);
}else if(smallNum2 < smallNum1 && smallNum2 < smallNum3 && smallNum2 < smallNum4){
    console.log(`${smallNum2} is smallest`);
}else if(smallNum3 < smallNum1 && smallNum3 < smallNum2 && smallNum3 <smallNum4){
    console.log(`${smallNum3} is smallest`);
}else{
    console.log(`${smallNum4} is smallest`);
}