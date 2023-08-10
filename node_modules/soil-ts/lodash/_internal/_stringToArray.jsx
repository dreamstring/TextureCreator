import asciiToArray from "./_asciiToArray";
import hasUnicode from "./_hasUnicode";
import unicodeToArray from "./_unicodeToArray";
function stringToArray(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}
export default stringToArray;
