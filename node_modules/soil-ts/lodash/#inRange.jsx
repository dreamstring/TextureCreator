import baseInRange from "./_internal/_baseInRange";
function inRange(number, start, end) {
    if (end === undefined) {
        end = start;
        start = 0;
    }
    return baseInRange(+number, +start, +end);
}
export default inRange;
