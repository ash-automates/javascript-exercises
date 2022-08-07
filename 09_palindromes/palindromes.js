const palindromes = function (rawSentence) {
    const PUNCTUATION = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

    const rawSentenceToArray = rawSentence.split('');
    const cleanSentence = rawSentenceToArray.filter(function (char) {
        return PUNCTUATION.indexOf(char) === -1;
    }).join('');

    let reversedSentence = '';
    const iterate = cleanSentence.length - 1;
    while (iterate >= 0) {
        reversedSentence += cleanSentence[iterate];
        iterate--;
    }

    if (reversedSentence.toLowerCase() === cleanSentence.toLowerCase()) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
