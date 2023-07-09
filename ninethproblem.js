function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5];
  const evenNumbers = filterEvenNumbers(numbers);
  console.log(evenNumbers);
  