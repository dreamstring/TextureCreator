import baseOrderBy from "./_internal/_baseOrderBy";
function orderBy(array, iteratees, orders) {
    if (array == null) {
        return [];
    }
    return baseOrderBy(array, iteratees, orders);
}
export default orderBy;
