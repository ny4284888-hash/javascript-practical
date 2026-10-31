# Assignment 15: Promises and async/await with Local Data

## Aim
To create Promises that resolve or reject, use async/await with try/catch, and load local data using a Promise.

## Task 1: Promise Resolve

Created a function checkMarks() that returns a Promise.

The Promise resolves when marks are between 0 and 100.

Output:
80

## Task 2: Promise Reject

Created a function checkMarks() that rejects the Promise when marks are outside the range of 0 to 100.

Used catch() to print the error message.

Output:
Marks out of range

## Task 3: async/await with try/catch

Created an async function run() that uses await to check marks.

The try block prints valid marks, while the catch block handles invalid marks.

Output:
65
Caught: Marks out of range

## Task 4: Loading Local Data with Promise

Created a function getUsers() that returns a Promise.

The Promise resolves after 100 milliseconds with three local users. Used async/await and forEach() to print their names.

Output:
Asha
Rohan
Meera

## Programs
1. Programs/task1.js
2. Programs/task2.js
3. Programs/task3.js
4. Programs/task4.js

## Technologies Used
- JavaScript
- Promises
- resolve()
- reject()
- async/await
- try/catch
- setTimeout()
- Local Data