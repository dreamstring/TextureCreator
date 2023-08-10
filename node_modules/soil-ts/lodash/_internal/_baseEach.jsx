import baseForOwn from "./_baseForOwn";
import isArrayLike from "../#isArrayLike";
function baseEach(collection, iteratee) {
    if (collection == null) {
        return collection;
    }
    if (!isArrayLike(collection)) {
        return baseForOwn(collection, iteratee);
    }
    var length = collection.length;
    var iterable = Object(collection);
    var index = -1;
    while (++index < length) {
        if (iteratee(iterable[index], index, iterable) === false) {
            break;
        }
    }
    return collection;
}
export default baseEach;
