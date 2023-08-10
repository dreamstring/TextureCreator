import castSlice from "./_internal/_castSlice";
import charsStartIndex from "./_internal/_charsStartIndex";
import stringToArray from "./_internal/_stringToArray";
function trimStart(string, chars) {
    if (string && chars === undefined) {
        return string.replace(/^\s+/, "");
    }
    if (!string || !chars) {
        return string || "";
    }
    var strSymbols = stringToArray(string);
    var start = charsStartIndex(strSymbols, stringToArray(chars));
    return castSlice(strSymbols, start).join("");
}
export default trimStart;
