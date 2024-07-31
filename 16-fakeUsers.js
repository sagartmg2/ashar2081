let names = ["ram", "shyam", "hari"]
let fakeUsers = []

let ages = [10, 20, 30, 40, 50]
let religions = ["hindu", "buddhist", "christian", "muslim", "others"]
let ethnicities = ["bhramin", "chhetri", "newar", "others"]

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
/* let randomAgeIndex = Math.floor(Math.random() * ages.length)
let randomReligionIndex = Math.floor(Math.random() * religions.length)
let randomEthnicityIndex = Math.floor(Math.random() * ethnicities.length)

let user = {
    name: "ram",
    age: ages[randomAgeIndex],
    religion: religions[randomReligionIndex],
    ethnicity : ethnicities[randomEthnicityIndex]
} */

names = ["ram", "shyam", "hari"]
    
const getRandomValue = (arr) =>{
    let randomIndex = Math.floor(Math.random() * arr.length)
    let randomElement = arr[randomIndex]
    return randomElement
}

function getRandomValueOld(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length)
    let randomElement = arr[randomIndex]
    return randomElement
}

for (let index = 0; index < names.length; index++) {
    let randomAge = getRandomValue(ages)

    let user = {
        name: names[index],
        age: randomAge,
        religion: getRandomValue(religions),
        ethnicity: getRandomValue(ethnicities),
    }
    fakeUsers.push(user)
}

console.log(fakeUsers)


names = ["ram", "shyam", "hari"]

names.forEach((element)=>{
    console.log(element);
})

/* 
    .forEach()
    .map()
    .filter()
    .find()
*/