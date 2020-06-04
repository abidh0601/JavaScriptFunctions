// JavaScript source code

/**
 * 
 * @param {Array} arr
 * @param {any} query
 * @param {number} fromIndex
 * 
 * @return {Boolean}
 */
const myIncludes = function (arr, query, fromIndex) {

    if (fromIndex == undefined) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === query) {
                return true;
            }
        }
    }
    else if (fromIndex >= 0) {
        for (let i = fromIndex; i < arr.length; i++) {
            if (arr[i] === query) {
                return true;
            }
        }
    }
    else if (fromIndex < 0) {
        for (let i = (arr.length + fromIndex); i < arr.length; i++) {
            if (arr[i] === query) {
                return true;
            }
        }
    }
    return false;
}
