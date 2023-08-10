import isFootageItem from "./isFootageItem";
import isSolidSource from "./isSolidSource";
function isSolidItem(item) {
    return isFootageItem(item) && isSolidSource(item.mainSource);
}
export default isSolidItem;
