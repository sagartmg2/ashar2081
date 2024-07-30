let countries = [
    {
        code: "af",
        name: "Afghanistan",
        path: "afghanistan",
    },
    {
        code: "nr",
        name: "Nauru",
        path: "nauru",
    },
    {
        code: "np",
        name: "Nepal",
        path: "nepal",
    },
    {
        code: "nl",
        name: "Netherlands",
        path: "netherlands",
    },
    {
        code: "an",
        name: "Netherlands Antilles",
        path: "netherlandsantilles",
    },
]

/* 
    find the cods of a specific country 

    TODO: 
    create a function findCountryCode 
    - if i pass arguement "Nepal" to the function it should return me np
    - if i pass arguement "zimbabwe" to the function it should return me zw

*/

/* 

    array functions
    
*/

function findCountryCode(countryName) {
    for (let index = 0; index < countries.length; index++) {
        let element = countries[index]
        countryName = countryName.toLowerCase().trim()
        if (element.name.toLowerCase() == countryName) {
            console.log(`country code for ${countryName} `, element.code)
            return
        }
    }
    console.log("invalid")
}

findCountryCode("Nepal")
findCountryCode("nepal")
findCountryCode("  nepal   ")

/* then research on */
// arrow function
// forEach function

function double1(input) {
    return input * 2
}

const double = (input) => {
    return input * 2
}

console.log(double(12))

function sum1(firstInput, secondINput) {
    return firstInput + secondINput
}

const sum = (firstInput, secondINput) => {
    return firstInput + secondINput
}

console.log(sum(20, 10))

let names = ["ram", "shyam", "hari"]
let fakeUsers = []

let ages = [10, 20, 30, 40, 50]
let religions = ["hindu","buddhist","christian","muslim","others"]
let ethnicities = ["bhramin","chhetri","newar","others"]

/* 
    Math.random()   //  0 to 1  
    Math.random() * 5   //  0 to 5 // never prints 5 
    Math.floor()   // 1.2  => 1
*/


/* 
    [
        {
            name:"ram"
            age:
            religion:
            ethnicity:
        },
        {
            name:"shyam"
            age:
            religion:
            ethnicity:
        },
        {
            name:"hari"
            age:
            religion:
            ethnicity:
        },
    ]

*/


/* first do for single user */
let user = {
    name:"ram"
}