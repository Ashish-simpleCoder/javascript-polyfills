import "./bind"

test("should modify this context", () => {
   const obj = {
      name: "react",
      getName(rating = 0, skill: string = "") {
         return this.name + " " + rating + " " + skill
      }
   }

   const anotherObj = {
      name: "javascript"
   }

   expect(obj.getName()).toBe("react 0 ")

   // @ts-ignore
   const boundFn = obj.getName.myBind(anotherObj, 3)
   expect(boundFn(". I am coder")).toBe("javascript 3 . I am coder")
})