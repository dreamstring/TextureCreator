import createIsAVLayer from "./_internal/_createIsAVLayer";
var isEnvironmentLayer = createIsAVLayer(function (layer) { return layer.environmentLayer; });
export default isEnvironmentLayer;
