function addArray() {
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
        result[index] = 0;
        var subIndex = -1;
        while (++subIndex < argsLength) {
            result[index] += arguments[subIndex][index];
        }
    }
    return result;
}
export default addArray;
