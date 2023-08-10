import getTag from "../_internal/_getTag";
function isArray(value) {
    return getTag(value) == "[object Array]";
}
export default isArray;
