//how to iterate objects

const person={
    name:"neha",
    age:22,
    "person hobbies":["guitar","sleeping","listening"]

}

//for in loop
//object.keys

// for(let key in person){
//     console.log(key);
//     console.log(person[key]);
// }

// for(let key in person){

//     console.log(key,":", person[key]);

// }

 
 for(let key of Object.keys(person)){
    console.log(person[key]);
 }