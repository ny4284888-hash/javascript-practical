let marks = [72, 85, 30, 90];

let hasFailed = marks.some(mark => mark < 40);
let allPassed = marks.every(mark => mark >= 35);

console.log("Any mark below 40:", hasFailed);
console.log("All marks are 35 or more:", allPassed);