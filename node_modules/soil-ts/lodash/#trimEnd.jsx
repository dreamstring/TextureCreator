import castSlice from "./_internal/_castSlice";
import charsEndIndex from "./_internal/_charsEndIndex";
import stringToArray from "./_internal/_stringToArray";
function trimEnd(string, chars) {
    if (string && chars === undefined) {
        return string.replace(/\s+$/, "");
    }
    if (!string || !chars) {
        return string || "";
    }
    var strSymbols = stringToArray(string);
    var end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
    return castSlice(strSymbols, 0, end).join("");
}
export default trimEnd;
