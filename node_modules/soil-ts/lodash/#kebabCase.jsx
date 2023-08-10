import reduce from "./#reduce";
import toString from "./#toString";
import words from "./#words";
function kebabCase(string) {
    return reduce(words(toString(string).replace(/['\u2019]/g, "")), function (result, word, index) { return result + (index ? "-" : "") + word.toLowerCase(); }, "");
}
export default kebabCase;
