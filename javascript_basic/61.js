//call function

const user1= {
    firstName:"Neha",
    age:22,
    about:function(hobby,favMusician) {
        console.log(this.firstName, this.age,hobby,favMusician);
    }
}

const user2={
    firstName:"muskan",
    age:20,
}
 user1.about.call(user2,"guitar","moazrt");