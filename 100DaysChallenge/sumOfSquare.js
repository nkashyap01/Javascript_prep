// write a function to calculate sum of squares of all elements in an array. for example, given the array [1,2,3], the function should return 14.

// let numbers = [1, 2, 3];
// const sum = numbers.reduce((accum, curr) => {
//   return accum + curr * curr;
// });

// console.log(sum);

// 2nd way

const sumOfSquare = (numbers) => {
  let sum = 0;
  for (let num of numbers) {
    sum = sum + num * num;
  }
  return sum;
};

console.log(sumOfSquare([1, 2, 3]));
