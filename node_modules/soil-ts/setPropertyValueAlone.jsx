import addPropertyAlone from "./addPropertyAlone";
import isProperty from "./isProperty";
function setPropertyValueAlone(rootProperty, path, value) {
    var property = addPropertyAlone(rootProperty, path);
    if (isProperty(property)) {
        property.setValue(value);
        return property;
    }
}
export default setPropertyValueAlone;
