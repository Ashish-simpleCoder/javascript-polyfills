// @ts-nocheck
function myBind(context = {}, args = []) {
   if (typeof this != "function") {
      throw new Error(this + "It's not callable")
   }

   context.fn = this
   return context.fn(...args)
}

Function.prototype.myApply = myBind