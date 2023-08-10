import isArrayLike from "./#isArrayLike";
import isObjectLike from "./#isObjectLike";
function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
}
export default isArrayLikeObject;
