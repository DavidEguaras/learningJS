/*
function getRecord(name, year){
    let record = name + " - " + year;
    return record;
}
let result = getRecord("David", 2023);
*/


/* 
let result = function(name, year) {
    let record = name + " - " + year;
    return record;
};
console.log(result("David", 2022));
*/



/*
let result = function(name, year, formatter) {
    let record = formatter(name, year);
    return record;
};

let formatter = function(name, year){
    return name + " - " + year;
}   
console.log(result("David", 2023, formatter));
*/


(function(name, year){
    console.log(name, year);
})("David", 2022);