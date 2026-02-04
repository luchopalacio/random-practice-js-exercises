# Exercise: Build a permutation generator

Implementation of a recursive function that takes a string as input and generates all possible permutations of its characters, ensuring that no duplicate permutations are included.

## v1
Solves the duplication problem using the `.includes()` method. This approach is straightforward but not optimal in terms of performance.

## v2
Uses a `Set` to efficiently prevent duplicate permutations.

## v3
Prevents duplicates from being generated in the first place by controlling character usage during the recursive process.

