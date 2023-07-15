// @ts-nocheck

// Array.pop method removes the last element from array.
// It returns the element which is popped out of the array.
// It mutates the original array.


function pop() {
    if (this.length == 0) return undefined;
    const itemToBeRemoved = this[this.length - 1]
    this.length = this.length - 1
    return itemToBeRemoved
}

Array.prototype.polyPop = pop


const arr = [1, 2, 3]

// console.log(arr.polyPop())