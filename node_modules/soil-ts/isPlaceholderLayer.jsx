import createIsAVLayer from "./_internal/_createIsAVLayer";
import isPlaceholderItem from "./isPlaceholderItem";
var isPlaceholderLayer = createIsAVLayer(function (layer) { return isPlaceholderItem(layer.source); });
export default isPlaceholderLayer;
