// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     let output = [];
//     array.forEach((value, index) => {
//         output[~~(index/size)] = output[~~(index/size)] + value;
//     })
//     console.log(output);
//     return output;
// }

// function chunk(array, size) {
//     const chunked = [];
//     for(let element of array) {
//         const last = chunked[chunked.length - 1];

//         if(!last || last.length === size) {
//             chunked.push([element]);
//         } else {
//             last.push(element);
//         }
//     }

//     return chunked;
// }

function chunk(array, size) {
    const chunked = [];

    for(let count=0; count<array.length; count += size) {
        chunked.push(array.slice(count, count+size));
    }

    return chunked;
}

module.exports = chunk;
