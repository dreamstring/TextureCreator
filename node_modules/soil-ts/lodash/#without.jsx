import { nativeSlice } from "./basic/_global";
import baseDifference from "./_internal/_baseDifference";
import isArrayLikeObject from "./#isArrayLikeObject";
function without(array) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var othValues = nativeSlice.call(arguments, 1);
    return isArrayLikeObject(array) ? baseDifference(array, othValues) : [];
}
export default without;
