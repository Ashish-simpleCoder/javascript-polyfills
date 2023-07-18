
import "./unshift"

test("should add item at the first index of array", () => {
    const arr = [1, 2, 3, 4, 5, 6]


    // @ts-ignore
    arr.polyUnshift(43)
    //@ts-ignore
    arr.polyUnshift()


    expect(arr).toHaveLength(7)
    expect(arr).toContain(43)
    expect(arr[0]).toBe(43)
    expect(arr).toEqual([43, 1, 2, 3, 4, 5, 6])


    // @ts-ignore
    arr.polyUnshift(56)


    expect(arr).toHaveLength(8)
    expect(arr).toContain(56)
    expect(arr[0]).toBe(56)
    expect(arr).toEqual([56, 43, 1, 2, 3, 4, 5, 6])
})

test("should add item at the first index of empty array", () => {
    const arr: number[] = []
    // @ts-ignore
    arr.polyUnshift(43)


    expect(arr).toHaveLength(1)
    expect(arr).toContain(43)
    expect(arr[0]).toBe(43)
    expect(arr).toEqual([43])


    // @ts-ignore
    arr.polyUnshift(56)


    expect(arr).toHaveLength(2)
    expect(arr).toContain(56)
    expect(arr[0]).toBe(56)
    expect(arr).toEqual([56, 43])
})