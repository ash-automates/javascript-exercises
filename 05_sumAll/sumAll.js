const sumAll = function (num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }
    let sum = 0;
    if (num2 > num1) {
        for (let counter = num1; counter <= num2; counter++) {
            sum += counter;
        }
    } else {
        for (let counter = num2; counter <= num1; counter++) {
            sum += counter;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
