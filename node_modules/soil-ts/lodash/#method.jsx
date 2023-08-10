import invoke from "./#invoke";
function method(path, args) {
    return function (object) { return invoke(object, path, args); };
}
export default method;
