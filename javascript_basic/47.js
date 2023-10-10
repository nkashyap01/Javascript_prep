// hoisting

//it is possible only in function declaration
hello();

function hello(){
    console.log("hello world");
}


//we can't use hoisting in function expression & arrow function

//so it will give an error
hii();
const hii=function(){
    console.log("hello world");
}