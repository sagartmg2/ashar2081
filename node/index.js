console.log("js connected")

/* 
    node global objects
        __filename
        __dirname
        require
        module
    
    modules
        - core module
        - third party module
        - local module
*/

console.log(__dirname)
console.log(__filename)

const fs = require("fs")
fs.writeFileSync("cutsom.txt", "hello world")
const path = require("path")

const http = require("http")
http.createServer()

const bcrypt = require('bcrypt');
bcrypt.hash("myPlaintextPassword", 10, function(err, hash) {
    console.log(hash);
});

let dbUsers = []
const signup = (email, password) => {
    dbUsers.push({
        email:email,
        password:"123$@!#$ADasdfSFASDF!@#$!@#$!@#$@#$!"
    })
}

signup("ram@gmail.com", "password")
signup("shyam@gmail.com", "password")
signup("hari@gmail.com", "password")

console.log(dbUsers);
