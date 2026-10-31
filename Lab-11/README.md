# Assignment 11: Scope and Closures

## Aim
To understand block scope and global scope, and use closures to maintain a value between function calls.

## Task 1: Block Scope

Created a variable level with the value outer.

Inside a block, another variable level is declared with the value inner.

The inner variable is accessible only inside the block.

Output:
inner
outer

## Task 2: Closures

Created a function makeCounter() that initializes count to 0 and returns an inner function.

The inner function increases count by 1 and returns its updated value.

The closure remembers the count between function calls.

Output:
1
2

## Task 3: Global Scope

Created a global variable school with the value Sample College.

The showSchool() function accesses the global variable and prints a welcome message.

Output:
Welcome to Sample College

## Programs
1. Programs/task1.js
2. Programs/task2.js
3. Programs/task3.js

## Technologies Used
- JavaScript
- Block Scope
- Global Scope
- Functions
- Closures
