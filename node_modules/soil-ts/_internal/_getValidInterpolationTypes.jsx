import { PROPERTY_INTERPOLATION_TYPE } from "./_global";
import filter from "../lodash/#filter";
function getValidInterpolationTypes(property) {
    return filter(PROPERTY_INTERPOLATION_TYPE, function (enumNumber) {
        return property.isInterpolationTypeValid(enumNumber);
    });
}
export default getValidInterpolationTypes;
