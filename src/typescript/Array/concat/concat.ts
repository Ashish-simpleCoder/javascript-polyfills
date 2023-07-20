// @ts-nocheck


// Array.concat method concats the given any number of arguments to the source array.
// It returns new array of concatted elements.
// It does not mutate the original array.

function concat(...items) {

    if (!items || items.length == 0) return [...this]

    let concatedArr = [...this]

    for (let i = 0; i < items.length; i++) {
        if(Array.isArray(items[i])){
            concatedArr.push(...items[i])
        }else{
            concatedArr.push(items[i])
        }
    }

    return concatedArr
}


Array.prototype.polyConcat = concat

const arr = [1, 2, 3, 4, 5]
const arr2 = [23, 445]

const result = arr.polyConcat(arr2)

// console.log(result)

