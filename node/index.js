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
bcrypt.hash("12345678", 10, function(err, hash) {
    console.log(hash);
});

bcrypt.compare("123456788", "$2b$10$Ev5Xpi6raZ92FpKDls1fpO1azy68yw1jixUKeD0Qw48jK39ye0vlG", function(err, result) {
    // result == false
    console.log(result);
})

const auth = require("./auth")
// const auth = require("../")
// const auth = require("../../")


auth.signup("ram@gmail.com", "password")
auth.signup("shyam@gmail.com", "password")
auth.signup("hari@gmail.com", "password")

auth.login()
auth.login()



/* 
    common js  vs es module


    const axios = require("axios")
    import axios from "axios"


    module.exports = signup // default export 
    module.exports = {
        "login": login,   // named export
        "signup": signup
    }

    const auth = require("./auth.js")
    auth.login()
    auth.signup()


    export default signup // default export
    export const signup
    export const login  // named export 


    import {signup,login} from "./auth"

*/