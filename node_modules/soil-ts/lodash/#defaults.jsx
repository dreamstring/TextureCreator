import { nativeSlice, objectProto } from "./basic/_global";
import eq from "./#eq";
import forEach from "./#forEach";
import has from "./#has";
function defaults(object) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    var values = nativeSlice.call(arguments, 1);
    object = Object(object);
    forEach(values, function (source) {
        if (source != null) {
            source = Object(source);
            for (var key in source) {
                var value = object[key];
                if (value === undefined || (eq(value, objectProto[key]) && !has(object, key))) {
                    object[key] = source[key];
                }
            }
        }
    });
    return object;
}
export default defaults;
