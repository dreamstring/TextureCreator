import baseForOwnRight from "./_baseForOwnRight";
import isArrayLike from "../#isArrayLike";
function baseEachRight(collection, iteratee) {
    if (collection == null) {
        return collection;
    }
    if (!isArrayLike(collection)) {
        return baseForOwnRight(collection, iteratee);
    }
    var iterable = Object(collection);
    var length = collection.length;
    while (length--) {
        if (iteratee(iterable[length], length, iterable) === false) {
            break;
        }
    }
    return collection;
}
export default baseEachRight;
