import { nativeSlice } from "./_global";
import get from "../#get";
function parent(object, path) {
    return path.length < 2 ? object : get(object, nativeSlice.call(path, 0, -1));
}
export default parent;
