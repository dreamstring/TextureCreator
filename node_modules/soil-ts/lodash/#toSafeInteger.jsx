import { MAX_SAFE_INTEGER } from "./basic/_global";
import toInteger from "./#toInteger";
function toSafeInteger(value) {
    if (!value) {
        return value === 0 ? value : 0;
    }
    value = toInteger(value);
    if (value < -MAX_SAFE_INTEGER) {
        return -MAX_SAFE_INTEGER;
    }
    if (value > MAX_SAFE_INTEGER) {
        return MAX_SAFE_INTEGER;
    }
    return value;
}
export default toSafeInteger;
