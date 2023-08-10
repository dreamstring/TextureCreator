import arrayLikeKeys from "./_internal/_arrayLikeKeys";
import has from "./#has";
import isArrayLike from "./#isArrayLike";
function keys(object) {
    if (object == null) {
        return [];
    }
    if (isArrayLike(object)) {
        return arrayLikeKeys(object);
    }
    var result = [];
    for (var key in object) {
        if (has(object, key)) {
            result.push(key);
        }
    }
    return result;
}
export default keys;
