//bind function

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
const func= user1.about.bind(user1,"guitar","moazrt");
func()