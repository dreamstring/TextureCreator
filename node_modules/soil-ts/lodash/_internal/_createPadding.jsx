import baseToString from "./_baseToString";
import castSlice from "./_castSlice";
import hasUnicode from "./_hasUnicode";
import stringSize from "./_stringSize";
import stringToArray from "./_stringToArray";
import repeat from "../#repeat";
function createPadding(length, chars) {
    chars = chars === undefined ? " " : baseToString(chars);
    var charsLength = chars.length;
    if (charsLength < 2) {
        return charsLength ? repeat(chars, length) : chars;
    }
    var result = repeat(chars, Math.ceil(length / stringSize(chars)));
    return hasUnicode(chars) ? castSlice(stringToArray(result), 0, length).join("") : result.slice(0, length);
}
export default createPadding;
