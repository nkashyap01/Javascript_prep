// duplicate values in an array
const arr = [1, 2, 3, 3, 3, 4, 4, 5, 6];
const result = arr.filter((val, index, array) => {
  return array.indexOf(val) !== index;
});
console.log(arr);
console.log(result);
console.log(result);
