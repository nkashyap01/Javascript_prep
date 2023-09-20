//for in loop in array

const fruits=["apple","mango" , "grapes" ,"fruit4"]
const fruits2=[];
for(let index in fruits) {
    //for finding index
    //console.log(index);
//for finding element

    //console.log(fruits[index]);

   fruits2.push(fruits[index].toUpperCase());

}

console.log(fruits2);
