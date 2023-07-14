
import "./push"

test("should add item at the end of array", () => {
    const arr = [1, 2, 3]
    // @ts-ignore
    arr.polyPush(4)


    expect(arr).toHaveLength(4)
    expect(arr).toContain(4)
    expect(arr[3]).toBe(4)
    expect(arr).toEqual([1, 2, 3, 4])
})

test("should add undefined if item is not passed", () => {
    const arr = [1, 2, 3]

    expect(arr).not.toContain(undefined)

    // @ts-ignore
    arr.polyPush()

    expect(arr).toHaveLength(4)
    expect(arr).toContain(undefined)
    expect(arr[3]).toBeUndefined()
    expect(arr).toEqual([1, 2, 3, undefined])


})