import has from "./lodash/#has";
import isCompItem from "./isCompItem";
function isLayer(value) {
    return has(value, "containingComp") && isCompItem(value.containingComp) && value.parentProperty === null && value.propertyDepth === 0;
}
export default isLayer;
