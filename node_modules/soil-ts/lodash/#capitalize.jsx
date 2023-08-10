import toString from "./#toString";
import upperFirst from "./#upperFirst";
var capitalize = function (string) { return upperFirst(toString(string).toLowerCase()); };
export default capitalize;
