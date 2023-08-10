import { nativeSlice } from "./basic/_global";
function flip(func) {
    if (typeof func !== "function") {
        throw new Error("Expected a function");
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return func.apply(this, nativeSlice.call(arguments).reverse());
    };
}
export default flip;
