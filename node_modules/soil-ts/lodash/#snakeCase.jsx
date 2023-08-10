import reduce from "./#reduce";
import toString from "./#toString";
import words from "./#words";
function snakeCase(string) {
    return reduce(words(toString(string).replace(/['\u2019]/g, "")), function (result, word, index) {
        return result + (index ? "_" : "") + word.toLowerCase();
    }, "");
}
export default snakeCase;
