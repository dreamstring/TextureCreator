import contains from "./contains";
function intersection(array) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    var index = -1;
    var length = array.length;
    var argsLength = arguments.length;
    var result = [];
    while (++index < length) {
        var value = array[index];
        if (contains(result, value)) {
            continue;
        }
        var argsIndex = 0;
        while (++argsIndex < argsLength) {
            if (!contains(arguments[argsIndex], value)) {
                break;
            }
        }
        if (argsIndex === argsLength) {
            result.push(value);
        }
    }
    return result;
}
export default intersection;
