//object inside array

const users=[
    {userId:1,firstName:'Neha',gender:'female'},
    {userId:2,firstName:'Neha',gender:'female'},
    {userId:3,firstName:'Neha',gender:'female'},

]
for(let user of users){
    console.log(user.firstName);
}