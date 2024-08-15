import { useState } from "react"

/* 
    function useState(initialValue){
        // codes
        return [initialValue,mutatorFuction]
    } 
*/

export default function Counter() {
    let value = 10
    const [countValue, setCountValue] = useState(111) // array destructuring

   function increment(){
        console.log("incrment")
        value = value + 1
        // console.log("value",value);
        // console.log({ value: value })
        console.log({ value })
        // countValue= countValue + 1 //we cant change state variable directly
        setCountValue(countValue+1)
   }

   const decrement = () =>{
        console.log("decrement");
        // countValue = countValue -1
        setCountValue(countValue -1)
   }

    console.log("counter-render")
    return (
        <>
            <h1>normal counter variable : {value}</h1>
            <h1>satae counter variable : {countValue}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </>
    )
}
