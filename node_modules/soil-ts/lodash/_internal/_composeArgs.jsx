function composeArgs(args, partials, holders, isCurried) {
    var argsLength = args.length;
    var holdersLength = holders.length;
    var leftLength = partials.length;
    var argsIndex = -1;
    var leftIndex = -1;
    var rangeLength = Math.max(argsLength - holdersLength, 0);
    var result = new Array(leftLength + rangeLength);
    var isUncurried = !isCurried;
    while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
    }
    while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
            result[holders[argsIndex]] = args[argsIndex];
        }
    }
    while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
    }
    return result;
}
export default composeArgs;
