function isPalindrome(str) {
 
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

 
  return str === str.split('').reverse().join('');
}
 
console.log(isPalindrome("A man, a plan, a canal, Panama"));  
console.log(isPalindrome("racecar"));  
console.log(isPalindrome("hello"));  
