import { nativeConcat, nativeSlice } from "./lodash/basic/_global";
import assign from "./lodash/basic/assign";
import contains from "./lodash/basic/contains";
import isArray from "./lodash/basic/isArray";
import stubFalse from "./lodash/basic/stubFalse";
import uniq from "./lodash/#uniq";
import clone from "./lodash/#clone";
import forEach from "./lodash/#forEach";
import forOwn from "./lodash/#forOwn";
import has from "./lodash/#has";
import isNil from "./lodash/#isNil";
import isNull from "./lodash/#isNull";
import isObject from "./lodash/#isObject";
import map from "./lodash/#map";
import some from "./lodash/#some";
import isPanel from "./isPanel";
import isWindow from "./isWindow";
var root = this;
var global = $.global;
var tree = { version: "beta 1.0.0", parse: runInContext, windows: [] };
var layoutModeFlags = [0, 1, 2];
var validContainerType = ["dialog", "palette", "window"];
var mainContainerDefault = { dockable: true, show: true, singleton: false };
var controlParamRef = {
    button: 3,
    checkbox: 3,
    dropdownlist: 3,
    edittext: 3,
    iconbutton: 3,
    image: 3,
    listbox: 3,
    progressbar: 4,
    radiobutton: 3,
    scrollbar: 5,
    slider: 5,
    statictext: 3,
    treeview: 3
};
var containerParamRef = { group: 2, panel: 3, tab: 3, tabbedpanel: 3 };
var elementTypeFlags = {
    button: "A",
    checkbox: "B",
    dialog: "C",
    dropdownlist: "D",
    edittext: "E",
    group: "G",
    iconbutton: "H",
    image: "I",
    item: "J",
    listbox: "K",
    node: "L",
    palette: "M",
    panel: "N",
    progressbar: "O",
    radiobutton: "P",
    scrollbar: "Q",
    slider: "R",
    statictext: "S",
    tab: "T",
    tabbedpanel: "U",
    treeview: "V",
    window: "W"
};
var reCombination = /[CGMNTW][ABDEFGHIKNOPQRSUV]|[DK]J|[VL][LJ]|UT/, reContainer = /[DGKLNTUV]/, reListItemContainer = /[DKLV]/, reSelectableElement = /[DKUV]/, reNativeContainer = /[GNTU]/, reNativeControl = /[ABDEHIKOPQRSV]/;
var isContainer = createIsElementFlag(reContainer), isListItemContainer = createIsElementFlag(reListItemContainer), isNativeContainer = createIsElementFlag(reNativeContainer), isNativeControl = createIsElementFlag(reNativeControl), isSelectableElement = createIsElementFlag(reSelectableElement);
function addContainer(container, value, flag, collector) {
    return flag == "node" ? addNodeContainer(container, value, flag, collector) : addGeneralContainer(container, value, flag, collector);
}
function addControl(container, value, key, collector) {
    var element = isListItemContainer(container.type) ? addListItem(container, value, key, collector) : addGeneralControl(container, value, key, collector);
    assign(element, getElementStyle(value));
}
function addGeneralContainer(container, value, flag, collector) {
    var style = getElementStyle(value);
    var newContainer = nativeAddContainer(container, flag, assignElementParam(value, flag));
    if (isSelectableElement(flag) && has(style, "selection")) {
        var value_1 = { container: newContainer, itemIndex: style.selection };
        collector.selectableElement.push(value_1);
        delete style["selection"];
        return assign(newContainer, style);
    }
    assign(newContainer, style);
    return newContainer;
}
function addGeneralControl(container, value, flag, collector) {
    return nativeAddControl(container, flag, assignElementParam(value, flag));
}
function addGetElementMethods(constructors) {
    forEach(constructors, function (constructor) {
        var prototype = constructor.prototype;
        prototype.getElementById = getElementById;
        prototype.getElementsByName = getElementsByName;
        prototype.getElementsByType = getElementsByType;
        freezeProperty(prototype, "getElementById");
        freezeProperty(prototype, "getElementsByName");
        freezeProperty(prototype, "getElementsByType");
    });
}
function addListItem(container, value, flag, collector) {
    return nativeAddNodeItem(container, getListItemParam(value));
}
function addNodeContainer(container, value, flag, collector) {
    var style = getElementStyle(value);
    var node = nativeAddNode(container, getListItemParam(value));
    if (style.expanded) {
        collector.nodeItems.push(node);
    }
    delete style["expanded"];
    assign(node, style);
    return node;
}
function assignContext(global, dockable, isSingletonWindow) {
    if (isSingletonWindow || !dockable) {
        return Window;
    }
    if (isValidContext(root)) {
        return root;
    }
    return isValidContext(global) ? global : Window;
}
function assignElementParam(value, flag) {
    return assignUniqueName(getElementParam(value), flag);
}
function assignLayoutMode(setAll, setAlone) {
    if (contains(layoutModeFlags, setAlone)) {
        return setAlone;
    }
    if (contains(layoutModeFlags, setAll)) {
        return setAll;
    }
    return 0;
}
function assignUniqueName(param, flag) {
    var name = param[0];
    if (isNil(name)) {
        return param;
    }
    var index = getCreationPropertiesIndex(flag);
    var creationProperties = param[index];
    if (!isObject(creationProperties)) {
        param[index] = {};
    }
    if (has(creationProperties, "name")) {
        return param;
    }
    param[index].name = name;
    return param;
}
function assignWindowType(param) {
    var type = String(param[0]);
    param[0] = contains(validContainerType, type) ? type : ["palette"];
    return param;
}
function baseGet(object, key) {
    return isNil(object) ? undefined : object[key];
}
function baseGetConfig(value) {
    return baseGet(value, "config");
}
function baseGetElementId(element) {
    var properties = element.properties;
    return properties && properties.name;
}
function baseGetListItemParam(value) {
    return baseGet(value, "param");
}
function baseGetParam(value) {
    var result = baseGet(value, "param");
    return isArray(result) ? mapNullToUndefined(result) : [];
}
function baseGetStyle(value) {
    var result = baseGet(value, "style");
    return isObject(result) ? result : {};
}
function buildNativeWindow(resource, context, showWindow, layoutMode) {
    var container = bulidElements(resource, context);
    initLayout(container, layoutMode);
    if (isWindow(container) && showWindow) {
        container.show();
    }
    return container;
}
function buildSingletonWindow(resource, context, showWindow, layoutMode) {
    var container;
    return function () {
        if (isInvisibleContainer(container)) {
            container = bulidElements(resource, context);
        }
        initLayout(container, layoutMode);
        if (isWindow(container) && showWindow) {
            container.show();
        }
        return container;
    };
}
function buildWindow(isSingletonWindow) {
    var func = isSingletonWindow ? buildSingletonWindow : buildNativeWindow;
    return func.apply(null, nativeSlice.call(arguments, 1));
}
function bulidElements(resource, context) {
    var container = initMainContainer(resource, context);
    var collector = { nodeItems: [], selectableElement: [] };
    parseElement(resource, container, collector);
    selectChildItem(collector.selectableElement);
    expandTreeViewNodes(collector.nodeItems);
    return container;
}
function castArray(value) {
    return isArray(value) ? value : [value];
}
function createIsElementFlag(regex) {
    return function (flag) {
        if (has(elementTypeFlags, flag)) {
            return regex.test(elementTypeFlags[flag]);
        }
        return false;
    };
}
function baseEachElement(containers, accumulator, breaker, predicate) {
    return some(containers, function (container) {
        var result = [];
        var isDone = some(container.children, function (element) {
            if (isNativeContainer(element.type)) {
                result.push(element);
            }
            if (predicate(element)) {
                accumulator.push(element);
            }
            return breaker(accumulator);
        });
        return isDone ? true : baseEachElement(result, accumulator, breaker, predicate);
    });
}
function expandTreeViewNodes(nodes) {
    forEach(nodes, function (node) {
        node.expanded = true;
    });
}
function filterFindElementInput(input) {
    return uniq(map(nativeConcat.apply([], input), String));
}
function freezeProperty(object, property) {
    object.watch(property, function (name, oldValue) { return oldValue; });
}
function getCreationPropertiesIndex(key) {
    if (isNativeControl(key)) {
        return controlParamRef[key];
    }
    if (isNativeContainer(key)) {
        return containerParamRef[key];
    }
    return 0;
}
function getElementById(targetId) {
    var id = String(targetId);
    var result = [];
    var breaker = function (accumulator) { return accumulator.length > 0; };
    baseEachElement([this], result, breaker, function (element) {
        var elementId = baseGetElementId(element);
        if (isNil(elementId)) {
            return false;
        }
        return id === elementId;
    });
    return result.length === 0 ? null : result[0];
}
function getElementParam(value) {
    return isArray(value) ? mapNullToUndefined(value) : baseGetParam(value);
}
function getElementStyle(value) {
    return isArray(value) ? {} : baseGetStyle(value);
}
function getElementsByName() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var targetNames = filterFindElementInput(arguments);
    var seen = [];
    var result = [];
    var breaker = function () { return targetNames.length === seen.length; };
    baseEachElement([this], result, breaker, function (element) {
        var elementId = baseGetElementId(element);
        if (isNil(elementId)) {
            return false;
        }
        if (contains(targetNames, elementId) && !contains(seen, elementId)) {
            seen.push(elementId);
            return true;
        }
        return false;
    });
    return result.length === 0 ? null : result;
}
function getElementsByType() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var targetTypes = filterFindElementInput(arguments);
    var result = [];
    baseEachElement([this], result, stubFalse, function (element) { return contains(targetTypes, element.type); });
    return result.length === 0 ? null : result;
}
function getListItemParam(value) {
    var result = isObject(value) ? baseGetListItemParam(value) : value;
    return String(result);
}
function getMainContainer(param, context) {
    return isPanel(context) ? context : new Window(param[0], param[1], param[2], param[3]);
}
function initBuildValues(resource, parserSelf) {
    var config = assign(clone(mainContainerDefault), baseGetConfig(resource));
    var showWindow = Boolean(config.show);
    var dockable = Boolean(config.dockable);
    var isSingletonWindow = Boolean(config.singleton);
    var context = assignContext(parserSelf.context, dockable, isSingletonWindow);
    var layoutMode = assignLayoutMode(parserSelf.layoutMode, config.layoutMode);
    return [isSingletonWindow, resource, context, showWindow, layoutMode];
}
function initLayout(container, layoutMode) {
    container.layout.layout(layoutMode);
    container.layout.resize();
}
function initMainContainer(resource, context) {
    var mainContainer = getMainContainer(assignWindowType(baseGetParam(resource)), context);
    mainContainer.onResizing = mainContainer.onResize = function () {
        this.layout.resize();
    };
    assign(mainContainer, baseGetStyle(resource));
    return mainContainer;
}
function isInvisibleContainer(container) {
    return isNil(container) || !container.visible;
}
function isTabbedpanel(element) {
    return element.type == "tabbedpanel";
}
function isValidCombination(parentType, childType) {
    var flagCombination = elementTypeFlags[parentType] + elementTypeFlags[childType];
    return reCombination.test(flagCombination);
}
function isValidContext(context) {
    return context === global || isPanel(context);
}
function isValidElement(flag) {
    return has(elementTypeFlags, flag);
}
function mapNullToUndefined(array) {
    return map(array, function (value) { return (isNull(value) ? undefined : value); });
}
function nativeAddContainer(container, type, param) {
    return container.add(type, param[1], param[2], param[3]);
}
function nativeAddControl(container, type, param) {
    return container.add(type, param[1], param[2], param[3], param[4], param[5]);
}
function nativeAddNode(container, text) {
    return container.add("node", text);
}
function nativeAddNodeItem(node, text) {
    return node.add("item", text);
}
function parseElement(resource, container, collector) {
    forOwn(resource, function (value, key) {
        var flag = trimNumber(key).toLowerCase();
        if (isValidElement(flag) && isValidCombination(container.type, flag)) {
            if (isContainer(flag)) {
                var newContainer = addContainer(container, value, flag, collector);
                parseElement(value, newContainer, collector);
            }
            else {
                addControl(container, value, flag, collector);
            }
        }
    });
}
function runInContext(resource) {
    addGetElementMethods([Window, Panel, Group]);
    var resource_ = isObject(resource) ? resource : {};
    var container = buildWindow.apply(null, initBuildValues(resource_, tree));
    tree.windows.push(container);
    return container;
}
function selectChildItem(selectableElementValues) {
    forEach(selectableElementValues, function (value) {
        var container = value.container;
        var itemIndex = value.itemIndex;
        if (isTabbedpanel(container)) {
            container.selection = itemIndex;
        }
        else {
            container.selection = map(castArray(itemIndex), function (value) { return container.items[value]; });
        }
    });
}
function trimNumber(string) {
    return string.replace(/\d/g, "");
}
export default tree;
