import addProperty from "./addProperty";
import isProperty from "./isProperty";
function setPropertyValue(rootProperty, path, value) {
    var property = addProperty(rootProperty, path);
    if (isProperty(property)) {
        property.setValue(value);
        return property;
    }
}
export default setPropertyValue;
