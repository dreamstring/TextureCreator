function flow() {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    var values = arguments;
    var length = values.length;
    var index = length;
    while (index--) {
        if (typeof values[index] !== "function") {
            throw new Error("Expected a function");
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var index = 0;
        var result = length ? args[index].apply(this, args) : args[0];
        while (++index < length) {
            result = args[index].call(this, result);
        }
        return result;
    };
}
export default flow;
