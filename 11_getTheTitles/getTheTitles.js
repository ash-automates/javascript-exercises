const getTheTitles = function (bookObjs) {
    const bookTitles = [];
    let iterate = 0;
    while (iterate < bookObjs.length) {
        bookTitles.push(bookObjs[iterate].title);
        iterate++;
    }
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
