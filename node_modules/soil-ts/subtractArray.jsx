function subtractArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var argsLength = arguments.length;
    var minLength = Infinity;
    var argsIndex = -1;
    while (++argsIndex < argsLength) {
        if (arguments[argsIndex].length < minLength) {
            minLength = arguments[argsIndex].length;
        }
    }
    var result = new Array(minLength);
    var index = -1;
    while (++index < minLength) {
        result[index] = arguments[0][index];
        var subIndex = 0;
        while (++subIndex < argsLength) {
            result[index] -= arguments[subIndex][index];
        }
    }
    return result;
}
export default subtractArray;
