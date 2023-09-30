//call function

const user1= {
    firstName:"Neha",
    age:22,
    about:function() {
        console.log(this.firstName, this.age);
    }
}

const user2={
    firstName:"muskan",
    age:20,
}
user1.about.call(user2);