//important array methods

//map
//reduce
//filter

const numbers=[4,2,3,5];
function myFunc(number, index) {
    console.log(`index is ${index} number is ${number}`);
    // console.log(`${number}*2=${number*2}`);
}

// for(i=0;i<numbers.length;i++) {
//     myFunc(numbers[i],i)

// }

//instead of for we can use for each

numbers.forEach(myFunc);