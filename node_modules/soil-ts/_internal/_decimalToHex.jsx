function decimalToHex(decimal) {
    var hexCode = decimal.toString(16).toUpperCase();
    return "00".substring(hexCode.length) + hexCode;
}
export default decimalToHex;
