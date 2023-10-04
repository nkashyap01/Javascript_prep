//intro to events

const btn=document.querySelector(".btn-headline");
// btn.onclick=function(){
//     console.log("you clicked me")
// }

//another method to event

btn.addEventListener("click",function(){
    console.log("you clicked me");
});