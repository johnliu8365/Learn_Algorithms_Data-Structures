// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const object = {};
    let maxNum = 0;
    let maxKey = '';

    str.split('').forEach((i) => {
        if(!object[i]) 
            object[i] = 1 ;
        else
            object[i]++;
    });

    Object.entries(object).forEach(([key, value]) => {
        if(value > maxNum) {
            maxNum = value;
            maxKey = key;
        }
    });

    return maxKey;
}


module.exports = maxChar;
