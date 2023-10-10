//object Destructuring

const band={ 
    bandName:"led Zepplin",
    famousSong:"stairway to heaven",
    year:1968,
    anotherFamousSong:"kashmir"
};
//it is norwal way
// const bandName=band.bandName;
// const famousSong=band.famousSong;
// console.log(bandName,famousSong);


//now let's see another way
// const{bandName,famousSong}=band;
// console.log(bandName);

// now change varaible name


let {bandName:var1, famousSong:var2, ...restProps}=band;
console.log(var1);

console.log(restProps);