import { charCodeOfDot, reEscapeChar, rePropName } from "../basic/_global";
import trimString from "./_trimString";
function stringToPath(string) {
    var result = [];
    if (string.charCodeAt(0) === charCodeOfDot) {
        result.push("");
    }
    string.replace(rePropName, function (match, expression, quote, subString) {
        var key = match;
        if (quote) {
            key = subString.replace(reEscapeChar, "$1");
        }
        else if (expression) {
            key = trimString(expression);
        }
        result.push(key);
    });
    return result;
}
export default stringToPath;
