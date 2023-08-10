import map from "./lodash/#map";
import swapObjectValue from "./_internal/_swapObjectValue";
function reverseKeyframeValues(keyframeValues, reverseKeyTime) {
    if (reverseKeyTime === void 0) { reverseKeyTime = true; }
    var keyTimes = map(keyframeValues, function (keyframe) { return keyframe.keyTime; });
    keyTimes = reverseKeyTime ? keyTimes.reverse() : keyTimes;
    keyframeValues = map(keyframeValues, function (keyframe, index) {
        keyframe.keyTime = keyTimes[index];
        swapObjectValue(keyframe, "keyInTemporalEase", "keyOutTemporalEase");
        swapObjectValue(keyframe, "keyInInterpolationType", "keyOutInterpolationType");
        swapObjectValue(keyframe, "keyInSpatialTangent", "keyOutSpatialTangent");
        return keyframe;
    }).reverse();
    return keyframeValues;
}
export default reverseKeyframeValues;
