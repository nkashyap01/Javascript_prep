// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

const createHelloWorld = function() {
    return () => {
        return "Hello world";
    }
}

console.log(createHelloWorld()());  

 