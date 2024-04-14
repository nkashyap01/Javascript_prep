// const numbers = [2, 4, 6, 78, 98, 12, 76,33,36];

// const result = numbers.filter((value) => {
//   if (value % 3 == 0) {
//    const number=value;
//     if(number>0 && number<30)
//     return number;
    
//   }

// });
// console.log(result);

// const numbers = [2,[6,8,9,[10,11,12]], 4, 6, 78, 98, 12, 76, 33, 36];
 

// const [first,[a,b,c,[d,e,f]],third]=numbers;
 
// console.log(first);
// console.log(d);

const student = {
    name:'neha',
    course:'mca',
    hostel:{
        hostelName:'srm',
        room:'101',
        roommate:{
            state:'Ranchi',
            course:'mca'

        }

    }
}

const {room} = student.hostel;
const {state}=student.hostel.roommate;

console.log(room);
console.log(state);
 