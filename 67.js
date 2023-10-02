function func(){
    counter=0;
     return function(){
        if(counter<1){
        console.log("Hii you called me")
    counter++;}
    else{

    console.log("I am already called")

    }
    }
   
}
const myfunc=func();
myfunc();
myfunc();