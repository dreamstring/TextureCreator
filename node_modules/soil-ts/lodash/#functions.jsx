import filter from "./#filter";
import keys from "./#keys";
function functions(object) {
    if (object == null) {
        return [];
    }
    var props = keys(object);
    return filter(props, function (key) { return typeof object[key] === "function"; });
}
export default functions;
