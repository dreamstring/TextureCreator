import copyArray from "./_internal/_copyArray";
function shuffle(array) {
    var length = array == null ? 0 : array.length;
    if (!length) {
        return [];
    }
    var index = -1;
    var lastIndex = length - 1;
    var result = copyArray(array);
    while (++index < length) {
        var rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
        var value = result[rand];
        result[rand] = result[index];
        result[index] = value;
    }
    return result;
}
export default shuffle;
