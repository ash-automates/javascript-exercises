const removeFromArray = function (targetArray) {
    ItemsToRemove = []
    for (let index = 1; index < arguments.length; index++) {
        ItemsToRemove.push(arguments[index]);
    }
    function toBeKept(element) {
        if (ItemsToRemove.indexOf(element) !== -1) {
            return false;
        }
        return true;
    }
    return targetArray.filter(toBeKept);
};
removeFromArray([1, 2, 3], 1, 2, 3);
// Do not edit below this line
module.exports = removeFromArray;
