import copyArray from "./_internal/_copyArray";
import stringToArray from "./_internal/_stringToArray";
import isArrayLike from "./#isArrayLike";
import isString from "./#isString";
import values from "./#values";
function toArray(value) {
    if (!value) {
        return [];
    }
    if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
    }
    return values(value);
}
export default toArray;
