import basePullAll from "./_internal/_basePullAll";
function pullAll(array, values) {
    return array != null && array.length && values != null && values.length ? basePullAll(array, values) : array;
}
export default pullAll;
