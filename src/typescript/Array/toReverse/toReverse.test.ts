import "./toReverse"

test("should reverse array", () => {
    const arr = [1, 2, 3, 4, 5]

    // @ts-ignore
    const result = arr.polyToReverse()

    expect(arr).toEqual([1, 2, 3, 4, 5])
    expect(result).toEqual([5, 4, 3, 2, 1])
})