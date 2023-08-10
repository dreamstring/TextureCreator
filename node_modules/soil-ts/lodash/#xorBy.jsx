import baseXor from "./_internal/_baseXor";
import isArrayLikeObject from "./#isArrayLikeObject";
import filter from "./#filter";
import last from "./#last";
function xorBy() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var values = arguments;
    var iteratee = last(values);
    if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
    }
    return baseXor(filter(arrays, function (value) { return isArrayLikeObject(value); }), iteratee);
}
export default xorBy;
