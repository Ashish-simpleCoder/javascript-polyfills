import "./concat"

const arr = [1, 2, 3, 4, 5]
const arr2 = [23, 445]

test("should concat array", () => {
    // @ts-ignore
    const result = arr.polyConcat(arr2)

    expect(result).toHaveLength(arr.length + arr2.length)
    expect(result).toEqual([1, 2, 3, 4, 5, 23, 445])

    expect(arr).toEqual([1, 2, 3, 4, 5])
    expect(arr2).toEqual([23, 445])
})

test("should concat nothing if argument is not passed", () => {
    // @ts-ignore
    const result = arr.polyConcat()

    expect(result).toHaveLength(arr.length)
    expect(arr).toEqual([1, 2, 3, 4, 5])
})

test("should concat any number of arguments is passed", () => {
    // @ts-ignore
    const result = arr.polyConcat(arr2, "javascript", "react", [10, 35, 70])

    expect(result).toHaveLength(arr.length + arr2.length + 5  /* 5 = "javascript", "react", [10, 35, 70]*/)
    expect(result).toEqual([1, 2, 3, 4, 5, 23, 445, "javascript", "react", 10, 35, 70])
})