import createIsAVLayer from "./_internal/_createIsAVLayer";
import isImportedItem from "./isImportedItem";
var isImportedLayer = createIsAVLayer(function (layer) { return isImportedItem(layer.source); });
export default isImportedLayer;
