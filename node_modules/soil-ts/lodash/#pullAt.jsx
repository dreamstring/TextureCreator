import baseAt from "./_internal/_baseAt";
import basePullAt from "./_internal/_basePullAt";
import compareAscending from "./_internal/_compareAscending";
import isIndex from "./_internal/_isIndex";
import map from "./#map";
import { nativeSlice } from "./basic/_global";
function pullAt(array) {
    var indexes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        indexes[_i - 1] = arguments[_i];
    }
    var values = nativeSlice.call(arguments, 1);
    var length = array == null ? 0 : array.length;
    var result = baseAt(array, values);
    basePullAt(array, map(values, function (index) { return (isIndex(index, length) ? +index : index); }).sort(compareAscending));
    return result;
}
export default pullAt;
