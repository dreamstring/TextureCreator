import { MAX_ARRAY_LENGTH } from "./basic/_global";
import castSlice from "./_internal/_castSlice";
import hasUnicode from "./_internal/_hasUnicode";
import stringToArray from "./_internal/_stringToArray";
import isRegExp from "./#isRegExp";
function split(string, separator, limit) {
    limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
    if (!limit) {
        return [];
    }
    if (string && (typeof separator === "string" || (separator != null && !isRegExp(separator)))) {
        if (!separator && hasUnicode(string)) {
            return castSlice(stringToArray(string), 0, limit);
        }
    }
    return string.split(separator, limit);
}
export default split;
