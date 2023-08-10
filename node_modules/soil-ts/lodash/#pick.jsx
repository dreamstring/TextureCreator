import basePick from "./_internal/_basePick";
function pick(object) {
    var paths = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        paths[_i - 1] = arguments[_i];
    }
    return object == null ? {} : basePick(object, paths);
}
export default pick;
