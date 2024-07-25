/* 

    arthematic operators
    comparision operators
        > 
        < 
        >=
        <=
        == // equality operator
*/

let user = {
    name: "ram",
    email: "ram@ram.com",
    password: "ram-password",
}

function checkPassword(email, password) {
    if (user.email == email && user.password == password) {
        console.log("user logged in ")
    } else {
        console.log("invalid credientails ")
    }
}

checkPassword("ram@ram.com", "ram-password") // user logged in
checkPassword("ram@ram.com", "ram-wrong-password") // Invalid Credentails
checkPassword("shayam@shyam.com", "ram-password") // Invalid Credentails