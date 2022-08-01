const repeatString = function (string, num) {
    if (num < 0) {
        return 'ERROR';
    }
    let output = '';
    let counter = 1;
    while (counter <= num) {
        output += string;
        counter += 1;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
