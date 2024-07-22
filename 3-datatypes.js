let color = "red";
let age = 12;
let price = 100.5;
let verifiedStatus = true;

console.log("before", age);
age = 20;
console.log("after", age);

const ROLE = "customer";
// ROLE = "admin" // wrong: cannot change value of const variable

/* 
    data types
        1. text    - string
        2. number - integer or float
        3. true/false - boolean
        4. undefined  // js only
        5. null


    Collections
        6.array
*/

let brand;
console.log(brand); // undefined

let personName; // declartion
personName = "ram"; // updating value // re-initialziation

let userName = "ram";

let data = null;

/* 
    codes to fetch data
        if successull
            data = apiData
 */

let md = "medium";
md = "large";
md = "small"
console.log("md",md);
let size = md;

console.log("size", size);

// let user = 'ram',"shyam"

let user = "ram, shyam, hari, sita ";
console.log(user);

let user1 = "ram";
let user2 = "shyam";
let user3 = "hari";
let user4 = "sita";
console.log(user1, user2, user3);

/* 
    Array
        - collection of multiple values / elements
        - usually , it is collection of similar values/data types
        - INDEX
            array always starts with index 0    

    syntax
        let <arryName> = [ <element>, <element>, <element> ]

        index                 0           1          2

*/

let users = ["ram", "shyam", "hari", "sita"];
console.log(users);

/* TODO: convert the following to array */


let userAciveStatuses = [true, false, false, true];

let courses = ["mern", "qa", "python"];

// let evenNumers = [2, 4, 6, 8,"ten"]; // wrong
let evenNumers = [2, 4, 6, 8, 10]; // right
console.log(evenNumers);

let oddNumbers = [1, 3, 5, "seven"];

/* TODO: change seven to 7 */
// code here

console.log(oddNumbers);
console.log("before",oddNumbers[3]);
oddNumbers[3] = 7
console.log("after",oddNumbers[3]);

/* TODO: add 9 at the end of oddNumbers */


let color1 = "red";
let color2 = "blue";
let color3 = "green";

let colors = ["red", "blue", "green"];
/* TODO: 
    we need hex value and rgb value of each color
*/

console.log(colors);

let persons = ["ram", "shyam", "hari", "sita"];
/* TODO: 
    we need  phone number for each person
*/
console.log(persons);

