//array push pop
let fruits=["apple","mango","grapes"];

console.log(fruits);
fruits.push("banana"); 
console.log(fruits); 
//for adding elements in first
fruits.unshift("guava");
console.log(fruits);

//for removing element at first
let removedFruit=fruits.shift();
console.log(fruits);
console.log("removed fruit is ",removedFruit);