// @ts-nocheck


// Array.every method returns boolean value for given test.
// It runs the test for every element untill the given test is passed
// It returns true if given test is passed for every element otherwise false.
// It does not mutate the original array.

function every(cb: (item, index, array: any[]) => boolean | undefined, thisArg) {
    if (this.length == 0) return true

    let returnValue = false


    const currentThis = thisArg || this
    let cached_length = currentThis.length

    for (let i = 0; i < cached_length; i++) {
        if (currentThis.length < cached_length) {
            cached_length = currentThis.length
        }
        returnValue = cb(currentThis[i], i, currentThis)
        if (!(!!returnValue)) {
            break;
        }
    }
    return !!returnValue
}

Array.prototype.polyEvery = every

const arr = [1, 2, 3]

// console.log(arr.polyEvery((item, index, arr) => item < 10))