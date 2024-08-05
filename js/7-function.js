/* 
    let number1 = 100
    let number2 = 2
    let sum = number1 + number2
    console.log(number1, "+", number2, "=", number1 + number2)

    number1 = 50
    number2 = 50
    sum = number1 + number2
    console.log(number1, "+", number2, "=", number1 + number2)

    number1 = 150
    number2 = 50
    sum = number1 + number2
    console.log(number1, "+", number2, "=", number1 + number2)
 */

/* 
    console.log("2 * 2  = 4");
    console.log("2 * 5  = 10");
    console.log("2 * 6  = 12"); 
*/

function double(input) {
  //   console.log("2 * ", input, "=", input * 2)
  //   console.log("the double of", input, " is ", input * 2)
  console.log(`2 x ${input} = ${input * 2}`)
}

double(2) // 2 here is called an argument
double(5) // 5 here is called an argument
double(12)

function calculateSum(firstInput, secondInput) {
  let sum = firstInput + secondInput
  console.log(firstInput, "+", secondInput, "=", sum)
  //   console.log(`the sum of ${firstInput} and ${secondInput} is ${sum}`)
}

calculateSum(100, 2)
calculateSum(4, 5)
calculateSum(10, 5)

// arrow function
// calculateSum(200,300,400)
// calculateSum(200,300,400,500)
// calculateSum(200,300,400,500,6000)
//  rest operator

let fruitsData = [
  {
    name: "kiwi",
    scientificName: "k-wrong-xyz",
    price: 100,
  },
  {
    name: "orange",
    scientificName: "k-xyz",
    price: 50,
  },
  {
    name: "apple",
    scientificName: "k-xyz",
    price: 50,
  },
]

/* console.log("the price of ", fruitsData[0].name, " is ", fruitsData[0].price)
console.log("the price of ", fruitsData[1].name, " is ", fruitsData[1].price)
console.log("the price of ", fruitsData[2].name, " is ", fruitsData[2].price)
 */

function printFruitPrice(index) {
  // console.log("the price of ", fruitsData[index].name,`(${fruitsData[index].scientificName})`,  " is ", fruitsData[index].price)
  console.log(
    `the price of ${fruitsData[index].name} (${fruitsData[index].scientificName}) is ${fruitsData[index].price}`
  )
}

/*  printFruitPrice(0)
printFruitPrice(1)
printFruitPrice(2) */

/* research: object destructuring */

function printFruitRate1(fruit) {
  // fruit ={ name,price,sname}
  console.log(
    `the price of ${fruit.name} (${fruit.scientificName}) is ${fruit.price}`
  )
}

function printFruitRate(fruit) {
  // here, fruit = { name, price, scientificName}
  let { name, scientificName, price } = fruit // object destructuring
  console.log(`the price of ${name} (${scientificName}) is ${price}`)
}

// printFruitRate("kiwi",100)
// printFruitRate(fruitsData[0].name,fruitsData[0].price)

printFruitRate(fruitsData[0])
printFruitRate(fruitsData[1])
printFruitRate(fruitsData[2])

/* research 
        scope
            global
            block
        return in function
   */
