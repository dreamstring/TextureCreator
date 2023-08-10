import slice from "../#slice";
function castSlice(array, start, end) {
    var length = array.length;
    end = end === undefined ? length : end;
    return !start && end >= length ? array : slice(array, start, end);
}
export default castSlice;
