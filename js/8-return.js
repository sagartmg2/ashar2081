let user = {
  name: "Ram",
  work: function () {
    console.log("ram is working")
  },
}

user.work()

console.log(typeof 12)
console.log(typeof true)

function sum(firstInput, secondInput) {
  let result = firstInput + secondInput
  return result
}


let result
function double(input) { // let input = 20
  let output = input * 2
  return output
}

console.log("dobule of 20", double(20))

console.log(result);

function triple(input) {
  let result = input * 3
  return result
}

console.log("triple of 20", triple(20))
console.log(sum(100, 10))

let output = sum(4, 5)
console.log("output", output)

let myOutput = sum(double(10), double(20))
    
// let myOutput = sum( 20 , 40)

/* 

    let myOutput = sum( double(10) , double(20))  //  sum( 20 , 40 )
    // expected myOutput: 60


*/
