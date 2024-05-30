// write a function to convert a string to camelCase and snake Case


const toCamelCase = (str) => {
    str = str.trim().split("");
    str = str.map((curElem,index)=>{
        if(index===0){
            return curElem.toLowerCase();
        } else {
            return curElem.charAt(0).toUpperCase() + curElem.slice(1).toLowerCase();
        }
    })
    console.log(str);
    return str.join("");
}

 

console.log(toCamelCase("hello world javascript"));

console.log(toCamelCase("Next Js"));