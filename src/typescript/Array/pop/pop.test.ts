import "./pop"

it("should delete last element", () => {
    const arr = [1, 2, 3, 4]

    // @ts-ignore
    const deletedItem = arr.polyPop()

    expect(deletedItem).toBe(4)
    expect(arr).not.toContain(4)
})

it("should return undefined it array is empty", () => {
    const arr: number[] = []

    // @ts-ignore
    const deletedItem = arr.polyPop()

    expect(deletedItem).toBeUndefined()
    expect(arr).toEqual([])
})