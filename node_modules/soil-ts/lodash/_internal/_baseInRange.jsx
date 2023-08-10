function baseInRange(number, start, end) {
    return number >= Math.min(start, end) && number < Math.max(start, end);
}
export default baseInRange;
