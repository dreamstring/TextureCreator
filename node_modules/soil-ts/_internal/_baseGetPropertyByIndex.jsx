function baseGetPropertyByIndex(value, index) {
    return 0 < index && index <= value.numProperties ? value.property(index) : null;
}
export default baseGetPropertyByIndex;
