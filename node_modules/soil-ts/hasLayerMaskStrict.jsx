import baseGetLayerMaskProperty from "./_internal/_baseGetLayerMaskProperty";
import isRasterLayer from "./isRasterLayer";
function hasLayerMaskStrict(layer) {
    if (!isRasterLayer(layer)) {
        return false;
    }
    var maskParade = baseGetLayerMaskProperty(layer);
    var numProperties = maskParade.numProperties;
    if (numProperties === 0) {
        return false;
    }
    var index = 0;
    var length = numProperties + 1;
    while (++index < length) {
        var property = maskParade.property(index);
        if (property.maskMode !== MaskMode.NONE) {
            return true;
        }
    }
    return false;
}
export default hasLayerMaskStrict;
