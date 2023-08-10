import createIsAVLayer from "./_internal/_createIsAVLayer";
var isGuideLayer = createIsAVLayer(function (layer) { return layer.guideLayer; });
export default isGuideLayer;
