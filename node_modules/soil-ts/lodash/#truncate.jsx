import { reFlags } from "./basic/_global";
import baseToString from "./_internal/_baseToString";
import castSlice from "./_internal/_castSlice";
import hasUnicode from "./_internal/_hasUnicode";
import isRegExp from "./#isRegExp";
import stringSize from "./_internal/_stringSize";
import stringToArray from "./_internal/_stringToArray";
function truncate(string, _a) {
    var _b = _a.length, length = _b === void 0 ? 30 : _b, _c = _a.omission, omission = _c === void 0 ? "..." : _c, separator = _a.separator;
    var strSymbols = [];
    var strLength = string.length;
    if (hasUnicode(string)) {
        strSymbols = stringToArray(string);
        strLength = strSymbols.length;
    }
    if (length >= strLength) {
        return string;
    }
    var end = length - stringSize(omission);
    if (end < 1) {
        return omission;
    }
    var result = strSymbols.length > 0 ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
    if (separator === undefined) {
        return result + omission;
    }
    if (strSymbols.length > 0) {
        end += result.length - end;
    }
    if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
            var match = void 0;
            var newEnd = void 0;
            var substring = result;
            if (!separator.global) {
                separator = RegExp(separator.source, "".concat(reFlags.exec(separator.toString()) || "", "g"));
            }
            separator.lastIndex = 0;
            while ((match = separator.exec(substring))) {
                newEnd = match.index;
            }
            result = result.slice(0, newEnd === undefined ? end : newEnd);
        }
    }
    else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
            result = result.slice(0, index);
        }
    }
    return result + omission;
}
export default truncate;
