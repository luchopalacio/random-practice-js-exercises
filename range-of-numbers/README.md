# Exercise: Build a Range of Numbers Generator

This exercise implements a recursive function that generates an array of numbers between two given values.
The function returns all numbers from the starting value to the ending value (inclusive). If the starting number is greater than the ending number, it returns an empty array.

## Example
```js
console.log(rangeOfNumbers(3,6)) // output: [3,4,5,6]
console.log(rangeOfNumbers(8,8)) // output: [8]
console.log(rangeOfNumbers(6,2)) // output: []