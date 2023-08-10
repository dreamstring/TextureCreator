import every from "./lodash/#every";
function equalEvery(array) {
    if (array.length === 0) {
        return false;
    }
    var target = array[0];
    return every(array, function (element) {
        return element === target;
    });
}
export default equalEvery;
