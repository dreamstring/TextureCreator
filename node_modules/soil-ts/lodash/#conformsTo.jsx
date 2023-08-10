import baseConformsTo from "./_internal/_baseConformsTo";
import keys from "./#keys";
function conformsTo(object, source) {
    return source == null || baseConformsTo(object, source, keys(source));
}
export default conformsTo;
