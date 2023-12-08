let address = "Street lorem ipsum, 13";
// let price = 2.33;
// let active = false;
// let sample;
// let sampleNull = null;


// console.log(typeof address);
// console.log(typeof price);
// console.log(typeof active);
// console.log(typeof sample);
// console.log(typeof sampleNull);


//Part 2

//----------Casting string to boolean----------

let booleanAddress = Boolean(address);
console.log(booleanAddress);


//----------Casting string to number----------

// case1
let numberAddress = Number(address); //--> Not a number (NaN)
console.log(numberAddress);

// case2
address = "";
numberAddress = Number(address); // --> 0 (number dataType)
console.log(numberAddress);

// case3
address = "13";
console.log(typeof address);
numberAddress = Number(address); // --> 13 (number dataType)
console.log(numberAddress);


//----------Casting number to boolean----------
// case1
let randomNumber = 550;
let boolean = Boolean(randomNumber);
console.log(boolean);// --> True

//case 2
randomNumber = -550;
boolean = Boolean(randomNumber);
console.log(boolean);// --> True

//case 3
randomNumber = null;
boolean = Boolean(randomNumber);
console.log(boolean);// --> False

//case 4
randomNumber = 0;
boolean = Boolean(randomNumber);
console.log(boolean);// --> False
