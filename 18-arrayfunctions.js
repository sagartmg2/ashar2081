let users = [
    {
        name: "ram",
        age: 19,
    },
    {
        name: "shyam",
        age: 19,
    },
    {
        name: "sita",
        age: 9,
    },
    {
        name: "hari",
        age: 91,
    },
    {
        name: "gita",
        age: 20,
    },
]

let adults = []

// users.forEach((user) => {
//     if (user.age > 18) {
//         adults.push(user)
//     }
// })

adults = users.filter((user) => {
    if (user.age > 18) {
        return true
    }
})

console.log(adults)

/* 
    filter
        filters out data from existing array and creates a new array

    map  // must have in react 
        convert each element of array and creates a new array

*/
let numbers = [1, 2, 3, 4, 5]
let dobuledNumbers = []
dobuledNumbers = numbers.map((number) => {
    return number * 2
})

console.log(dobuledNumbers)

let persons = ["ram", "hari", "shya"]
let fakeUsers = persons.map((name) => {
    return {
        name: name,
        email: name + "@gmail.com",
    }
})

console.log(fakeUsers)
