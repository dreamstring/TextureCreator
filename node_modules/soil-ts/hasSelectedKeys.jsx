import hasKeyframes from "./hasKeyframes";
function hasSelectedKeys(property) {
    return hasKeyframes(property) && property.selectedKeys.length > 0;
}
export default hasSelectedKeys;
