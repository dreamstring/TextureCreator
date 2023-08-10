import isAVLayer from "./isAVLayer";
import isShapeLayer from "./isShapeLayer";
import isTextLayer from "./isTextLayer";
function isRasterLayer(layer) {
    return isAVLayer(layer) || isShapeLayer(layer) || isTextLayer(layer);
}
export default isRasterLayer;
