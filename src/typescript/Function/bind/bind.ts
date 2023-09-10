// @ts-nocheck
function myBind(context = {}, ...args) {
   if (typeof this != "function") {
      throw new Error(this + "It's not callable")
   }

   context.fn = this
   return function (...next) {
      return context.fn(...args, ...next)
   }
}

Function.prototype.myBind = myBind