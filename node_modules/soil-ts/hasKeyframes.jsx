import isProperty from "./isProperty";
function hasKeyframes(property) {
    return isProperty(property) && property.numKeys > 0;
}
export default hasKeyframes;
