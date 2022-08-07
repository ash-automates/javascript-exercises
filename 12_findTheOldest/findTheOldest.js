const findTheOldest = function (people) {
    function getAge(birthYear, deathYear) {
        if (!deathYear) {
            deathYear = (new Date()).getFullYear();
        }
        return deathYear - birthYear;
    }

    const sortedByAge = people.sort(function (current, next) {
        if (getAge(current.yearOfBirth, current.yearOfDeath) > getAge(next.yearOfBirth, next.yearOfDeath)) {
            return -1;
        } else {
            return 1;
        }
    });

    return sortedByAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
