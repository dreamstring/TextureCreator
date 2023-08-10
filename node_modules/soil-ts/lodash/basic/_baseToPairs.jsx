import map from "../#map";
function baseToPairs(object, props) {
    return map(props, function (key) { return [key, object[key]]; });
}
export default baseToPairs;
