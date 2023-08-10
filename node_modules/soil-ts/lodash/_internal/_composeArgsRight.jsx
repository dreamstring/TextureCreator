function composeArgsRight(args, partials, holders, isCurried) {
    var argsIndex = -1;
    var holdersIndex = -1;
    var rightIndex = -1;
    var argsLength = args.length;
    var holdersLength = holders.length;
    var rightLength = partials.length;
    var rangeLength = Math.max(argsLength - holdersLength, 0);
    var result = new Array(rangeLength + rightLength);
    var isUncurried = !isCurried;
    while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
    }
    var offset = argsIndex;
    while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
    }
    while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
            result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
    }
    return result;
}
export default composeArgsRight;
