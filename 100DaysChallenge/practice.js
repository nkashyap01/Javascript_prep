// var arr = [1, 2, 3, 4];
// const ans = arr.filter((val) => {
//   if (val > 3) {
//     return val;
//   }
// });
// console.log(ans);

var arr = [1, 2, 3, 4];
const num = arr.map((val) => {
  if (val > 3) {
    return val;
  }
});
console.log(num);

const arr2 = [12,13,12,15];
const num2 = arr2.find((val)=>{
  if(val==12) {
    return val;
  }
});
console.log(num2);
