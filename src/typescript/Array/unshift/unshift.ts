// @ts-nocheck

// Array.unshift method add the new value at the beginning of the array
// it returns the new length after adding the new item
// it mutates the original array.
// If item is not passed, then it does not add anything


export function unshift(item) {
    if(!item) return this
    this.length = this.length + 1


    let tmp_val
    for (let i = 1; i < this.length; i++) {
        if (!tmp_val) {
            tmp_val = this[i]
            this[i] = this[i - 1]
        } else {
            let old_val = this[i]
            this[i] = tmp_val
            tmp_val = old_val
        }
    }
    this[0] = item

    return this.length
}

Array.prototype.polyUnshift = unshift


const arr = [1, 2, 3]

let new_length = arr.polyUnshift(4)

// console.log(new_length, arr, "\n")


new_length = arr.polyUnshift(5)

// console.log(new_length, arr)