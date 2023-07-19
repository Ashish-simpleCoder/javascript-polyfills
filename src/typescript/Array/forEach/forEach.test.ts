import "./forEach"

const arr = [1, 2, 3, ["home", "city"], 45, { name: "Ashish" }]



test("should call the passed callback for every value present in array", () => {
    const cb = vi.fn(<T, P extends []>(item: T, index: number, arr: P) => {
    })

    // @ts-ignore
    arr.polyForEach(cb)

    expect(cb).toHaveBeenCalledTimes(arr.length)

    // testing exact number of callback
    expect(cb).toHaveBeenNthCalledWith(1, 1, 0, arr)
    expect(cb).toHaveBeenNthCalledWith(2, 2, 1, arr)
    expect(cb).toHaveBeenNthCalledWith(3, 3, 2, arr)
    expect(cb).toHaveBeenNthCalledWith(4, ["home", "city"], 3, arr)
    expect(cb).toHaveBeenNthCalledWith(5, 45, 4, arr)
    expect(cb).toHaveBeenNthCalledWith(6, { name: "Ashish" }, 5, arr)


    // last call testing
    expect(cb).toHaveBeenLastCalledWith({ name: "Ashish" }, 5, arr)


    // testing return behavoiur
    expect(cb).toHaveLastReturnedWith(undefined)

})

test("should not call the passed callback if array is empty", () => {
    const arr: number[] = []
    const cb = vi.fn((item: number, index: number, arr: any[]) => {
    })

    // @ts-ignore
    arr.polyForEach(cb)

    expect(cb).not.toHaveBeenCalled()
})


test("should use 'thisArg' instead of 'this', if 'thisArg' is given.", () => {
    const callback = vi.fn((item: any, index: number, arr: any[]) => item < 200)

    const arr: any[] = [1, 2, 3]
    // @ts-ignore

    arr.polyForEach(callback, [11, 30, 50, 76])
    expect(callback).toBeCalledTimes(4)


    expect(callback).toHaveBeenNthCalledWith(1, 11, 0, [11, 30, 50, 76])
    expect(callback).toHaveBeenNthCalledWith(2, 30, 1, [11, 30, 50, 76])
    expect(callback).toHaveBeenNthCalledWith(3, 50, 2, [11, 30, 50, 76])
    expect(callback).toHaveBeenNthCalledWith(4, 76, 3, [11, 30, 50, 76])
})

test("should run 4-times, if item is removed", () => {

    const callback = vi.fn((item: any, index: number, arr: any[]) => {
        if (index == 2) {
            arr.pop()
        }
        return item
    })

    const arr: any[] = [1, 2, 3, 4, 5]
    // @ts-ignore

    arr.polyForEach(callback)
    expect(callback).toBeCalledTimes(4)


    expect(callback).toHaveBeenLastCalledWith(4, 3, arr)
})

test("should run 4-times, if new item is added ", () => {

    const callback = vi.fn((item: any, index: number, arr: any[]) => {
        if (index == 2) {
            arr.push(34)
        }
        return item
    })

    const arr: any[] = [1, 2, 3]
    // @ts-ignore

    arr.polyForEach(callback)
    expect(callback).toBeCalledTimes(3)
})