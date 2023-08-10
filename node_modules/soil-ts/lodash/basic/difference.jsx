import { nativeSlice } from "./_global";
import contains from "./contains";
import filter from "../#filter";
import flatten from "../#flatten";
function difference(array) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var values = flatten(nativeSlice.call(arguments, 1));
    return filter(array, function (value) {
        return !contains(values, value);
    });
}
export default difference;
