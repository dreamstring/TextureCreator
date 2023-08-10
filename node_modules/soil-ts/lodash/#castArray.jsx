import isArray from "./basic/isArray";
function castArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var values = arguments;
    if (!values.length) {
        return [];
    }
    var value = values[0];
    return isArray(value) ? value : [value];
}
export default castArray;
