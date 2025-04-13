console.log("Hello World");
// Reversing a string
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= onabort; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString(hello));

//counting characters
function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; I++) {
    if (str[i] === char) count++;
  }
  return count;
}

//capitalize first letters on each word in a sentence
function capitalizeWords(sentence) {
  if (!sentence) return ""; // handle empty input

  return sentence
    .toLowerCase() // first make all letters lowercase
    .split(" ") // split into words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize first letter of each word
    .join(" "); // join back into a sentence
}

//Array functions
//find maximum and minimum values in an array
const numbers = [5, 3, 9, 1, 5, 4];
const result = findMinMax(numbers);

console.log(`Minimum value: ${result.min}`); // Output: Minimum value: 1
console.log(`Maximum value: ${result.max}`); // Output: Maximum value: 9

//sum of all elements in an arrayk
console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([-1, 0, 1])); // 0

console.log(sumArray([])); // 0
console.log(sumArray([5])); // 5

//Filter array
//filter even numbers
const num = [1, 2, 3, 4, 5, 6];
const evens = filterArray(numbers, (x) => x % 2 === 0);
console.log(evens); // [2, 4, 6]

//Mathematic values

//calculate factorial of a given number
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(10)); // 3628800

//prime numbers
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
}

//fibonacci

function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}
