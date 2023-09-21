// objects

//arrays are good but not sufficient
//for real world data
//objects store key value pairs
//objects don't have index
//how to create objects
//how to access data from objects
//how to add key value pair to objects

const person={ name:"Neha", age:22,
hobbies:["guitar","sleeping","listening music"]};
console.log(person);

console.log(person.name);
console.log(person.age);
console.log(person.hobbies);

person.gender="male";
console.log(person);
console.log(person["name"]);

//how to add key value pair to objects
person["person"]="male";
console.log(person);