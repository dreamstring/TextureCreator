import forOwn from "./lodash/#forOwn";
import isProperty from "./isProperty";
function assignPropertyValues(propertyGroup, values) {
    forOwn(values, function (value, matchName) {
        var property = propertyGroup.property(matchName);
        if (isProperty(property)) {
            property.setValue(value);
        }
    });
    return propertyGroup;
}
export default assignPropertyValues;
