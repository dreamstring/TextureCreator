import reduce from "./#reduce";
import upperFirst from "./#upperFirst";
import words from "./#words";
function startCase(string) {
    return reduce(words("".concat(string).replace(/['\u2019]/g, "")), function (result, word, index) { return result + (index ? " " : "") + upperFirst(word); }, "");
}
export default startCase;
