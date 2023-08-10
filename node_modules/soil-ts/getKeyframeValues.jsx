import stubTrue from "./lodash/basic/stubTrue";
import isFunction from "./lodash/#isFunction";
import times from "./lodash/#times";
import getKeyframeValueByIndex from "./_internal/_getKeyframeValueByIndex";
import isCustomValueProperty from "./isCustomValueProperty";
function getKeyframeValues(property, predicate) {
    var func = isFunction(predicate) ? predicate : stubTrue;
    var isSpatialValue = property.isSpatial;
    var isCustomValue = isCustomValueProperty(property);
    var result = [];
    times(property.numKeys, function (index) {
        var keyIndex = index + 1;
        if (func(property, keyIndex)) {
            result.push(getKeyframeValueByIndex(property, keyIndex, isSpatialValue, isCustomValue));
        }
    });
    return result;
}
export default getKeyframeValues;
