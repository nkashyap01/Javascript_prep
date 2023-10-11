//callback

function myFunc(callback){
    console.log("function is doing some task 1");
    callback();
}
 
myFunc(()=>{
    console.log("function is doing task 2");
});
 