// //block scope vs function scope

// //let and const is block scope
// //var is functin scope

// {
//     let firstName="neha"
//     console.log(firstName);
// }

// {
//     var firstName="Muskan";
//     console.log("Muskan");
// }

// //let firstName="priti";
// console.log(firstName);

// function myApp(){
//     if(true) {
//         let firstName="Neha";
//         console.log(firstName);
//     }
     
// }

// myApp();

function myApp(){
    if(true) {
        var firstName="Neha";
        console.log(firstName);
    }
    if(true){
        console.log(firstName);
    }
    console.log(firstName);
     
}

myApp();