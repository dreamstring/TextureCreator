import isVisibleWindow from "./isVisibleWindow";
function buildSingletonWindow(callback) {
    var window = null;
    return function () {
        return isVisibleWindow(window) ? window : (window = callback.apply(null, arguments));
    };
}
export default buildSingletonWindow;
