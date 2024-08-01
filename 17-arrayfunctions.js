let todos = [
    {
        title: "html",
        status: true,
    },
    {
        title: "js",
        status: false,
    },
    {
        title: "css",
        status: true,
    },
    {
        title: "react",
        status: false,
    },
]

let completedTodos = []
let incompleteTodos = []

// for (let index = 0; index < todos.length; index++) {
//     let element = todos[index]
//     if (element.status) {
//         completedTodos.push(element)
//         console.log(`${element.title} is completed`)
//     } else {
//         incompleteTodos.push(element)
//         console.log(`${element.title} is incompleted`)
//     }
// }
/* 
    html is completed
    css is completed
    js is incomplete
*/

todos.forEach((todo) => {
    // if (todo.status) {
    //     console.log(`${todo.title} is completed`)
    // } else {
    //     console.log(`${todo.title} is incompleted`)
    // }
    console.log(`${todo.title} is ${todo.status ? "complted" : "incompleted"}`)
})

/* ternary operator */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/* 
    pseudo code
    loop through each number
    check if even or odd
        if even 
            push to evenNumber array
*/
let oddNumbers = []
let evenNumbers = []

// numbers.forEach((number) => {
//     if (number % 2 == 0) {
//         evenNumbers.push(number)
//     } else {
//         oddNumbers.push(number)
//     }
// })

evenNumbers = numbers.filter((number) => {
    if (number % 2 == 0) {
        return true
    }
})

oddNumbers = numbers.filter((number) => {
    if (number % 2 !== 0) {
        return true
    }
})

console.log(evenNumbers)
console.log(oddNumbers)

/* .map // fake users  */
/* .find country */

let cartItems = [
    {
        name: "ram",
        products: [
            { title: "watch", price: 1000 },
            { title: "mouse", price: 500 }
        ],
    },
    {
        name: "hari",
        products: [
            { title: "watch", price: 1000 },
            { title: "keyboard", price: 1000 },
            { title: "mouse", price: 500 }
        ],
    },
    {
        name: "sita",
        products: [
            { title: "watch-gm", price: 10000 },
        ],
    },
]

/* 
    ram has ordered of rs 1500 
    hari  has ordered of rs 2500 
    sita  has ordered of rs 10000 
*/

