import baseIndexOf from "./_baseIndexOf";
function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1;
    var length = strSymbols.length;
    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) { }
    return index;
}
export default charsStartIndex;
