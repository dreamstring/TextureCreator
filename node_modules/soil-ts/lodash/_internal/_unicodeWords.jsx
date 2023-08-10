import { reUnicodeWords } from "../basic/_global";
import filter from "../#filter";
function unicodeWords(string) {
    var matched = string.match(reUnicodeWords);
    return matched ? filter(matched, function (string) { return string !== ""; }) : null;
}
export default unicodeWords;
