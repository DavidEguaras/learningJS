// anonymous functions
let func = function (parametroUno){
    return parametroUno + ":)";
}

// anonymous functions in arguments (the expected function is a callback)
// example 1
function getRecord(name, year, callback){
    let  record = callback (name, year);
    return record;
}

let formatWithPipe = function(name, year){
    return name +" | " + year;
}

let formatWithHypen = function (name, year){
    return name + " - " + year;
}

getRecord("David", 2023, formatWithPipe);

//example 2
function getRecord(name, year, callback){
    let record = callback(name, year);
    return record;
}

//callback declared in the invokation
getRecord("David", 2023, function(name, year){
    return name + " | " + year;
});