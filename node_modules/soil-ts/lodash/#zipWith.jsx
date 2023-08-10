import unzipWith from "./#unzipWith";
function zipWith() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var values = arguments;
    var length = values.length;
    var iteratee = length > 1 ? values[length - 1] : undefined;
    iteratee = typeof iteratee === "function" ? (values.pop(), iteratee) : undefined;
    return unzipWith(values, iteratee);
}
export default zipWith;
