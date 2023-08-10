import isArray from "./basic/isArray";
import has from "./#has";
import isArguments from "./#isArguments";
import isArrayLike from "./#isArrayLike";
function isEmpty(value) {
    if (value == null) {
        return true;
    }
    if (isArrayLike(value) && (isArray(value) || typeof value === "string" || isArguments(value))) {
        return !value.length;
    }
    for (var key in value) {
        if (has(value, key)) {
            return false;
        }
    }
    return true;
}
export default isEmpty;
