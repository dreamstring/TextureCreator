import getTag from "./_internal/_getTag";
import isObjectLike from "./#isObjectLike";
function isArguments(value) {
    return isObjectLike(value) && getTag(value) == "[object Arguments]";
}
export default isArguments;
