
//We can pass to a function AS MUCH parameters as we need, but it is STRONGLY recommended to NOT pass more than three 
//  for traceability and readability reasons

/*
function getRecord (name, year){
    let record = name + " - " + year;
    return record;
}

let result = getRecord("David", 2023); --> when we pass a value to a function, this value is considered an argument
console.log(result);

*/

//Initialized parameters with default value in function, in case this parameters don't receive a value they will get the default value
function getRecord (name = "David", year = 2023){
    let result = name + " - " + year;
    return result;
}

result = getRecord("Daniel"); //-->argument
console.log(result);


//CONCLUSION
/*
    -A function can declare parameters
    -The parameters of a function can be pre-initialized
    -When we invoke a function the values that are received in the parameters are considered arguments
    -Structure and Order is key (a lot)
    -Parameters are used to work with external values inside a function

*/



