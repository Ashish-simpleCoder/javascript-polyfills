// @ts-nocheck

// Array.push method add the new value at the end of the array
// it returns the new length after adding the new item
// it mutates the original array.


export function push(item) {
    this[this.length] = item
    return this.length
}

Array.prototype.polyPush = push


const arr = [1, 2, 3]

let new_length = arr.polyPush(4)

// console.log(new_length, arr, "\n")


new_length = arr.polyPush(5)

// console.log(new_length, arr)