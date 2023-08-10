import { nativeSlice } from "./_global";
function curry(func) {
    var arity = func.length;
    return function curried() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var args = nativeSlice.call(arguments);
        if (args.length >= arity) {
            return func.apply(null, args.slice(0, arity));
        }
        return function () {
            var values = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                values[_i] = arguments[_i];
            }
            return curried.apply(null, args.concat(nativeSlice.call(arguments)));
        };
    };
}
export default curry;
