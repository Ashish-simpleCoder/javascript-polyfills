// @ts-nocheck

// Calls a defined callback function on each element of an array,- 
// - and returns an array that contains the results.

function map(cb, thisArg) {
    const mapped_arr = []
    const currentThis = thisArg || this
    let cached_length = currentThis.length

    for (let i = 0; i < cached_length; i++) {
        const curr_element = currentThis[i]
        const curr_index = i
        const curr_arr = currentThis

        mapped_arr.push(cb(curr_element, curr_index, curr_arr))
    }

    return mapped_arr
}

Array.prototype.polyMap = map

const arr = [1, 2, 3]
const result = arr.polyMap((item, index, currentArr) => ({ item, index }))
// console.log(result)
