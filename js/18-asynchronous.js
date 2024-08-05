/* synchronous vs asynchronous 

    asynchronous
        - setTimeout
        - promise 

    runs in backgorund
    does not block other following codes 

*/
console.log("task 1")

setTimeout(() =>{
    console.log('show popup -2');
},5000)

console.log("task 2")
console.log("task 3")

for (let index = 0; index < 10; index++) {
    console.log("time comusming task ", index)
}

function doSomething() {
    console.log("do something")
}

console.log("some other simple task ")
doSomething()

const showPoup = () =>{
    console.log('show popup');
}

/* callback function
     a function passed to another function as a parameter
*/

setTimeout(showPoup,4000)



