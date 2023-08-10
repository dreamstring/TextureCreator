import isIndex from "./_isIndex";
import eq from "../#eq";
import isArrayLike from "../#isArrayLike";
import isObject from "../#isObject";
function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
        return false;
    }
    var type = typeof index;
    if (type === "number" ? isArrayLike(object) && isIndex(index, object.length) : type === "string" && index in object) {
        return eq(object[index], value);
    }
    return false;
}
export default isIterateeCall;
