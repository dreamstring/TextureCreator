import { reIsNative } from "./basic/_global";
import isObject from "./#isObject";
function isNative(value) {
    return isObject(value) && reIsNative.test(value.toString());
}
export default isNative;
