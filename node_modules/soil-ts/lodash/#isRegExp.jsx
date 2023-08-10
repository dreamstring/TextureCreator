import getTag from "./_internal/_getTag";
import isObjectLike from "./#isObjectLike";
function isRegExp(value) {
    return isObjectLike(value) && getTag(value) == "[object RegExp]";
}
export default isRegExp;
