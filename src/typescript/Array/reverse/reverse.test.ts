import "./reverse"

test("should reverse array", () => {
    const arr = [1, 2, 3, 4, 5]

    // @ts-ignore
    const result = arr.polyReverse()

    expect(arr).toEqual([5, 4, 3, 2, 1])
    expect(result).toEqual(arr)
})