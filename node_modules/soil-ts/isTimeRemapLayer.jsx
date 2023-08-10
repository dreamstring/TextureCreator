import createIsAVLayer from "./_internal/_createIsAVLayer";
var isTimeRemapLayer = createIsAVLayer(function (layer) { return layer.timeRemapEnabled; });
export default isTimeRemapLayer;
