setTimeout(() => {
    console.log("do something")
}, 4000)

/* error handling */
/* expection handling */

try {
    let firstName = "ram"
    let lastName = "bdr"
    let fullName = firstName + lastName
    console.log(fullName)
} catch (err) {
    console.log(err.message)
}

console.log("task-1")
console.log("task-2")
console.log("task-3")

/* Promise 
    - pending
    - resolved
    - reject
*/

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("server error")

        // resolve({
        //     data: {
        //         name: "ram",
        //         email: "ram@gmail.com",
        //     },
        // })
    }, 2000)
})

promise
    .then((respose) => {
        console.log("respose", respose)
    })
    .catch((err) => {
        console.log("err", err)
    })

console.log(promise)
