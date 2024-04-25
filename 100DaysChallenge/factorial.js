function calculateFactorial(number) {
    
    if (number < 0) {
        return "Factorial is not defined for negative numbers.";
    }

     1
    if (number === 0) {
        return 1;
    }

 
    return number * calculateFactorial(number - 1);
}


const num = 5;
console.log(`The factorial of ${num} is:`, calculateFactorial(num));
