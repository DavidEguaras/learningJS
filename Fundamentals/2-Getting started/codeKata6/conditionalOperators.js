let year = 2023;

//----------Example 1--------------
if(year === "2022"){ //-->Different datatype
    console.log("OK");
}


//----------Example 2--------------
if(year > 2022){
    console.log("OK");
}


//----------Example 3--------------
if(year > 2022 && year < 2024){
    console.log("OK");
}


//----------Example 4--------------
if(year > 2022 || year < 2022){
    console.log("OK");
}


//----------Example 5--------------
if(year > 2022 || year == false){
    console.log("OK");
}

year = false;

if (!year){
    console.log("OK");
}