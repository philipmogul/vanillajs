// Uses of console.log()

//console.log("Hello World!");

/*
console.log() function prints Hello, World! to the console and returns undefined
This is because console.log() has no explicit return value.
*/

/*
1. Logging variables
console.log() can be used to log variables of any kind; not only strings. Just pass in the variable that you want to
be displayed in the console
var foo = "bar";
console.log(foo);

If you want to log two or more values, simply separate them with commas. Spaces will be automatically added
between each argument during concatenation:
*/

// var thisVar = 'first value';
// var thatVar = 'second value';
// console.log("thisVar:", thisVar, "and thatVar:", thatVar);

/*
2. Placeholders
You can use console.log() in combination with placeholders:
*/
// var greet = "Philip", who = "Mumo, The Great FullStack Engineer!";
// console.log("%s, %s!", greet, who);

/*
3. Logging Objects
Below we see the result of logging an object. 
This is often useful for logging JSON responses from API calls.
*/
// console.log({
// 'Email': '',
// 'Groups': {},
// 'Id': 33,
// 'IsHiddenInUI': false,
// 'IsSiteAdmin': false,
// 'LoginName': 'i:0#.w|virtualdomain\\user2',
// 'PrincipalType': 1,
// 'Title': 'user2'
// });

/*
4. Logging HTML elements
You have the ability to log any element which exists within the DOM. In this case we log the body 
element:
*/
console.log(document.body);