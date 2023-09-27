//arrow function

const name=()=>{
    console.log("Neha");
}
name();

//for returning in one line

const isEven = number => number%2===0;
console.log(isEven(4));

const firstChar=anyString=>anyString[0];

console.log(firstChar("Neha"));