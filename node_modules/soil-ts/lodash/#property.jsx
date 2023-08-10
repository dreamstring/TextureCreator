import baseProperty from "./_internal/_baseProperty";
import basePropertyDeep from "./_internal/_basePropertyDeep";
import isKey from "./_internal/_isKey";
import toKey from "./_internal/_toKey";
function property(path) {
    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
export default property;
