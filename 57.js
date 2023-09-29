//important array methods

//map
//reduce
//filter

const numbers=[4,2,3,5];
// function myFunc(number, index) {
//     console.log(`index is ${index} number is ${number}`);
//     // console.log(`${number}*2=${number*2}`);
// }

// // for(i=0;i<numbers.length;i++) {
// //     myFunc(numbers[i],i)

// // }

// //instead of for we can use  for each

// numbers.forEach(myFunc);


// numbers.forEach(function(number, index)
// {
//     console.log(`index is ${index} number is ${number}`)
// });


numbers.forEach(function(number, index){
    console.log(number*3, index);
})

const users=[
    {firstName:"Priti",age:23},
    {firstName:"Anu", age:21},
    {
        firstName:"Neha", age:22},
        {firstName:"garima", age:20}
]
// users.forEach(function(user){
//     console.log(user.firstName);
// }
// )

//****instead of for loop we can also use for of loop, it is introduced after for each */

for(let user of users){
    console.log(user.firstName);
}