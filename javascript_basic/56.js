 //function returing function

 function myfunc() {
    function hello() {
        console.log("hello world");
    }
    return hello;
 }

 const ans=myfunc();
 console.log(ans);
 ans();
