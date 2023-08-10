import castSlice from "./_castSlice";
import hasUnicode from "./_hasUnicode";
import stringToArray from "./_stringToArray";
function createCaseFirst(methodName) {
    return function (string) {
        if (!string) {
            return "";
        }
        var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;
        var chr = strSymbols ? strSymbols[0] : string[0];
        var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
        return chr[methodName]() + trailing;
    };
}
export default createCaseFirst;
