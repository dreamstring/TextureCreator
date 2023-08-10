import getActiveItem from "./getActiveItem.jsx";
import isCompItem from "./isCompItem.jsx";
function getActiveComp() {
    var item = getActiveItem();
    return isCompItem(item) ? item : undefined;
}
export default getActiveComp;
