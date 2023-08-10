import { nativeSlice } from "./basic/_global";
import defaultTo from "./#defaultTo";
import reduce from "./#reduce";
function defaultToAny(value) {
    var defaultValues = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        defaultValues[_i - 1] = arguments[_i];
    }
    var values = nativeSlice.call(arguments, 1);
    return reduce(values, defaultTo, value);
}
export default defaultToAny;
