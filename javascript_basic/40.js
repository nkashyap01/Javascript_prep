//spread operator in array

// const array1=[1,2,3];
// const array2=[5,6,7];

// const newArray=[...array1,...array2];
// console.log(newArray);

// const newArray2=[..."123456"];
// console.log(newArray2);


//spread operator in objects

const obj1={
    key1:"value1",
    key2:"value2",
};

const obj2={
    key1:"valueUnique",
    key3:"value3",
    key4:"value4",
}
// const newObject={...obj1,...obj2};
// console.log(newObject);

const newObject={..."abcdefghi"};
console.log(newObject);