// lexical scope

function myApp() {
    const myVar="value1";
    const myvar2="value2";
    function myFunc() { 
        const myVar="value59";
        console.log("inside myFunc", myVar);
    }
        const myFunc2=function(){
            console.log("inside myfunc2",myvar2);
        }
        const myfunc3=()=>{}
        console.log(myVar);
        myFunc();
        myFunc2();
    
}
myApp();