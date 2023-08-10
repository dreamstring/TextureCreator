function endsWith(string, target, position) {
    var length = string.length;
    position = position === undefined ? length : +position;
    if (position < 0 || position != position) {
        position = 0;
    }
    else if (position > length) {
        position = length;
    }
    var end = position;
    position -= target.length;
    return position >= 0 && string.slice(position, end) == target;
}
export default endsWith;
