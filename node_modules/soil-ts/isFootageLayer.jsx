import createIsAVLayer from "./_internal/_createIsAVLayer";
import isFootageItem from "./isFootageItem";
var isFootageLayer = createIsAVLayer(function (layer) { return isFootageItem(layer.source); });
export default isFootageLayer;
