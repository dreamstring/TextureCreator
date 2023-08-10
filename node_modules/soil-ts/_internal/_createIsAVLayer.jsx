import isAVLayer from "../isAVLayer";
function createIsAVLayer(callback) {
    return function (value) { return isAVLayer(value) && callback(value); };
}
export default createIsAVLayer;
