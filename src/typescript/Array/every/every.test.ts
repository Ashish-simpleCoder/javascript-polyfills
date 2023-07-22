import "./every"


test("should return true or false based on passed callback", () => {
    const callback = vi.fn((item: any, index: number, arr: any[]) => item > 2 && item < 4)

    const arr = [1, 2, 3, 4, 5, 6]
    // @ts-ignore

    const result = arr.polyEvery(callback)
    expect(result).toBeFalsy()
})

test("should iterate all element for given test", () => {
    const callback = vi.fn((item: any, index: number, arr: any[]) => item < 10)

    const arr = [1, 2, 3]
    // @ts-ignore

    const result = arr.polyEvery(callback)
    expect(result).toBeTruthy()
    expect(callback).toBeCalledTimes(arr.length)


    expect(callback).toHaveBeenNthCalledWith(1, 1, 0, arr)
    expect(callback).toHaveBeenNthCalledWith(2, 2, 1, arr)
    expect(callback).toHaveBeenNthCalledWith(3, 3, 2, arr)
})

test("should break iteration when callback returns false", () => {

    const callback = vi.fn((item: any, index: number, arr: any[]) => item > 0 && item < 4)

    const arr = [1, 2, 3, 4, 5, 6]
    // @ts-ignore

    const result = arr.polyEvery(callback)
    expect(result).toBeFalsy()
    expect(callback).toBeCalledTimes(4)


    expect(callback).toHaveBeenNthCalledWith(1, 1, 0, arr)
    expect(callback).toHaveBeenNthCalledWith(2, 2, 1, arr)
    expect(callback).toHaveBeenNthCalledWith(3, 3, 2, arr)
    expect(callback).toHaveBeenNthCalledWith(4, 4, 3, arr)

    // check last callback values
    expect(callback).toHaveBeenLastCalledWith(4, 3, arr)
})

test("should return true if any non-falsy value is returned in test", () => {

    const callback = vi.fn((item: any, index: number, arr: any[]) => item)

    const arr = [1, 2, 3]
    // @ts-ignore

    const result = arr.polyEvery(callback)
    expect(result).toBeTruthy()
    expect(callback).toBeCalledTimes(arr.length)


    expect(callback).toHaveBeenNthCalledWith(1, 1, 0, arr)
    expect(callback).toHaveBeenNthCalledWith(2, 2, 1, arr)
    expect(callback).toHaveBeenNthCalledWith(3, 3, 2, arr)
})

test("should return true for empty array for any given test in callback", () => {
    const callback = vi.fn((item: any, index: number, arr: any[]) => item > 200)

    const arr: any[] = []
    // @ts-ignore

    const result = arr.polyEvery(callback)
    expect(result).toBeTruthy()
    expect(callback).toBeCalledTimes(arr.length)
})

test("should use 'thisArg' instead of 'this', if 'thisArg' is given.", () => {
    const callback = vi.fn((item: any, index: number, arr: any[]) => item < 200)

    const arr: any[] = [1, 2, 3]
    // @ts-ignore

    const result = arr.polyEvery(callback, [11, 30, 50, 76])
    expect(callback).toBeCalledTimes(4)


    expect(callback).toHaveBeenNthCalledWith(1, 11, 0, [11, 30, 50, 76])
    expect(callback).toHaveBeenNthCalledWith(2, 30, 1, [11, 30, 50, 76])
    expect(callback).toHaveBeenNthCalledWith(3, 50, 2, [11, 30, 50, 76])
    expect(callback).toHaveBeenNthCalledWith(4, 76, 3, [11, 30, 50, 76])
})


test("should run 4-times only if item is popped", () => {

    const callback = vi.fn((item: any, index: number, arr: any[]) => {
        if (index == 2) {
            arr.pop()
        }
        return item
    })

    const arr: any[] = [1, 2, 3, 4, 5]
    // @ts-ignore

    const result = arr.polyEvery(callback)
    expect(callback).toBeCalledTimes(4)


    expect(callback).toHaveBeenLastCalledWith(4, 3, arr)
})

test("should run 4-times even if new item is added", () => {

    const callback = vi.fn((item: any, index: number, arr: any[]) => {
        if (index == 2) {
            arr.push(34)
        }
        return item
    })

    const arr: any[] = [1, 2, 3]
    // @ts-ignore

    const result = arr.polyEvery(callback)
    expect(callback).toBeCalledTimes(3)


    // expect(callback).toHaveBeenLastCalledWith(4, 3, arr)
})