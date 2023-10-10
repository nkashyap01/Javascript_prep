// //use const for creating array

// here it is showing error because we can't change value of const

// const pi=3.14;
// pi=12;
// console.log(pi);


const fruits=["apple", "mango"];
// here if we write
// fruits =["grapes", "pineapple"]
// it will give an error.
fruits.push("banana");
console.log(fruits);



let fruit=["apple", "mango"];
// here if we write
fruit =["grapes", "pineapple"]
// it will work.
fruit.push("banana");
console.log(fruit);
 