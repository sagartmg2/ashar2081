let users = ["sita", "hari", "ram", "shyam", "abc", "ijk", "xyz"]

/* 
    in index 0 user is ram
    in index 1 user is shyam
    in index 2 user is hari
    in index 3 user is sita
*/

/* 
console.log(`in index 0 user is ${users[0]}`);
console.log(`in index 1 user is ${users[1]}`);
console.log(`in index 2 user is ${users[2]}`);
console.log(`in index 3 user is ${users[3]}`); */

// printUser(0)
// printUser(1)
// printUser(2)
// printUser(3)
// printUser(4)
// printUser(5)
// printUser(6)

/* loop
    - to perform repetitive task

    for loop
    - when we know exact number of iterations


    for( <startingPoint>;<condition>;<mutator>){
        // do some repetitive task
    }

*/

// for (let number = 0; number < 3; number++ ) {
//     console.log(number)
// }

// for (let number = 0; number <= 4; number++ ) {
//     console.log(number+1)
// }

users = ["sita", "hari", "ram", "shyam", "abc", "ijk", "xyz"]

for (let index = 0; index <= users.length - 1; index++) {
    console.log(`in index ${index} user is ${users[index]}`)
}

console.log("end of loop")
