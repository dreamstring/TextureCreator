import map from "../lodash/#map";
function mapTemporalEaseValueToClasses(keyTemporalEaseValue) {
    return map(keyTemporalEaseValue, function (keyframeEase) {
        var speed = keyframeEase.speed;
        var influence = keyframeEase.influence;
        return new KeyframeEase(speed, influence === 0 ? 0.1 : influence);
    });
}
export default mapTemporalEaseValueToClasses;
