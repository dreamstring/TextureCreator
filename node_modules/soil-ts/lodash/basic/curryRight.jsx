import { nativeSlice } from "./_global";
function curryRight(func) {
    var arity = func.length;
    return function curriedRight() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var args = nativeSlice.call(arguments);
        if (args.length >= arity) {
            return func.apply(null, args.slice(0, arity).reverse());
        }
        return function () {
            var values = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                values[_i] = arguments[_i];
            }
            return curriedRight.apply(null, args.concat(nativeSlice.call(arguments)));
        };
    };
}
export default curryRight;
