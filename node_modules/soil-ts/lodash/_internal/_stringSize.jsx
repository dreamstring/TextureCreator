import asciiSize from "./_asciiSize";
import hasUnicode from "./_hasUnicode";
import unicodeSize from "./_unicodeSize";
function stringSize(string) {
    return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
}
export default stringSize;
