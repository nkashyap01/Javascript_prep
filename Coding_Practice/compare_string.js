// Javascript program to compare two strings

const string1 = "Hello javascaript";
const string2 = "Hello JAVASCRIPT";

if (string1.toUpperCase === string2.toUpperCase) {
  console.log("The string is same");
} else {
  console.log("The string is not same");
}

if (string1 === string2) {
  console.log("The string is same");
} else {
  console.log("The string is not same");
}
