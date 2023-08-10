import isAddableProperty from "./isAddableProperty";
function addPropertyAlone(rootProperty, path) {
    var index = 0;
    var length = path.length;
    var nested = rootProperty;
    while (nested && isAddableProperty(nested) && index < length) {
        var name = String(path[index++]);
        nested = nested.canAddProperty(name) ? nested.addProperty(name) : nested.property(name);
    }
    return index && index === length ? nested : undefined;
}
export default addPropertyAlone;
