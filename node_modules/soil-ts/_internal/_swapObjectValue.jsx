function swapObjectValue(object, prop1, prop2) {
    var prev = object[prop1];
    var next = object[prop2];
    object[prop1] = next;
    object[prop2] = prev;
}
export default swapObjectValue;
