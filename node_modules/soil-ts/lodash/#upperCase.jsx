import words from "./#words";
import toString from "./#toString";
import reduce from "./#reduce";
function upperCase(string) {
    return reduce(words(toString(string).replace(/['\u2019]/g, "")), function (result, word, index) { return result + (index ? " " : "") + word.toUpperCase(); }, "");
}
export default upperCase;
