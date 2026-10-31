
class Locker {
    constructor() {
        this.pin = 1234;
    }

    checkPin(number) {
        return number === this.pin;
    }
}

const locker1 = new Locker();

console.log(locker1.checkPin(1111));
console.log(locker1.checkPin(1234));