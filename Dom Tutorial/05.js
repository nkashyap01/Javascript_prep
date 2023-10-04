//get multiple elments using getElements by TagName

let navItems=document.getElementsByTagName("a");
console.log(navItems);
 navItems=Array.from(navItems);
 console.log(Array.isArray(navItems));
 navItems.forEach((navItem)=>{
    
    navItem.style.backgroundColor="#fff";
    navItem.style.color="green";
})