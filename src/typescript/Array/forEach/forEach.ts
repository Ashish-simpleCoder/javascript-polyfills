// @ts-nocheck

// Array.forEach method iterates over all of item present in array
// it returns void
// It takes a callback

function forEach(cb: (item: T, index: number, array: T[]) => void, thisArg) {

    const currentThis = thisArg || this
    let cached_length = currentThis.length

    for (let i = 0; i < cached_length; i++) {
        if (currentThis.length < cached_length) {
            cached_length = currentThis.length
        }
        cb(currentThis[i], i, currentThis)
    }
}

Array.prototype.polyForEach = forEach

const arr = [1, 2, 3, 4]

// arr.polyForEach((item, index, arr) =>{
//     console.log(item, index, arr)
// })