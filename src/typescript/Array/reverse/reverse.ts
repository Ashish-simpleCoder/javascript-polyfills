// @ts-nocheck

// Reverses the elements in an array in place. 
// This method mutates the array and returns a reference to the same array

function reverse() {
    let lastIndex = this.length - 1
    for (let i = 0; i < this.length / 2; i++) {
        let tmp = this[i]
        this[i] = this[lastIndex]
        this[lastIndex] = tmp
        lastIndex--
    }
    return this
}

Array.prototype.polyReverse = reverse

const arr = [1, 2, 3]

arr.polyReverse()

// console.log(arr)

