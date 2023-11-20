//callback, callback hell, pyramid of doom

const heading1 = document.querySelector(".heading1");

setTimeout(() => {
  heading1.textContent = "one";
  heading1.style.color = "red";
  heading1.style.color = "blue";
}, 1000);
