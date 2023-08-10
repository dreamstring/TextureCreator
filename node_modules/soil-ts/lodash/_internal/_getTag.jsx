import { nativeToString } from "../basic/_global";
function getTag(value) {
    if (value == null) {
        return value === undefined ? "[object Undefined]" : "[object Null]";
    }
    return nativeToString.call(value);
}
export default getTag;
