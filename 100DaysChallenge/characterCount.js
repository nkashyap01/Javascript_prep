// write a function called countChar that takes two parameters : a string and a character to count . The function should return the number of times the specified character appears in the string.

// For example :

// countChar("BBC", "B") should return 2

const countChar = (str, n) => {
  let count = 0;
  const char = str.split("");

  char.map((val) => {
    if (val == n) {
      count = count + 1;
    }
  });
  return count;
};

console.log(countChar("namennn", "n"));
