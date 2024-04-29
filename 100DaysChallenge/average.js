function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  const average = sum / numbers.length;

  return average;
}

const numbers = [5, 10, 15, 20, 25];
const avg = calculateAverage(numbers);
console.log("Average:", avg);
