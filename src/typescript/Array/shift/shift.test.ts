import "./shift"

it("should delete first element", () => {
    const arr = [3, 56, 2, 5]

    // @ts-ignore
    let deletedItem = arr.polyShift()


    expect(deletedItem).toBe(3)
    expect(arr).not.toContain(3)
    expect(arr).toHaveLength(3)
    expect(arr).toEqual([56, 2, 5])


    // @ts-ignore
    deletedItem = arr.polyShift()


    expect(deletedItem).toBe(56)
    expect(arr).not.toContain(56)
    expect(arr).toHaveLength(2)
    expect(arr).toEqual([2, 5])
})

it("should return undefined if array length is zero", () => {
    const arr: number[] = []

    // @ts-ignore
    let deletedItem = arr.polyShift()

    // @ts-ignore
    deletedItem = arr.polyShift()


    expect(deletedItem).toBeUndefined()
    expect(arr).toHaveLength(0)
    expect(arr).toEqual([])


})