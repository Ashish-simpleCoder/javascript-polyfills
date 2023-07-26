import "./toString"

test("should join all of the array elemenets with ','(comma) seperator", () => {
    const arr = [1, 2, 3]

    // @ts-ignore
    let result = arr.polytoString()

    expect(result).toBe("1,2,3")
})

test("should be to able to handle undefined values for join", () => {
    const arr = [1, 2, , 3, , 4]

    // @ts-ignore
    let result = arr.polytoString()
    expect(result).toBe("1,2,,3,,4")
})

test("should return empty string if array is empty", () => {
    const arr: any[] = []

    // @ts-ignore
    let result = arr.polytoString()
    expect(result).toBe("")
})

test("should handle nested array elements", () => {
    const arr = [["temp", "xampp"], 1, 2, 3, [45, 67, ["test", "waste"], "focus"], 4, 5]

    // @ts-ignore
    let result = arr.polytoString()


    // comparing the result with actual Array.join method return value
    expect(result).toBe(arr.toString())
})