let fruits = ["kiwi", "app", "orange"]
console.log("before", fruits[1])
fruits[1] = "apple"
console.log("after", fruits[1])

let fruit1 = {
  name: "kiwi",
  scientificName: "k-wrong-xyz",
  nepalPrice: 100,
  usPrice: 1,
  auPrice: 1.5,
  cadPrice: 2.5,
  ukPrice: 0.8,
}

/* another way  */

fruit1 = {
  name: "kiwi",
  scientificName: "k-wrong-xyz",
  price: {
    nepal: 100,
    us: 1,
    au: 1.5,
    cad: 2.5,
    uk: 0.8,
  },
}

/* another way  */
fruit1 = {
  name: "kiwi",
  scientificName: "k-wrong-xyz",
  prices: [
    {
      country: "nepal",
      price: 1, // change this to 100
    },
    {
      country: "us",
      price: 1,
    },
    {
      country: "au",
      price: 1.5,
    },
  ],
}


console.log(fruit1.prices[0].price)
fruit1.prices[0].price = 100
console.log(fruit1.prices[0].price)

// console.log("befor", fruit1.scientificName)
// fruit1.scientificName = "k-right-xyz"
// console.log("after", fruit1.scientificName)

let backendResponse = {
  msg: "success",
  result: {
    total: 2,
    data: [
      {
        name: "kiwi",
        scientificName: "k-wrong-xyz",
        prices: [
          {
            country: "us",
            price: 1,
          },
          {
            country: "nepal",
            price: 1, // change this to 100
          },
          /* TODO : add detal of canada too */
        ],
      },
      {
        name: "orange",
        scientificName: "k-xyz",
        prices: [
          {
            country: "us",
            price: 2,
          },
          {
            country: "nepal",
            price: 200,
          },
          {
            country: "cad",
            price: 200,
          },
        ],
      },
    ],
  },
}

/* code */
console.log(backendResponse);



/* write a program to calculate sum of 2 digits

  1 + 2 = 3
  5 + 4 = 9
  5 + 6 = 11
  5 + 40 = 45

*/


console.log("1 + 2 = 3");


