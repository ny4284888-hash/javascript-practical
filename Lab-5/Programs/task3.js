const marks = [72, 85, 45, 90];

const passedMarks = marks.filter(function(mark) {
    return mark >= 60;
});

console.log(passedMarks);