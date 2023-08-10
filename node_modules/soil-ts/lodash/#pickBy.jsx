import basePickBy from "./_internal/_basePickBy";
import keysIn from "./#keysIn";
import map from "./#map";
function pickBy(object, predicate) {
    if (object == null) {
        return {};
    }
    var props = map(keysIn(object), function (prop) { return [prop]; });
    return basePickBy(object, props, function (value, path) { return predicate(value, path[0]); });
}
export default pickBy;
