import { reQuotes } from "./basic/_global";
import reduce from "./#reduce";
import toString from "./#toString";
import words from "./#words";
function lowerCase(string) {
    return reduce(words(toString(string).replace(reQuotes, "")), function (result, word, index) { return result + (index ? " " : "") + word.toLowerCase(); }, "");
}
export default lowerCase;
