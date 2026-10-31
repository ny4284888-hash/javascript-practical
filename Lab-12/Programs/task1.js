function applyTwice(func, value) {
    let firstResult = func(value);
    let secondResult = func(firstResult);
    return secondResult;
}

function addTen(number) {
    return number + 10;
}

console.log(applyTwice(addTen, 5));