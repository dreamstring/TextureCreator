function stringToBinary(string) {
    var codePoint = string.charCodeAt(0);
    var binaryCode = codePoint.toString(2);
    return "0000000000000000".substring(binaryCode.length) + binaryCode;
}
export default stringToBinary;
