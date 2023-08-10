import { nativeSlice } from "./basic/_global";
import flow from "./#flow";
function flowRight() {
    var func = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        func[_i] = arguments[_i];
    }
    return flow.apply(null, nativeSlice.call(arguments).reverse());
}
export default flowRight;
