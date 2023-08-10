function binaryToHex(binary) {
    var decimalCode = parseInt(binary, 2);
    var hexCode = decimalCode.toString(16).toUpperCase();
    return "00".substring(hexCode.length) + hexCode;
}
export default binaryToHex;
