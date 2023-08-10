import reduce from "./#reduce";
import toString from "./#toString";
import upperFirst from "./#upperFirst";
import words from "./#words";
function camelCase(string) {
    return reduce(words(toString(string).replace(/['\u2019]/g, "")), function (result, word, index) {
        word = word.toLowerCase();
        return result + (index ? upperFirst(word) : word);
    }, "");
}
export default camelCase;
