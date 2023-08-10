import { htmlUnescapes, reEscapedHtml, reHasEscapedHtml } from "./basic/_global";
function unescape(string) {
    return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, function (entity) { return htmlUnescapes[entity] || "'"; }) : string || "";
}
export default unescape;
