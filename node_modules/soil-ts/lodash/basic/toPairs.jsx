import baseToPairs from "./_baseToPairs";
import keys from "../#keys";
function toPairs(object) {
    return baseToPairs(object, keys(object));
}
export default toPairs;
