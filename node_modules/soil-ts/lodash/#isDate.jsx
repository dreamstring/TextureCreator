import getTag from "./_internal/_getTag";
import isObjectLike from "./#isObjectLike";
function isDate(value) {
    return isObjectLike(value) && getTag(value) == "[object Date]";
}
export default isDate;
