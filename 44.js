//functions

function happyBirthday(){
    console.log("happy birthday to you");
}
happyBirthday();

function twoPlusFour(){
    console.log(2+4);
}

twoPlusFour();

function diff(){
    return 4-2;
}

console.log(diff());


function mul(number1,number2){
    return number1*number2;
}

const returnValue=mul(4,5);
console.log(returnValue);


//function to check even or odd

function isEven(number){
    if(number % 2==0) {
        return true;
    }

    return false;
}

console.log(isEven(2));


//function to return first character of string

function firstChar(abc){
    return abc[0];
}

console.log(firstChar("def"));


//index of target if target present in array

function findTarget(array, target){
    for(let i=0;i<array.length;i++){
        if(array[i]==target){
            return i;
        }
    }
    return -1;
}

const myArray=[1,2,10,3,4]
const ans=findTarget(myArray,10);
console.log(ans);