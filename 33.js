//for loop in an array

// const fruits=["apple", "mango", "grapes"];

// for(let fruit of fruits){
//     console.log(fruit);
// }


const fruits=["apple", "mango", "grapes", "fruits4"];
const fruits2=[];
for(let fruit of fruits) {
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);