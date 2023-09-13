//nested if else
// winning number 19

//here user take any input in form of string
// let winningNumber=19;
// let userGuess= prompt("Guess a number");
// console.log(typeof userGuess, userGuess);


// if you want to take input in number format add + sign befor prompt or write (int)

let winningNumber=19;
let userGuess= +prompt("Guess a number");
console.log(typeof userGuess, userGuess);

if(userGuess===winningNumber) {
    console.log("your guess is right");
}
else {
     
    if(userGuess<winningNumber){
        console.log("too low!!!");
    }
    else {
        console.log("too high");
    }
}