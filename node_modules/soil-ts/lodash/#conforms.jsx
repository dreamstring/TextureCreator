import baseClone from "./_internal/_baseClone";
import baseConforms from "./_internal/_baseConforms";
function conforms(source) {
    return baseConforms(baseClone(source, true));
}
export default conforms;
