import createIsAVLayer from "./_internal/_createIsAVLayer";
import isSequenceItem from "./isSequenceItem";
var isSequenceLayer = createIsAVLayer(function (layer) { return isSequenceItem(layer.source); });
export default isSequenceLayer;
