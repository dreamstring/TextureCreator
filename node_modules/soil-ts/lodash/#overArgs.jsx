function overArgs(func, transforms) {
    var funcsLength = transforms.length;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var values = arguments;
        var index = -1;
        var length = Math.min(values.length, funcsLength);
        while (++index < length) {
            values[index] = transforms[index].call(this, values[index]);
        }
        return func.apply(this, values);
    };
}
export default overArgs;
