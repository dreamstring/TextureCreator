import getValidInterpolationTypes from "./_getValidInterpolationTypes";
function isHoldInterpolationTypeOnly(property) {
    var validInterpolationTypes = getValidInterpolationTypes(property);
    return validInterpolationTypes.length === 1 && validInterpolationTypes[0] === KeyframeInterpolationType.HOLD;
}
export default isHoldInterpolationTypeOnly;
