import baseClone from "./_internal/_baseClone";
import baseMatches from "./_internal/_baseMatches";
function matches(source) {
    return baseMatches(baseClone(source, true));
}
export default matches;
