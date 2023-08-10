import { MAX_ARRAY_LENGTH } from "./basic/_global";
import toInteger from "./#toInteger";
function toLength(value) {
    if (!value) {
        return 0;
    }
    value = toInteger(value);
    if (value < 0) {
        return 0;
    }
    if (value > MAX_ARRAY_LENGTH) {
        return MAX_ARRAY_LENGTH;
    }
    return value;
}
export default toLength;
