import get from "../lodash/#get";
function createGetAppProperty(path) {
    return function () {
        return get(app, path);
    };
}
export default createGetAppProperty;
