let isActive = "1";
console.log(typeof isActive);//<--string

isActive = Boolean(isActive);
console.log(typeof isActive);//<--boolean

/*Note
Not all casting types are done the same way in JS
In case of casting to number, boolean, string
dataTypeToCast(...)

-null
variable = null

-undefined (this one is very uncommon)
variable = undefined
*/

// Datatypechange
console.log(typeof isActive); //<-- string
isActive = "true";
console.log(typeof isActive); //<-- boolean
isActive = 1;
console.log(typeof isActive); //<-- number

