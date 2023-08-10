import getTag from "./_internal/_getTag";
import isObjectLike from "./#isObjectLike";
function isPlainObject(value) {
    if (!isObjectLike(value) || getTag(value) != "[object Object]") {
        return false;
    }
    return value.constructor.prototype.hasOwnProperty("isPrototypeOf");
}
export default isPlainObject;
