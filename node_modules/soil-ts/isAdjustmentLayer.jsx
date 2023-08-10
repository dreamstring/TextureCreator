import createIsAVLayer from "./_internal/_createIsAVLayer";
var isAdjustmentLayer = createIsAVLayer(function (layer) { return layer.adjustmentLayer; });
export default isAdjustmentLayer;
