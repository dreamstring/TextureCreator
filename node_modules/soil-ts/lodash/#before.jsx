function before(n, func) {
    var result;
    if (typeof func !== "function") {
        throw new Error("Expected a function");
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (--n > 0) {
            result = func.apply(this, arguments);
        }
        return result;
    };
}
export default before;
