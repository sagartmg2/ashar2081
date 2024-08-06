const signup = (email, password) => {
    console.log("user signed up ");
}


const login = () =>{
    console.log("login");
}

// module.exports = signup  // default export 
// module.exports = login

module.exports = {
    "signup":signup,
    "login":login,
}


