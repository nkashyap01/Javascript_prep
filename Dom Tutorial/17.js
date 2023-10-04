//keypress event
//mouseover event

const body=document.body;
// body.addEventListener("keypress",(e)=>{
//     console.log(e.key);
// });

const mainButton=document.querySelector(".btn-headline");
mainButton.addEventListener("mouseover",()=>{
    console.log("mouseover even occured");
});

 
mainButton.addEventListener("mouseleave",()=>{
    console.log("mouseleave even occured");
});