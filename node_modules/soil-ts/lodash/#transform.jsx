import forEach from "./#forEach";
function transform(array, iteratee, accumulator) {
    if (accumulator === void 0) { accumulator = []; }
    forEach(array, function (value, index, object) {
        return iteratee(accumulator, value, index, object);
    });
    return accumulator;
}
export default transform;
