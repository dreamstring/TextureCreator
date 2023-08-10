function trimPathRight(path, length) {
    var pathPartial = path.replace(/(\\\\|\\)/g, "/").split("/");
    return pathPartial.slice(0, -length).join("/");
}
export default trimPathRight;
