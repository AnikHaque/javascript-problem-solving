function sumArray(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5];
  const sum = sumArray(numbers);
  console.log(sum);
  