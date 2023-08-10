import baseIndexOf from "./_baseIndexOf";
function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;
    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) { }
    return index;
}
export default charsEndIndex;
