import isLayer from "./isLayer";
function isNullLayer(value) {
    return isLayer(value) && value.nullLayer;
}
export default isNullLayer;
