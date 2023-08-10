import baseValues from "./_internal/_baseValues";
import keys from "./#keys";
function values(object) {
    return object == null ? [] : baseValues(object, keys(object));
}
export default values;
