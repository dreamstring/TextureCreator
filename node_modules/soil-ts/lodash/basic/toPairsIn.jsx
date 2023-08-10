import baseToPairs from "./_baseToPairs";
import keysIn from "../#keysIn";
function toPairsIn(object) {
    return baseToPairs(object, keysIn(object));
}
export default toPairsIn;
