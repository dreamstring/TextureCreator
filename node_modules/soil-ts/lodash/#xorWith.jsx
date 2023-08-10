import baseXor from "./_internal/_baseXor";
import isArrayLikeObject from "./#isArrayLikeObject";
import filter from "./#filter";
import last from "./#last";
function xorWith() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var values = arguments;
    var comparator = last(values);
    comparator = typeof comparator === "function" ? comparator : undefined;
    return baseXor(filter(values, function (value) { return isArrayLikeObject(value); }), undefined, comparator);
}
export default xorWith;
