import uniq from "../#uniq";
import flatten from "../#flatten";
function union() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var values = arguments;
    return uniq(flatten(values));
}
export default union;
