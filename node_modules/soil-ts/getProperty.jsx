import isString from "./lodash/#isString";
import baseGetPropertyByIndex from "./_internal/_baseGetPropertyByIndex";
import isAddableProperty from "./isAddableProperty";
function getProperty(rootProperty, path) {
    var index = 0;
    var length = path.length;
    var nested = rootProperty;
    while (nested && isAddableProperty(nested) && index < length) {
        var name = path[index++];
        nested = isString(name) ? nested.property(name) : baseGetPropertyByIndex(nested, name);
    }
    return index && index === length ? nested : undefined;
}
export default getProperty;
