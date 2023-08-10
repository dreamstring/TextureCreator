import { reAsciiWord, reHasUnicodeWord } from "./basic/_global";
import filter from "./#filter";
import unicodeWords from "./_internal/_unicodeWords";
function asciiWords(string) {
    var matched = string.match(reAsciiWord);
    return matched ? filter(matched, function (string) { return string !== ""; }) : null;
}
function words(string, pattern) {
    if (pattern === undefined) {
        var result = reHasUnicodeWord.test(string) ? unicodeWords(string) : asciiWords(string);
        return result || [];
    }
    return string.match(pattern) || [];
}
export default words;
