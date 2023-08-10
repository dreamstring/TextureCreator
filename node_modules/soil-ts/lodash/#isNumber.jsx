import getTag from "./_internal/_getTag";
import isObjectLike from "./#isObjectLike";
function isNumber(value) {
    return typeof value === "number" || (isObjectLike(value) && getTag(value) == "[object Number]");
}
export default isNumber;
