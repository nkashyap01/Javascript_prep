function printFullName(firstName,lastName){
    function printName(){
        console.log(firstName,lastName);
    }
    return printName;
}

const ans=printFullName("Neha", "Kumari");
ans();