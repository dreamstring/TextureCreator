import isArray from "./basic/isArray";
import getTag from "./_internal/_getTag";
function isString(value) {
    var type = typeof value;
    return type === "string" || (type === "object" && value != null && !isArray(value) && getTag(value) == "[object String]");
}
export default isString;
