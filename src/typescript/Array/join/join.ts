// @ts-nocheck

// Adds all the elements of an array into a string,-
// -separated by the specified separator string

function join(seperator = ",") {
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

Array.prototype.polyJoin = join

const arr = [1, 2, 3]

// console.log(arr.join("-"))