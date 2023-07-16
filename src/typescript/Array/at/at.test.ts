import "./at"

it("should return item present at given index", () => {
    const arr = [1, 2, 3, 4, 7, 232]
    // @ts-ignore
    let item = arr.polyAt(1)
    expect(item).toBe(2)

    // @ts-ignore
    item = arr.polyAt(4)
    expect(item).toBe(7)
})

it("should return item from the last when index is negative", () => {
    const arr = [1, 2, 3, 4, 7, 232]
    // @ts-ignore
    let item = arr.polyAt(-1)
    expect(item).toBe(232)

    // @ts-ignore
    item = arr.polyAt(-3)
    expect(item).toBe(4)

})

it("should return undefined when index is bigger than array length", () => {
    const arr = [1, 2, 3, 4, 7, 232]
    // @ts-ignore
    let item = arr.polyAt(3453454354354)
    expect(item).toBeUndefined()
})