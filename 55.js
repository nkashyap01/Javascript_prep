//callback function

// function myFunc(a) {
//     console.log(a);
// }
// myFunc([1,2,3]);


function myFunc2(){
    console.log("inside my func 2")
}

function myFunc(a) {
    a();
}
myFunc(myFunc2);