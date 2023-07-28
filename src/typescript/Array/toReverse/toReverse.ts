// @ts-nocheck

// Reverses the elements in an array in place. 
// This method return new array

function toReverse() {
    let reversedArr = [...this]

    let lastIndex = reversedArr.length - 1
    for (let i = 0; i < reversedArr.length / 2; i++) {
        let tmp = reversedArr[i]
        reversedArr[i] = reversedArr[lastIndex]
        reversedArr[lastIndex] = tmp
        lastIndex--
    }
    return reversedArr
}

Array.prototype.polyToReverse = toReverse

const arr = [1, 2, 3]

const result = arr.polyToReverse()

// console.log(result)

