import "./map"

test("should map for all of the elements", () => {
    const arr = [1, 2, 3, { name: "ashish" }]

    // @ts-ignore
    const result = arr.polyMap((item, index, currentArr) => {
        return { item, index }
    })

    const result2 = arr.map((item, index, currentArr) => {
        return { item, index }
    })

    expect(result).toEqual(result2)
})

test("callback should be called array.length times", () => {
    const arr = [1, 2, 3, { name: "ashish" }]

    // @ts-ignore
    const fn = vi.fn((item, index, currentArr) => ({ item, index }))

    // @ts-ignore
    const result = arr.polyMap(fn)


    expect(fn).toHaveBeenCalledTimes(arr.length)
    expect(fn).toHaveBeenNthCalledWith(1, 1, 0, arr)
    expect(fn).toHaveBeenNthCalledWith(2, 2, 1, arr)
    expect(fn).toHaveBeenNthCalledWith(3, 3, 2, arr)
    expect(fn).toHaveBeenNthCalledWith(4, {name:"ashish"}, 3, arr)
})

test("callback should not be called if array length is zero", () => {
    const arr: number[] = []

    // @ts-ignore
    const fn = vi.fn((item, index, currentArr) => ({ item, index }))

    // @ts-ignore
    const result = arr.polyMap(fn)


    expect(result).toEqual([])
    expect(fn).toHaveBeenCalledTimes(arr.length)
})