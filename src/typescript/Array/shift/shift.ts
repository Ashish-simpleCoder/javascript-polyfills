// @ts-nocheck

// Array.shift method removes first item from the array
// it returns the item, which has been removed
// it mutates the original array.



function shift() {
    if (this.length == 0) return undefined
    let firstElement = this[0]
    for (let i = 1; i < this.length; i++) {
        this[i - 1] = this[i]
    }
    this.length = this.length - 1
    return firstElement
}

Array.prototype.polyShift = shift

const arr = [1, 2, 3, 4, 5]

// console.log(arr.shift())