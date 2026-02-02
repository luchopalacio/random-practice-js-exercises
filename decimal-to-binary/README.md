# Exercise: Decimal to Binary 
This exercise implements the conversion of a decimal number to its binary representation using different approaches.  
The goal is to show the evolution from a step-by-step algorithmic solution to more optimized and conceptual implementations.
Each version solves the same problem but with a different focus.

## Problem
Given a non-negative integer, convert it to its binary representation.

## v1
- Step-by-step approach
- Stores inputs, quotients and remainders in separate arrays
- Logs intermediate values to better understand the algorithm
- Focused on learning and explanation rather than efficiency

## v2
- Iterative solution using a single loop
- Builds the binary string directly
- No auxiliary arrays

## v3
- Recursive approach
- Uses clear base cases (`0` and `1`)
- Emphasizes recursion and problem decomposition

## Examples
```js
console.log(decimalToBinary(13)) // output: 1101

console.log(decimalToBinary(39)) // output: 100111

console.log(decimalToBinary(168)) // output: 10101000


