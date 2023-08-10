import toFinite from "./#toFinite";
function toInteger(value) {
    var result = toFinite(value);
    var remainder = result % 1;
    return remainder ? result - remainder : result;
}
export default toInteger;
