function after(n, func) {
    if (typeof func !== "function") {
        throw new Error("Expected a function");
    }
    n = n || 0;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (--n < 1) {
            return func.apply(this, arguments);
        }
    };
}
export default after;
