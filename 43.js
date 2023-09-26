//nested destructing

const users=[
    {userId:1,firstName:'Neha',gender:'female'},
    {userId:2,firstName:'Neha',gender:'female'},
    {userId:3,firstName:'Neha',gender:'female'},

]

// const [{firstName}, , {gender}]=users;
//  console.log(firstName);
//  console.log(gender);

const [{firstName:user1firstName}, , {gender:user3gender}]=users;
 console.log(user1firstName);
 console.log(user3gender);