import castSlice from "./_internal/_castSlice";
import charsEndIndex from "./_internal/_charsEndIndex";
import charsStartIndex from "./_internal/_charsStartIndex";
import stringToArray from "./_internal/_stringToArray";
import trimString from "./_internal/_trimString";
function trim(string, chars) {
    if (string && chars === undefined) {
        return trimString(string);
    }
    if (!string || !chars) {
        return string || "";
    }
    var strSymbols = stringToArray(string);
    var chrSymbols = stringToArray(chars);
    var start = charsStartIndex(strSymbols, chrSymbols);
    var end = charsEndIndex(strSymbols, chrSymbols) + 1;
    return castSlice(strSymbols, start, end).join("");
}
export default trim;
