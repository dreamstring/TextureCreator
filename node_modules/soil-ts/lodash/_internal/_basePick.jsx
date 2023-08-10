import basePickBy from "./_basePickBy";
import hasIn from "../#hasIn.js";
function basePick(object, paths) {
    return basePickBy(object, paths, function (value, path) { return hasIn(object, path); });
}
export default basePick;
