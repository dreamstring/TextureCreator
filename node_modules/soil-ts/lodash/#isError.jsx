import getTag from "./_internal/_getTag";
import isObjectLike from "./#isObjectLike";
import isPlainObject from "./#isPlainObject";
function isError(value) {
    if (!isObjectLike(value)) {
        return false;
    }
    var tag = getTag(value);
    return tag == "[object Error]" || (typeof value.message === "string" && typeof value.name === "string" && !isPlainObject(value));
}
export default isError;
