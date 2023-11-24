function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var minValue = 1;
var maxValue = 100;
var number = random(minValue, maxValue);

console.log("Random Number: " + number);
