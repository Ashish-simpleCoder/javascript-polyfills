import "./some"


test("should return true or false based on passed callback", () => {
    const callback = vi.fn((item: any, index: number, arr: any[]) => item > 2 && item < 4)

    const arr = [1, 2, 3, 4, 5, 6]
    // @ts-ignore

    const result = arr.polySome(callback)
    expect(result).toBeTruthy()
})

test("should break iteration when callback returns true", () => {

    const callback = vi.fn((item: any, index: number, arr: any[]) => item > 2 && item < 4)

    const arr = [1, 2, 3, 4, 5, 6]
    // @ts-ignore

    const result = arr.polySome(callback)
    expect(result).toBeTruthy()
    expect(callback).toBeCalledTimes(3)


    expect(callback).toHaveBeenNthCalledWith(1, 1, 0, arr)
    expect(callback).toHaveBeenNthCalledWith(2, 2, 1, arr)
    expect(callback).toHaveBeenNthCalledWith(3, 3, 2, arr)
})

test("should return true if any non-falsy value is returned", () => {

    const callback = vi.fn((item: any, index: number, arr: any[]) => item)

    const arr = [1, 2, 3]
    // @ts-ignore

    const result = arr.polySome(callback)
    expect(result).toBeTruthy()
    expect(callback).toBeCalledTimes(1)
})

test("should return true for empty array for any given test in callback", () => {
    const callback = vi.fn((item: any, index: number, arr: any[]) => item > 200)

    const arr: any[] = []
    // @ts-ignore

    const result = arr.polySome(callback)
    expect(result).toBeTruthy()
    expect(callback).toBeCalledTimes(arr.length)
})

test("should use 'thisArg' instead of 'this', if 'thisArg' is given.", () => {
    const callback = vi.fn((item: any, index: number, arr: any[]) => item > 30)

    const arr: any[] = [1, 2, 3]
    // @ts-ignore

    const result = arr.polySome(callback, [11, 30, 50, 76])
    expect(callback).toBeCalledTimes(3)


    expect(callback).toHaveBeenNthCalledWith(1, 11, 0, [11, 30, 50, 76])
    expect(callback).toHaveBeenNthCalledWith(2, 30, 1, [11, 30, 50, 76])
    expect(callback).toHaveBeenNthCalledWith(3, 50, 2, [11, 30, 50, 76])
})


test("should run 4-times only if item is popped", () => {

    const callback = vi.fn((item: any, index: number, arr: any[]) => {
        if (index == 2) {
            arr.pop()
        }
        return item > 5
    })

    const arr: any[] = [1, 2, 3, 4, 5]
    // @ts-ignore

    const result = arr.polySome(callback)
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

    const result = arr.polySome(callback)
    expect(callback).toBeCalledTimes(1)
})