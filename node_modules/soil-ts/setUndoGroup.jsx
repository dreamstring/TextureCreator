function setUndoGroup(undoString, func) {
    app.beginUndoGroup(undoString);
    func();
    app.endUndoGroup();
}
export default setUndoGroup;
