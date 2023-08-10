import get from "./lodash/#get";
function setViewRatio(value) {
    var viewOptions = get(app, ["activeViewer", "views", "0", "options"]);
    if (viewOptions) {
        viewOptions.zoom = value;
    }
}
export default setViewRatio;
