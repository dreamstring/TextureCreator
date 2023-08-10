function sample(array) {
    var length = array == null ? 0 : array.length;
    return length ? array[Math.floor(Math.random() * length)] : undefined;
}
export default sample;
