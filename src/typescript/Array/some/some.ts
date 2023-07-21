// @ts-nocheck


function some(cb: (item, index, array: any[]) => boolean | undefined, thisArg) {
    if (this.length == 0) return true

    let returnValue = false


    const currentThis = thisArg || this
    let cached_length = currentThis.length

    for (let i = 0; i < cached_length; i++) {
        if (currentThis.length < cached_length) {
            cached_length = currentThis.length
        }
        returnValue = cb(currentThis[i], i, currentThis)
        if ((!!returnValue)) {
            break;
        }
    }
    return !!returnValue
}

Array.prototype.polySome = some

const arr = [1, 2, 3]

// console.log(arr.polyEvery((item, index, arr) => item < 10))