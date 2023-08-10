import baseConformsTo from "./_baseConformsTo";
import keys from "../#keys";
function baseConforms(source) {
    var props = keys(source);
    return function (object) { return baseConformsTo(object, source, props); };
}
export default baseConforms;
