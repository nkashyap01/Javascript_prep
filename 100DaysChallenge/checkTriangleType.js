// write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: equilateral, isosceles or scalene


function checkTriangleType(a,b,c) {
    if(a>0&&b>0&&c>0){
        if(a==b && b==c){
            console.log("equilateral triangle");
        }
        else if(a==b || b==c ||c==a){
            console.log("iscosceles triangle");
        }
        else {
            console.log("scalene trianlge");
        }
    }
    else{
        console.log("triangle is not valid");
    }

}

checkTriangleType(5,5,5);
checkTriangleType(3,4,6);
checkTriangleType(4,5,5);
checkTriangleType(2,-1,-1);
