import baseDifference from "./_internal/_baseDifference";
import baseFlatten from "./_internal/_baseFlatten";
import isArrayLikeObject from "./#isArrayLikeObject";
function difference(array) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
}
export default difference;
