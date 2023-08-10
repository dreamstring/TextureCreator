import isLayer from "./isLayer";
import isMaskPropertyGroup from "./isMaskPropertyGroup";
import isPropertyGroup from "./isPropertyGroup";
function isAddableProperty(value) {
    return isPropertyGroup(value) || isMaskPropertyGroup(value) || isLayer(value);
}
export default isAddableProperty;
