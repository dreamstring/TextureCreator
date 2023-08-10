function startsWith(string, target, position) {
    var length = string.length;
    position = position == null ? 0 : position;
    if (position < 0) {
        position = 0;
    }
    else if (position > length) {
        position = length;
    }
    target = "".concat(target);
    return string.slice(position, position + target.length) == target;
}
export default startsWith;
