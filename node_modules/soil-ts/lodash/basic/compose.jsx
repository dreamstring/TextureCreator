function compose() {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    var args = arguments;
    var start = args.length - 1;
    return function () {
        var index = start;
        var result = args[start].apply(null, arguments);
        while (index--) {
            result = args[index].call(null, result);
        }
        return result;
    };
}
export default compose;
