import forOwn from "./lodash/#forOwn";
import canSetPropertyValue from "./canSetPropertyValue";
function setPropertiesValues(propertyGroup, values) {
    forOwn(values, function (value, matchName) {
        var property = propertyGroup.property(matchName);
        if (canSetPropertyValue(property)) {
            property.setValue(value);
        }
    });
}
export default setPropertiesValues;
