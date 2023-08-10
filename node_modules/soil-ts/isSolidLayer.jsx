import isAVLayer from "./isAVLayer";
import isSolidSource from "./isSolidSource";
function isSolidLayer(value) {
    return isAVLayer(value) && isSolidSource(value.source.mainSource);
}
export default isSolidLayer;
