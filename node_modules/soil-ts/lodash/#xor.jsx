import baseXor from "./_internal/_baseXor";
import isArrayLikeObject from "./#isArrayLikeObject";
import filter from "./#filter";
function xor() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    return baseXor(filter(arrays, function (value) { return isArrayLikeObject(value); }));
}
export default xor;
