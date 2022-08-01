const reverseString = function (sentence) {
    let counter = sentence.length - 1;
    let reversedSentence = ''
    while (counter >= 0) {
        reversedSentence += sentence[counter];
        counter -= 1;
    }
    return reversedSentence;
};

// Do not edit below this line
module.exports = reverseString;
