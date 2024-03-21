// @ts-nocheck

// Returns a new array with all sub-array elements concatenated- 
// -into it recursively up to the specified depth

function flat(depth = 1) {
    if (depth == 0) return this

    const flattenedArr = []

    recursiveFlatting(this, 0)


    function recursiveFlatting(arr, depthCursor) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && depthCursor < depth) {
                recursiveFlatting(arr[i], depthCursor + 1)
            } else {
                flattenedArr.push(arr[i])
            }
        }
    }

    return flattenedArr
}

Array.prototype.polyFlat = flat

