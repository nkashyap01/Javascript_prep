//new keyword

function createUser(firstName,age){
    this.firstName=firstName;
    this.age=age;
}

const user1=new createUser("Nhea",22);
console.log(user1);