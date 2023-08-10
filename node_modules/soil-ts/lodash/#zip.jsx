import unzip from "./#unzip";
function zip() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    return unzip(arrays);
}
export default zip;
