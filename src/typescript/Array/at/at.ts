// @ts-nocheck

// Array.at method returns the item present at given index.
// It takes positive and negative index as value.
// It returns undefined, if element at given index is not found.

function at(index: number) {
    if (index >= 0) {
        return this[index]
    } else {
        const positive_index = Math.abs(index)
        return this[this.length - positive_index]
    }
}

Array.prototype.polyAt = at

const arr = [1, 2, 3]

// console.log(arr.polyAt(-1))