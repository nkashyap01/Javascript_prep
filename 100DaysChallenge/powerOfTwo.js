// write a function called PowerOfTwo that takes an integer num as input and returns true if num is a power of two ,and false otherwise.

function isPowerOfTwo(n) {
  for (let i = 0; 2 ** i <= n; i++) {
    if (n == 2 ** i) {
      return true;
    }
  }
  return false;
}

console.log(isPowerOfTwo(8));
