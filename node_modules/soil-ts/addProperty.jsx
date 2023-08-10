import isAddableProperty from "./isAddableProperty";
function addProperty(rootProperty, path) {
    var index = 0;
    var length = path.length;
    var nested = rootProperty;
    while (nested && isAddableProperty(nested) && index < length) {
        var name = path[index++];
        var next = nested.property(name);
        if (next) {
            nested = next;
        }
        else if (nested.canAddProperty(name)) {
            nested = nested.addProperty(name);
        }
    }
    return index && index === length ? nested : undefined;
}
export default addProperty;
