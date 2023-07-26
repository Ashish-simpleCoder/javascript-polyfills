// @ts-nocheck

// Returns a string representation of an array.
// It joins all of the elements with ","(comma) seperator

function toString() {
    let seperator = ","
    if (this.length == 0) return ""

    let joinedString = ""


    for (let i = 0; i < this.length; i++) {
        if (this[i] == undefined) {
            joinedString += seperator
        } else {
            if (i == 0) {
                if (Array.isArray(this[i])) {
                    joinedString += this[i].flat(Infinity).toString()
                } else {
                    joinedString += this[i]
                }
            } else {
                if (Array.isArray(this[i])) {
                    joinedString += seperator + this[i].flat(Infinity).toString()
                } else {
                    joinedString += seperator + this[i]
                }
            }
        }
    }
    return joinedString
}

Array.prototype.polytoString = toString

const arr = [1, 2, 3]

console.log(arr.join("-"))