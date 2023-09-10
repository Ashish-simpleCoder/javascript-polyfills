import "./call"

test("should modify this context", () => {
   const obj = {
      name: "react",
      getName(rating: number = 0) {
         return this.name + " " + rating
      }
   }

   const anotherObj = {
      name: "javascript"
   }

   expect(obj.getName()).toBe("react 0")

   // @ts-ignore
   expect(obj.getName.myCall(anotherObj)).toBe("javascript 0")
   // @ts-ignore
   expect(obj.getName.myCall(anotherObj, 5)).toBe("javascript 5")
})