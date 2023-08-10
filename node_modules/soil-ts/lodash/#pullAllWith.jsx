import basePullAll from "./_internal/_basePullAll";
function pullAllWith(array, values, comparator) {
    return array != null && array.length && values != null && values.length ? basePullAll(array, values, undefined, comparator) : array;
}
export default pullAllWith;
