//object destructing

const person={
    firstName:"Neha",
    gender:"female",


}
// function printDetails(obj) {
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }
// printDetails(person);

function printDetails(firstName, gender) {
    console.log(firstName);
    console.log(gender);
}
printDetails(person);