import getTag from "./_internal/_getTag";
import isObjectLike from "./#isObjectLike";
function isBoolean(value) {
    return value === true || value === false || (isObjectLike(value) && getTag(value) == "[object Boolean]");
}
export default isBoolean;
