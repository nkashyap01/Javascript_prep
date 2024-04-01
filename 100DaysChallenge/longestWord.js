// write a function to find longestWord that takes a string as input and return the longest word in the string.If there are multiple longest words, return the first one encountered.

const findLongestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }
  let words = str.split(" ");
  console.log(words);
  words.sort((a, b) => b.length - a.length);

  console.log(words[0]);
};

findLongestWord("session placement Lpu College University");
