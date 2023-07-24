import "./flat"

it("should flat the array at any given depth", () => {
    const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9, [3, 4, ["one", "punch", "man", ["vs-code", "map", [[["a"]]]]], 5]]]]]

    // @ts-ignore
    expect(arr.polyFlat()).toEqual(arr.flat())

    // @ts-ignore
    expect(arr.polyFlat(2)).toEqual(arr.flat(2))

    // @ts-ignore
    expect(arr.polyFlat(4)).toEqual(arr.flat(4))

    // @ts-ignore
    expect(arr.polyFlat(Infinity)).toEqual(arr.flat(Infinity))

    expect(arr).toEqual([1, 2, 3, [4, 5, [6, 7, [8, 9, [3, 4, ["one", "punch", "man", ["vs-code", "map", [[["a"]]]]], 5]]]]])
})