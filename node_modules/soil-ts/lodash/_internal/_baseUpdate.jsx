import baseGet from "./_baseGet";
import baseSet from "./_baseSet";
function baseUpdate(object, path, updater, customizer) {
    return baseSet(object, path, updater(baseGet(object, path)), customizer);
}
export default baseUpdate;
