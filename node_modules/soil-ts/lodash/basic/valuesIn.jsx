import baseValues from "./_baseValues.jsx";
import keysIn from "../#keysIn";
function valuesIn(object) {
    return object == null ? [] : baseValues(object, keysIn(object));
}
export default valuesIn;
