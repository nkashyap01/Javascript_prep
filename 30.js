//for loop in array

let fruits=["apple","mango","grapes", "banana"];
// console.log(fruits.length);
// console.log(fruits[2]);
// for(let i=0;i<=fruits.length-1;i++)
// {
//     console.log(i);
//     console.log(fruits[i].toUpperCase());
// }

let fruits2=[];
for(let i=0;i<fruits.length;i++){
    fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);