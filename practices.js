

//Problem 1

let num = 10;

if(num % 2 == 0){
    console.log(`${num} is Even`);
}else{
    console.log(`${num} is Odd`);
}



// Problem 2

let mark =120;
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

let number1  = 70;
let number2 = 1000;


if(number1 > number2){
    console.log(`${number1} is Greater then`);
}else if(number1 < number2){
    console.log(`${number2} is Greater then`);
}else {
    console.log("Number is equal");
}