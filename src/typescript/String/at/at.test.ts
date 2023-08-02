import "./at"

test("should return the character present at provided index", () => {
    const str = "this is test"

    let index = 3
    // @ts-ignore
    const result = str.polyAt(index)
    const result2 = str.at(index)

    expect(result).toBe(result2)
})

test("should return the character from last present at provided index", () => {
    const str = "this is test"

    let index = -3
    // @ts-ignore
    const result = str.polyAt(index)
    const result2 = str.at(index)

    expect(result).toBe(result2)
})