const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"]
let db_users = []

/* 
    hint 
    let users = []
    users[0] = "user 0"   // create new user and update original users array
    users[1] = "user 1 "  // create new user and update original users array
*/

/* 
CODE HERE: 
TODO: 
    From the above array create an new array of users with email and password 

    OUTPUT should be like following
    [
        { name: 'Aarav', email: 'aarav@gmail.com', password: 'aarav0' },
        { name: 'Aarya', email: 'aarya@gmail.com', password: 'aarya1' },
        { name: 'Aasha', email: 'aasha@gmail.com', password: 'aasha2' },
        { name: 'Anisha', email: 'anisha@gmail.com', password: 'anisha3' },
    ] 

*/

// console.log(db_users);

let numbers = [1, 2, 3, 4, 5]
let doubledNumbers = [] // [2,4,6,8,10]

/*
        doubledNumbers[0] = numbers[0] * 2
        doubledNumbers[1] = numbers[1] * 2
        doubledNumbers[2] = 6
        doubledNumbers[3] = 8
        doubledNumbers[4] = 10
 */

for (let index = 0; index < numbers.length; index++) {
    // doubledNumbers[index] = numbers[index] * 2
    doubledNumbers.push(numbers[index] * 2)
}

console.log("doubledNumbers", doubledNumbers)
