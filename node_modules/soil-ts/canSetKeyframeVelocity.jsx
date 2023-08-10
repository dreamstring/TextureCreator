import isHoldInterpolationTypeOnly from "./_internal/_isHoldInterpolationTypeOnly";
function canSetKeyframeVelocity(property) {
    return !isHoldInterpolationTypeOnly(property);
}
export default canSetKeyframeVelocity;
