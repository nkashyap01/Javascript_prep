//new keyword

function createUser(firstName,age){
    this.firstName=firstName;
    this.age=age;
}

const user1=new createUser("Neha",22);
console.log(user1);