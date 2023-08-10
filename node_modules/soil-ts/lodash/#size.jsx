import stringSize from "./_internal/_stringSize";
import isArrayLike from "./#isArrayLike";
import isString from "./#isString";
import keys from "./#keys";
function size(collection) {
    if (collection == null) {
        return 0;
    }
    if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
    }
    return keys(collection).length;
}
export default size;
