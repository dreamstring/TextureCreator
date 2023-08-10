import invoke from "./#invoke";
function methodOf(object, args) {
    return function (path) {
        return invoke(object, path, args);
    };
}
export default methodOf;
