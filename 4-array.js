/* 
    Data types
        string
        integer / float
        boolean
        undefined
        null


    Collections
        array

*/

let color = "red";

console.log("before", color);
color = "green";
console.log("after", color);

let age = 12;
let price = 10000;
console.log(price);

let course1 = "mern";
let course2 = "python";
let course3 = "qa";

/* ....... other courses */
// let courses ="mern, python, qa"

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

let courses = ["mern", "python", "qa", "django", "AI", "ml"];

let numbers = [1, 2, 3, 4, "five"]; // wrong : do not mix data types

console.log("before", numbers[4]);
numbers[4] = 5;
console.log("after", numbers[4]);

// let users = ["ram", 9834524, "hari", 99234234, "sita", 998234234];
// let users = [
//   ["ram", "hari", "sita"],
//   [9234234, 923423, 9234234],
// ];
// let users = [
//   ["ram", 945234],
//   ["hari", 923445234],
//   ["sita", 953445234],
// ];

let projectorBrand = "acer";
let projectorColor = "white";
let projectorPrice = 50000;

let projectors = ["acer", "white", 50000];

console.log(projectorBrand);
console.log(projectorColor);
console.log(projectorPrice);

/* 
    Object
        - same as real life objects 
        - having some properties

    syntax

    let <objName> = {

        <key> : <value>,
        <property> : <value>,
        <attribute> : <value>
    }
*/

let projector = {
  color: "white",
  price: 50000,
  brand: "acer",
};

console.log(projector);


let brand = "samsung";
/* TODO: we need detail info of brand. */
brand = {
  name: "samsung",
  estd: 1990,
  ceo: "ABC",
};

brand.ceo = "XYZ";

let brands = ["samsung", "lg", "acer"];
brands = [
  {
    name: "samsung",
    ceo: "abc",
  },
  {
    name: "lg",
    ceo: "xyz",
  },
  {
    name: "acer",
    ceo: "ijk",
  },
];

console.log(brand);

// let users = ["ram", "hari", "shya"];

let users = [
  {
    name: "ram",
    age: 10,
    address: {
      permanentAddres: {
        district: "lamjung",
        ward: -1, // change this to 1
        tole: "wrong-tole", // change this to right-tole
      },
      temporaryAddres: {
        district: "kathmandu",
        ward: 10,
        tole: "abc-tole",
      },
    },
  },
  {
    name: "hari",
    age: 20,
  },
  {
    name: "shyam",
    age: 10,
  },
];



let fruits = ["kiwi","app","orange"]
console.log(fruits);












/* code here  */









/* 
    res.data[2].result.nvaigation[0].details
*/
