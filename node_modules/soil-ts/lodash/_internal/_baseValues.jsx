import map from "../#map";
function baseValues(object, props) {
    return map(props, function (key) { return object[key]; });
}
export default baseValues;
