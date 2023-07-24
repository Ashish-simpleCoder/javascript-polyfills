// @ts-nocheck

// Returns a new array with all sub-array elements concatenated- 
// -into it recursively up to the specified depth

function flat(depth = 1) {
    const flattenedArr = []
    let currentDepth = 0

    recursiveFlatting(this)


    function recursiveFlatting(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && currentDepth < depth) {
                currentDepth++
                recursiveFlatting(arr[i])
            } else {
                flattenedArr.push(arr[i])
            }
        }
    }

    return flattenedArr
}

Array.prototype.polyFlat = flat

