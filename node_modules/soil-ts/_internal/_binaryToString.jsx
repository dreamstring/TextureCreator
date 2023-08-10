function binaryToString(binary) {
    var decimalCode = parseInt(binary, 2);
    return String.fromCharCode(decimalCode);
}
export default binaryToString;
