//key value pair

// const person =new Map();
// person.set('firstName','Neha');
// person.set(1,'one');
// person.set('age',22);
// console.log(person);
// console.log(person.get('firstName'));
// console.log(person.get(1));


// const person=new Map([['firstName','Neha'],['age',20]]);
// console.log(person);


const person1={
    id:1,
    firstName:"Neha"
}

const extraInfo=new Map();
extraInfo.set(person1,{age:8, gender:"female"});
//console.log(userInfo);

console.log(person1.id);
console.log(extraInfo.get(person1));

console.log(extraInfo.get(person1).gender);



