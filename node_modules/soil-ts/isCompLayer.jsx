import createIsAVLayer from "./_internal/_createIsAVLayer";
import isCompItem from "./isCompItem";
var isCompLayer = createIsAVLayer(function (layer) { return isCompItem(layer.source); });
export default isCompLayer;
