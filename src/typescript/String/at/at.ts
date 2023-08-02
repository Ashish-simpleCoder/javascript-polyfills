// @ts-nocheck
function at(index: number) {
    const arr_str = [...this]

    if (index < 0) {
        let goToIndex = arr_str.length - Math.abs(index)
        return arr_str[goToIndex]
    }

    return arr_str[index]
}

String.prototype.polyAt = at

// console.log("teset".polyAt(2))