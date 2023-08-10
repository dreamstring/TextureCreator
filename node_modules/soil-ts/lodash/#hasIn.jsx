function hasIn(object, key) {
    return object != null && key in Object(object);
}
export default hasIn;
