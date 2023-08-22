(function () {
    var textureSizeArray = [4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096];
    var textureNameArray = ["Glow", "Light", "Flare", "Spark", "Trail", "Mask", "Noise", "Turbulence", "Element", "Sequence"];
    var textureName = function (compName, compWidth, compHeight, index) {
        return "T_".concat(compName, "_").concat(compWidth, "x").concat(compHeight, "_").concat(index);
    };
    var textureRegex = /^T_[a-zA-Z]+_\d+x\d+_\d+$/;

    var arrayProto = Array.prototype;
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeConcat = arrayProto.concat;
    var nativeSlice = arrayProto.slice;
    var nativeToString = objectProto.toString;
    var nativeParseInt = parseInt;
    var NAN = 0 / 0;
    var INFINITY = 1 / 0;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var reFlags = /\w*$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function has(object, key) {
        return object != null && hasOwnProperty.call(object, key);
    }
    function isObject(value) {
        if (value == null) {
            return false;
        }
        var type = typeof value;
        return type === "object" || type === "function";
    }
    function assign(object, source) {
        var result = Object(object);
        if (isObject(source)) {
            for (var key in source) {
                if (has(source, key)) {
                    result[key] = source[key];
                }
            }
        }
        return result;
    }
    function contains(array, value) {
        var index = -1;
        var length = array.length;
        while (++index < length) {
            if (array[index] === value) {
                return true;
            }
        }
        return false;
    }
    function getTag(value) {
        if (value == null) {
            return value === undefined ? "[object Undefined]" : "[object Null]";
        }
        return nativeToString.call(value);
    }
    function isArray(value) {
        return getTag(value) == "[object Array]";
    }
    function isObjectLike(value) {
        return typeof value === "object" && value !== null;
    }
    function isArguments(value) {
        return isObjectLike(value) && getTag(value) == "[object Arguments]";
    }
    function or() {
        var index = -1;
        var length = arguments.length;
        while (++index < length) {
            if (arguments[index]) {
                return true;
            }
        }
        return false;
    }
    function stubFalse() {
        return false;
    }
    function map(array, iteratee) {
        var index = -1;
        var length = array == null ? 0 : array.length;
        var result = new Array(length);
        while (++index < length) {
            result[index] = iteratee(array[index], index, array);
        }
        return result;
    }
    function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && or(type === "number", reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
    }
    function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value);
        var isArg = !isArr && isArguments(value);
        var skipIndexes = isArr || isArg;
        var length = value.length;
        var result = new Array(skipIndexes ? length : 0);
        var index = skipIndexes ? -1 : length;
        while (++index < length) {
            result[index] = "".concat(index);
        }
        for (var key in value) {
            if ((inherited || has(value, key)) && !(skipIndexes && (key === "length" || isIndex(key, length)))) {
                result.push(key);
            }
        }
        return result;
    }
    function isLength(value) {
        return typeof value === "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isArrayLike(value) {
        return value != null && typeof value !== "function" && isLength(value.length);
    }
    function keys(object) {
        if (object == null) {
            return [];
        }
        if (isArrayLike(object)) {
            return arrayLikeKeys(object);
        }
        var result = [];
        for (var key in object) {
            if (has(object, key)) {
                result.push(key);
            }
        }
        return result;
    }
    function toString(value) {
        if (value == null) {
            return "";
        }
        if (typeof value === "string") {
            return value;
        }
        if (isArray(value)) {
            return "".concat(map(value, function (other) {
                return other == null ? other : toString(other);
            }));
        }
        var result = "".concat(value);
        return result == "0" && 1 / Number(value) == -INFINITY ? "-0" : result;
    }
    function toNumber(value) {
        if (typeof value === "number") {
            return value;
        }
        if (isObject(value)) {
            var other = typeof value.valueOf === "function" ? value.valueOf() : value;
            value = isObject(other) ? "".concat(other) : other;
        }
        if (typeof value !== "string") {
            return value === 0 ? value : +value;
        }
        value = value.replace(reTrim, "");
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? nativeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    function arrayEach(array, iteratee) {
        var index = -1;
        var length = array.length;
        while (++index < length) {
            if (iteratee(array[index], index, array) === false) {
                break;
            }
        }
        return array;
    }
    function baseFor(object, iteratee, keysFunc) {
        var iterable = Object(object);
        var props = keysFunc(object);
        var length = props.length;
        var index = -1;
        while (length--) {
            var key = props[++index];
            if (iteratee(iterable[key], key, iterable) === false) {
                break;
            }
        }
        return object;
    }
    function baseForOwn(object, iteratee) {
        return object && baseFor(object, iteratee, keys);
    }
    function cloneRegExp(regexp) {
        var matched = reFlags.exec(regexp.toString());
        var flags = matched === null ? undefined : matched.toString();
        var RegExpCtor = regexp.constructor;
        var result = new RegExpCtor(regexp.source, flags);
        result.lastIndex = regexp.lastIndex;
        return result;
    }
    function copyArray(source, array) {
        var index = -1;
        var length = source.length;
        array || (array = new Array(length));
        while (++index < length) {
            array[index] = source[index];
        }
        return array;
    }
    function copyObject(source, props, object) {
        object || (object = {});
        var index = -1, length = props.length;
        while (++index < length) {
            var key = props[index];
            object[key] = source[key];
        }
        return object;
    }
    function initCloneObject(object) {
        var Ctor = object.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor ? new Ctor : {};
    }
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var stringTag = "[object String]";
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[stringTag] = true;
    cloneableTags[errorTag] = false;
    function initCloneByTag(object, tag) {
        var Ctor = object.constructor;
        switch (tag) {
            case boolTag:
            case dateTag:
                return new Ctor(object.valueOf());

            case numberTag:
            case stringTag:
                return new Ctor(object);

            case regexpTag:
                return cloneRegExp(object);
        }
    }
    function isRegExpExecArray(array) {
        return typeof array[0] === "string" && has(array, "index");
    }
    function initCloneArray(array) {
        var length = array.length;
        var Ctor = array.constructor;
        var result = new Ctor(length);
        if (length && isRegExpExecArray(array)) {
            result.index = array.index;
            result.input = array.input;
        }
        return result;
    }
    function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
        var result;
        if (customizer) {
            result = object ? customizer(value, key, object) : customizer(value);
        }
        if (result !== undefined) {
            return result;
        }
        if (!isObject(value)) {
            return value;
        }
        var isArr = isArray(value);
        var tag = getTag(value);
        if (isArr) {
            result = initCloneArray(value);
            if (!isDeep) {
                return copyArray(value, result);
            }
        } else {
            var isFunc = typeof value === "function";
            if (or(tag == objectTag, tag == argsTag, isFunc && !object)) {
                result = isFunc ? {} : initCloneObject(value);
                if (!isDeep) {
                    return copyObject(value, keys(value), result);
                }
            } else {
                return cloneableTags[tag] ? initCloneByTag(value, tag) : object ? value : {};
            }
        }
        stackA || (stackA = []);
        stackB || (stackB = []);
        var length = stackA.length;
        while (length--) {
            if (stackA[length] == value) {
                return stackB[length];
            }
        }
        stackA.push(value);
        stackB.push(result);
        if (isArr) {
            arrayEach(value, function (subValue, key) {
                result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
            });
        } else {
            baseForOwn(value, function (subValue, key) {
                result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
            });
        }
        return result;
    }
    function clone(value) {
        return baseClone(value, false);
    }
    function forEach(array, iteratee) {
        var index = -1;
        var length = array.length;
        while (++index < length) {
            if (iteratee(array[index], index, array) === false) {
                break;
            }
        }
        return array;
    }
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length;
        var index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
            if (predicate(array[index], index, array)) {
                return index;
            }
        }
        return -1;
    }
    function baseIsNaN(value) {
        return value !== value;
    }
    function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1;
        var length = array.length;
        while (++index < length) {
            if (array[index] === value) {
                return index;
            }
        }
        return -1;
    }
    function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
    }
    function arrayIncludesWith(array, target, comparator) {
        if (array == null) {
            return false;
        }
        var index = -1;
        var length = array.length;
        while (++index < length) {
            var value = array[index];
            if (comparator(target, value)) {
                return true;
            }
        }
        return false;
    }
    function some(array, predicate) {
        var index = -1;
        var length = array.length;
        while (++index < length) {
            if (predicate(array[index], index, array)) {
                return true;
            }
        }
        return false;
    }
    function forOwn(object, iteratee) {
        for (var key in object) {
            if (has(object, key)) {
                if (iteratee(object[key], key, object) === false) {
                    break;
                }
            }
        }
        return object;
    }
    function isFunction(value) {
        return typeof value === "function";
    }
    function isNil(value) {
        return value == null;
    }
    function isNull(value) {
        return value === null;
    }
    function baseUniq(array, iteratee, comparator) {
        var index = -1;
        var includes = arrayIncludes;
        var isCommon = true;
        var result = [];
        var seen = result;
        var hasIteratee = isFunction(iteratee);
        var hasComparator = isFunction(comparator);
        var length = array.length;
        if (hasComparator) {
            isCommon = false;
            includes = arrayIncludesWith;
        } else {
            seen = hasIteratee ? [] : result;
        }
        outer: while (++index < length) {
            var value = array[index];
            var computed = hasIteratee ? iteratee(value) : value;
            value = hasComparator || value !== 0 ? value : 0;
            if (isCommon && computed === computed) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                    if (seen[seenIndex] === computed) {
                        continue outer;
                    }
                }
                if (hasIteratee) {
                    seen.push(computed);
                }
                result.push(value);
            } else if (!includes(seen, computed, comparator)) {
                if (seen !== result) {
                    seen.push(computed);
                }
                result.push(value);
            }
        }
        return result;
    }
    function uniq(array) {
        return array != null && array.length ? baseUniq(array) : [];
    }
    function createIsNativeType(nativeObject) {
        return function (value) {
            return value != null && value instanceof nativeObject;
        };
    }
    var isPanel = createIsNativeType(Panel);
    var isWindow = createIsNativeType(Window);
    var root = this;
    var global = $.global;
    var tree = {
        version: "beta 1.0.0",
        parse: runInContext,
        windows: []
    };
    var layoutModeFlags = [0, 1, 2];
    var validContainerType = ["dialog", "palette", "window"];
    var mainContainerDefault = {
        dockable: true,
        show: true,
        singleton: false
    };
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
    var containerParamRef = {
        group: 2,
        panel: 3,
        tab: 3,
        tabbedpanel: 3
    };
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
        var element = isListItemContainer(container.type) ? addListItem(container, value) : addGeneralControl(container, value, key);
        assign(element, getElementStyle(value));
    }
    function addGeneralContainer(container, value, flag, collector) {
        var style = getElementStyle(value);
        var newContainer = nativeAddContainer(container, flag, assignElementParam(value, flag));
        if (isSelectableElement(flag) && has(style, "selection")) {
            var value_1 = {
                container: newContainer,
                itemIndex: style.selection
            };
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
        var collector = {
            nodeItems: [],
            selectableElement: []
        };
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
        object.watch(property, function (name, oldValue) {
            return oldValue;
        });
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
        var breaker = function (accumulator) {
            return accumulator.length > 0;
        };
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
        var targetNames = filterFindElementInput(arguments);
        var seen = [];
        var result = [];
        var breaker = function () {
            return targetNames.length === seen.length;
        };
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
        var targetTypes = filterFindElementInput(arguments);
        var result = [];
        baseEachElement([this], result, stubFalse, function (element) {
            return contains(targetTypes, element.type);
        });
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
        return map(array, function (value) {
            return isNull(value) ? undefined : value;
        });
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
                } else {
                    addControl(container, value, flag);
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
            } else {
                container.selection = map(castArray(itemIndex), function (value) {
                    return container.items[value];
                });
            }
        });
    }
    function trimNumber(string) {
        return string.replace(/\d/g, "");
    }
    function collectionEach(collection, iteratee) {
        var index = 0;
        var length = collection.length + 1;
        while (++index < length) {
            if (iteratee(collection[index], index, collection) === false) {
                break;
            }
        }
        return collection;
    }
    var isFile = createIsNativeType(File);
    function newFolder(path) {
        return new Folder(path);
    }
    var isFolder = createIsNativeType(Folder);
    function castFolder(folder) {
        return isFolder(folder) ? folder : newFolder(folder);
    }
    function getFiles(path, mask) {
        var folder = castFolder(path);
        if (!folder.exists) {
            return [];
        }
        return folder.getFiles(mask);
    }
    function eachFiles(folder, iteratee) {
        var resIndex = 0;
        forEach(getFiles(folder), function (unknownFile, index, files) {
            if (isFile(unknownFile)) {
                if (iteratee(unknownFile, resIndex++, files) === false) {
                    return false;
                }
            }
        });
    }
    function eachItems(itemCollection, iteratee) {
        collectionEach(itemCollection.items, function (value, index) {
            if (iteratee(value, index, itemCollection) === false) {
                return false;
            }
        });
    }
    function collectionEachRight(collection, iteratee) {
        var index = collection.length + 1;
        while (--index) {
            if (iteratee(collection[index], index, collection) === false) {
                break;
            }
        }
        return collection;
    }
    function eachLayers(compItem, iteratee) {
        collectionEach(compItem.layers, function (value, index) {
            if (iteratee(value, index, compItem) === false) {
                return false;
            }
        });
    }
    function eachLayersRight(compItem, iteratee) {
        collectionEachRight(compItem.layers, function (value, index) {
            if (iteratee(value, index, compItem) === false) {
                return false;
            }
        });
    }
    function getActiveItem() {
        return app.project.activeItem;
    }
    var isAVLayer = createIsNativeType(AVLayer);
    var isFolderItem = createIsNativeType(FolderItem);
    function setUndoGroup(undoString, func) {
        app.beginUndoGroup(undoString);
        func();
        app.endUndoGroup();
    }
    var globalHeight = 22;
    var UISource = {
        style: {
            margins: 5,
            spacing: 5,
            orientation: "column",
            alignment: ["fill", "fill"]
        },
        panel1: {
            margins: 0,
            spacing: 0,
            style: {
                orientation: "stack",
                alignment: ["fill", "top"],
                bounds: [0, 0, 50, 114],
                text: "Method"
            },
            group1: {
                param: ["textureSize_group"],
                margins: 0,
                spacing: 0,
                style: {
                    orientation: "row",
                    alignment: ["fill", "top"],
                    bounds: [0, 0, 50, 26]
                },
                statictext: {
                    style: {
                        alignment: ["left", "center"]
                    },
                    param: [undefined, [0, 0, 26, globalHeight], "Size: "]
                },
                group: {
                    style: {
                        orientation: "stack",
                        alignment: ["fill", "center"]
                    },
                    group1: {
                        style: {
                            margins: 0,
                            spacing: 20,
                            orientation: "row",
                            alignment: ["fill", "center"]
                        },
                        param: ["textureSize", [0, 0, 200, globalHeight]],
                        dropDownList1: {
                            style: {
                                alignment: ["fill", "fill"],
                                selection: 6
                            },
                            param: ["textureWidth_dropDownList", [0, 0, 50, globalHeight], textureSizeArray]
                        },
                        dropDownList2: {
                            style: {
                                alignment: ["fill", "fill"],
                                selection: 6
                            },
                            param: ["textureHeight_dropDownList", [0, 0, 50, globalHeight], textureSizeArray]
                        }
                    },
                    group2: {
                        style: {
                            orientation: "row",
                            alignment: ["center", "center"]
                        },
                        statictext1: {
                            style: {
                                alignment: ["center", "center"]
                            },
                            param: [undefined, [0, 0, 12, globalHeight], " x"]
                        }
                    }
                },
                button: {
                    style: {
                        alignment: ["right", "center"],
                        onClick: refreshTextureSize
                    },
                    param: [undefined, [0, 0, 22, globalHeight], "↺"]
                }
            },
            group2: {
                param: ["realSize_group"],
                margins: 0,
                spacing: 0,
                style: {
                    orientation: "row",
                    alignment: ["fill", "bottom"],
                    bounds: [0, -28, 50, 26]
                },
                group1: {
                    param: ["realSize_group", [0, -6, 50, 22]],
                    style: {
                        orientation: "stack",
                        alignment: ["left", "top"]
                    },
                    group: {
                        style: {
                            orientation: "row",
                            alignment: ["left", "center"]
                        },
                        checkbox: {
                            style: {
                                alignment: ["left", "center"],
                                value: false
                            },
                            param: ["realSize_Checkbox", undefined, "Realsize"]
                        }
                    }
                },
                group2: {
                    style: {
                        orientation: "stack",
                        alignment: ["fill", "top"]
                    },
                    group1: {
                        style: {
                            margins: 0,
                            spacing: 20,
                            orientation: "row",
                            alignment: ["fill", "center"]
                        },
                        param: ["realSize", [0, 0, 200, globalHeight]],
                        edittext1: {
                            style: {
                                alignment: ["fill", "center"],
                                enable: false
                            },
                            param: ["realWidth_Edittext", [0, 0, 26, globalHeight], "256"]
                        },
                        edittext2: {
                            style: {
                                alignment: ["fill", "center"],
                                enable: false
                            },
                            param: ["realHeight_Edittext", [0, 0, 26, globalHeight], "256"]
                        }
                    },
                    group2: {
                        style: {
                            orientation: "row",
                            alignment: ["center", "center"]
                        },
                        statictext1: {
                            style: {
                                alignment: ["center", "center"]
                            },
                            param: [undefined, [0, 0, 12, globalHeight], " x"]
                        }
                    }
                },
                button: {
                    style: {
                        alignment: ["right", "top"],
                        onClick: refreshRealSize
                    },
                    param: [undefined, [0, 0, 22, globalHeight], "↺"]
                }
            },
            group3: {
                style: {
                    orientation: "stack",
                    alignment: ["fill", "bottom"],
                    bounds: [0, 0, 50, 26]
                },
                group3: {
                    param: ["textureName_group"],
                    margins: 0,
                    spacing: 0,
                    style: {
                        orientation: "row",
                        alignment: ["fill", "top"]
                    },
                    group1: {
                        margins: 0,
                        spacing: 0,
                        style: {
                            orientation: "row",
                            alignment: ["fill", "top"]
                        },
                        statictext: {
                            style: {
                                alignment: ["left", "center"]
                            },
                            param: [undefined, [0, 0, 36, globalHeight], "Name: "]
                        },
                        dropDownList: {
                            style: {
                                alignment: ["fill", "fill"],
                                selection: 0
                            },
                            param: ["textureName_dropDownList", [0, 0, 75, globalHeight], textureNameArray]
                        }
                    },
                    statictext: {
                        style: {
                            alignment: ["right", "center"]
                        },
                        param: ["digits_Statictext", [0, 0, 46, globalHeight], "Digits: 2"]
                    },
                    scrollbar: {
                        style: {
                            alignment: ["right", "center"],
                            selection: 0
                        },
                        param: ["digits_Scrollbar", [0, 0, 120, 10], 2, 0, 6]
                    },
                    button: {
                        style: {
                            alignment: ["right", "center"],
                            onClick: refreshScrollbar
                        },
                        param: [undefined, [0, 0, 22, globalHeight], "↺"]
                    }
                }
            }
        },
        panel3: {
            param: ["method_group"],
            margins: 0,
            spacing: 0,
            style: {
                orientation: "row",
                alignment: ["fill", "top"],
                text: "Method"
            },
            button1: {
                style: {
                    alignment: ["fill", "fill"],
                    onClick: createComp
                },
                param: ["Create", [0, 0, 22, globalHeight], "Create"]
            },
            button2: {
                style: {
                    alignment: ["fill", "fill"],
                    onClick: duplicateComp
                },
                param: ["Duplicate", [0, 0, 22, globalHeight], "Duplicate"]
            },
            button3: {
                style: {
                    alignment: ["fill", "fill"],
                    onClick: changeComp
                },
                param: ["Apply", [0, 0, 22, globalHeight], "Apply"]
            }
        },
        panel4: {
            param: ["bg_group"],
            margins: 0,
            spacing: 0,
            style: {
                orientation: "row",
                alignment: ["fill", "top"],
                text: "BackGround"
            },
            button1: {
                style: {
                    alignment: ["fill", "fill"],
                    onClick: createBlackBg
                },
                param: ["BlackBg", [0, 0, 22, globalHeight], "BlackBg"]
            },
            button2: {
                style: {
                    alignment: ["fill", "fill"],
                    onClick: createWhiteBg
                },
                param: ["WhiteBg", [0, 0, 22, globalHeight], "WhiteBg"]
            },
            button3: {
                style: {
                    alignment: ["fill", "fill"],
                    onClick: createGreyBg
                },
                param: ["GreyBg", [0, 0, 22, globalHeight], "GreyBg"]
            },
            button4: {
                style: {
                    alignment: ["fill", "fill"],
                    onClick: createNoBg
                },
                param: ["NoBg", [0, 0, 22, globalHeight], "NoBg"]
            }
        },
        group5: {
            param: ["render_group", [0, 0, 50, 22]],
            margins: 0,
            spacing: 0,
            style: {
                orientation: "row",
                alignment: ["fill", "top"]
            },
            group: {
                param: ["render_group", [0, -6, 50, 22]],
                style: {
                    orientation: "stack",
                    alignment: ["left", "top"]
                },
                group: {
                    style: {
                        orientation: "row",
                        alignment: ["left", "center"]
                    },
                    checkbox1: {
                        style: {
                            alignment: ["left", "center"],
                            value: false
                        },
                        param: ["PNG_Checkbox", undefined, "PNG"]
                    },
                    checkbox2: {
                        style: {
                            alignment: ["left", "center"],
                            value: true
                        },
                        param: ["TGA_Checkbox", undefined, "TGA"]
                    }
                }
            },
            button: {
                style: {
                    alignment: ["fill", "top"],
                    onClick: render
                },
                param: ["Rrender", [0, 0, 22, globalHeight], "Render"]
            }
        }
    };
    var activeItem = getActiveItem();
    var items = app.project.items;
    var rootFolder = app.project.rootFolder;
    var renderQueueItems = app.project.renderQueue.items;
    var elements = tree.parse(UISource);
    var textureWidth_dropDownList = elements.getElementById("textureWidth_dropDownList");
    var textureHeight_dropDownList = elements.getElementById("textureHeight_dropDownList");
    var textureName_dropDownList = elements.getElementById("textureName_dropDownList");
    var realSize_Checkbox = elements.getElementById("realSize_Checkbox");
    var realWidth_Edittext = elements.getElementById("realWidth_Edittext");
    var realHeight_Edittext = elements.getElementById("realHeight_Edittext");
    var PNG_Checkbox = elements.getElementById("PNG_Checkbox");
    var TGA_Checkbox = elements.getElementById("TGA_Checkbox");
    var digits_Statictext = elements.getElementById("digits_Statictext");
    var digits_Scrollbar = elements.getElementById("digits_Scrollbar");
    realWidth_Edittext.enabled = realHeight_Edittext.enabled = false;
    digits_Scrollbar.onChange = digits_Scrollbar.onChanging = refreshDigitsText;
    realSize_Checkbox.onClick = enableRealsize;
    realWidth_Edittext.onChange = realWidth_Edittext.onChanging = realWidthValidation;
    realHeight_Edittext.onChange = realHeight_Edittext.onChanging = realWidthValidation;
    function realWidthValidation() {
        realWidth_Edittext.text = realWidth_Edittext.text.replace(/\D/g, "");
    }
    function enableRealsize() {
        realWidth_Edittext.enabled = realHeight_Edittext.enabled = realSize_Checkbox.value;
    }
    function refreshDigitsText() {
        digits_Statictext.text = "Digits: " + toString(digits_Scrollbar.value.toFixed(0));
    }
    function existCategoryFolder(folder, inputName) {
        var result = {
            exist: false,
            folder: folder
        };
        eachItems(folder, function (file) {
            if (file.name === inputName && isFolderItem(file)) {
                result.exist = true;
                result.folder = file;
            }
        });
        return result;
    }
    function getCategoryFolder(parentFolderName) {
        var targetFolder = existCategoryFolder(rootFolder, parentFolderName);
        return targetFolder.exist ? targetFolder.folder : items.addFolder(parentFolderName);
    }
    function refreshTextureSize() {
        textureWidth_dropDownList.selection = textureHeight_dropDownList.selection = 6;
    }
    function refreshRealSize() {
        realWidth_Edittext.text = toString(textureWidth_dropDownList.selection);
        realHeight_Edittext.text = toString(textureHeight_dropDownList.selection);
    }
    function refreshScrollbar() {
        digits_Scrollbar.value = 2;
        refreshDigitsText();
    }
    function dataLeftCompleting(originData, bits, identifier) {
        identifier = identifier || "0";
        var finalData = Array(bits + 1).join(identifier) + originData;
        return finalData.slice(-bits);
    }
    function createComp() {
        setUndoGroup("Create comp", function () {
            var categoryFolderIndex = textureName_dropDownList.selection.index;
            var categoryFolderName = textureNameArray[categoryFolderIndex];
            var compWidth = textureSizeArray[textureWidth_dropDownList.selection.index];
            var compHeight = textureSizeArray[textureHeight_dropDownList.selection.index];
            var parentFolderName = dataLeftCompleting(categoryFolderIndex, 2) + " " + categoryFolderName;
            var parentFolder = getCategoryFolder(parentFolderName);
            var finalCompName = getFinalCompName(categoryFolderName, realSize_Checkbox.value ? realWidth_Edittext.text : compWidth, realSize_Checkbox.value ? realHeight_Edittext.text : compHeight, parentFolder);
            var targetComp = items.addComp(finalCompName, compWidth, compHeight, 1, 1 / 30, 30);
            targetComp.parentFolder = parentFolder;
            targetComp.openInViewer();
        });
    }
    function duplicateComp() {
        setUndoGroup("Duplicate comp", function () {
            activeItem = getActiveItem();
            if (!activeItem) {
                return;
            }
            var nameArray = activeItem.name.split("_");
            var compName = nameArray[1];
            var compSize = nameArray[nameArray.length - 2];
            var compWidth = toNumber(compSize.split("x")[0]);
            var compHeight = toNumber(compSize.split("x")[1]);
            var originComp = activeItem;
            var parentFolder = originComp.parentFolder;
            var finalCompName = getFinalCompName(compName, realSize_Checkbox.value ? realWidth_Edittext.text : compWidth, realSize_Checkbox.value ? realHeight_Edittext.text : compHeight, parentFolder);
            var targetComp = items.addComp(finalCompName, compWidth, compHeight, 1, 1 / 30, 30);
            targetComp.parentFolder = parentFolder;
            eachLayersRight(originComp, function (layer) {
                layer.copyToComp(targetComp);
            });
            targetComp.openInViewer();
        });
    }
    function changeComp() {
        setUndoGroup("Change comp", function () {
            activeItem = getActiveItem();
            if (!activeItem) {
                return;
            }
            var categoryFolderIndex = textureName_dropDownList.selection.index;
            var categoryFolderName = textureNameArray[categoryFolderIndex];
            var compWidth = textureSizeArray[textureWidth_dropDownList.selection.index];
            var compHeight = textureSizeArray[textureHeight_dropDownList.selection.index];
            var parentFolderName = dataLeftCompleting(categoryFolderIndex, 2) + " " + categoryFolderName;
            var targetComp = activeItem;
            var parentFolder = getCategoryFolder(parentFolderName);
            var finalCompName = getFinalCompName(categoryFolderName, realSize_Checkbox.value ? realWidth_Edittext.text : compWidth, realSize_Checkbox.value ? realHeight_Edittext.text : compHeight, parentFolder);
            targetComp.width = compWidth;
            targetComp.height = compHeight;
            targetComp.name = finalCompName;
            targetComp.parentFolder = parentFolder;
            targetComp.openInViewer();
            var existBg = false;
            var bgComment = "TextureBackGround";
            var bgColor = [1, 1, 1];
            var bgColorName = "None";
            eachLayers(targetComp, function (layer) {
                if (layer.comment == bgComment) {
                    existBg = true;
                    layer.locked = false;
                    bgColorName = layer.name.split(" ")[1];
                    layer.remove();
                }
            });
            if (!existBg) {
                return;
            }
            if (bgColorName == "Black") {
                bgColor = [0, 0, 0];
            }
            if (bgColorName == "White") {
                bgColor = [1, 1, 1];
            }
            createTargetColorBg(bgColor, bgColorName);
        });
    }
    function createBg(targetComp, compWidth, compHeight, color, name) {
        return targetComp.layers.addSolid(color, name, toNumber(compWidth), toNumber(compHeight), 1);
    }
    function createBlackBg() {
        setUndoGroup("Create Balck Background", function () {
            createTargetColorBg([0, 0, 0], "Black");
        });
    }
    function createWhiteBg() {
        setUndoGroup("Create Balck Background", function () {
            createTargetColorBg([1, 1, 1], "White");
        });
    }
    function createGreyBg() {
        setUndoGroup("Create Balck Background", function () {
            createTargetColorBg([0.5, 0.5, 0.5], "Grey");
        });
    }
    function createNoBg() {
        setUndoGroup("Create Balck Background", function () {
            createTargetColorBg([1, 1, 1], "None");
        });
    }
    function createTargetColorBg(targetColor, targetColorName) {
        activeItem = getActiveItem();
        if (!activeItem) {
            return;
        }
        var compWidth = activeItem.width;
        var compHeight = activeItem.height;
        var existBgSource = false;
        var bgName = "".concat(compWidth, "x").concat(compHeight, " ").concat(targetColorName);
        var bgComment = "TextureBackGround";
        var solidsFolder = getSolidsFolder();
        eachLayers(activeItem, function (layer) {
            if (layer.comment === bgComment) {
                layer.locked = false;
                layer.remove();
            }
        });
        if (targetColorName === "None") {
            return;
        }
        var solidsSource;
        if (solidsFolder) {
            eachItems(solidsFolder, function (solidItem) {
                if (solidItem.name === bgName && solidItem.comment === bgComment) {
                    existBgSource = true;
                    solidsSource = solidItem;
                }
            });
        }
        var bgLayer;
        if (!existBgSource) {
            bgLayer = createBg(activeItem, compWidth, compHeight, targetColor, bgName);
            if (isAVLayer(bgLayer)) {
                bgLayer.source.comment = bgComment;
            }
        }
        if (existBgSource) {
            bgLayer = activeItem.layers.add(solidsSource);
        }
        bgLayer.comment = bgComment;
        bgLayer.moveToEnd();
        bgLayer.locked = true;
    }
    function getSolidsFolder() {
        var solidsFolder;
        eachItems(rootFolder, function (folderItem) {
            if ((folderItem.name === "Solids" || folderItem.name === "solids") && isFolderItem(folderItem)) {
                solidsFolder = folderItem;
            }
        });
        return solidsFolder;
    }
    function render() {
        permissionDialog();
        protectiveSave();
        activeItem = getActiveItem();
        if (!activeItem) {
            return;
        }
        if (activeItem && (PNG_Checkbox.value || TGA_Checkbox.value)) {
            renderQueueItems.add(activeItem);
        }
        var targetRenderQueueItem = renderQueueItems[renderQueueItems.length];
        var numOutputModules = targetRenderQueueItem.numOutputModules;
        var pngFile, tgaFile, renderFolder;
        if (PNG_Checkbox.value && TGA_Checkbox.value) {
            targetRenderQueueItem.outputModules.add();
        }
        if (PNG_Checkbox.value) {
            var targetTemplateName = "PNG";
            var targetOutputModule = targetRenderQueueItem.outputModule(numOutputModules++);
            applyRenderSetting(targetRenderQueueItem);
            targetRenderQueueItem.logType = LogType.ERRORS_AND_PER_FRAME_INFO;
            pngFile = applyTargetTemplate(targetOutputModule, targetTemplateName);
            renderFolder = pngFile.parent;
        }
        if (TGA_Checkbox.value) {
            var targetTemplateName = "TGA";
            var targetOutputModule = targetRenderQueueItem.outputModule(numOutputModules++);
            applyRenderSetting(targetRenderQueueItem);
            targetRenderQueueItem.logType = LogType.ERRORS_AND_PER_FRAME_INFO;
            tgaFile = applyTargetTemplate(targetOutputModule, targetTemplateName);
            renderFolder = tgaFile.parent;
        }
        startRender();
        if (renderFolder.exists) {
            eachFiles(renderFolder, function (file) {
                var regex = /\.(png|tga)\d{5}/g;
                if (file.displayName.match(regex)) {
                    fixRenderFile(file);
                }
            });
        }
    }
    function getTargetCompName(compName, compWidth, compHeight, index) {
        return textureName(compName, compWidth, compHeight, index);
    }
    function getFinalCompName(compName, compWidth, compHeight, parentFolder) {
        var compIndex = 0;
        eachItems(parentFolder, function (compItem) {
            if (!textureRegex.test(compItem.name)) {
                return;
            }
            var nameArray = compItem.name.split("_");
            var compItemSize = nameArray[nameArray.length - 2];
            var compItemWidth = compItemSize.split("x")[0];
            var compItemHeight = compItemSize.split("x")[1];
            var compItemIndex = toNumber(nameArray[nameArray.length - 1]);
            if (compWidth == toNumber(compItemWidth) && compHeight == toNumber(compItemHeight) && compItemIndex === compIndex) {
                compIndex++;
            }
        });
        return getTargetCompName(compName, compWidth, compHeight, dataLeftCompleting(compIndex, toNumber(digits_Scrollbar.value.toFixed(0))));
    }
    function applyTargetTemplate(targetOutputModule, targetTemplateName) {
        activeItem = getActiveItem();
        if (!activeItem) {
            return;
        }
        var templatesArray = targetOutputModule.templates;
        var existTemplate = false;
        forEach(templatesArray, function (value) {
            if (value === targetTemplateName) {
                existTemplate = true;
            }
        });
        if (existTemplate) {
            targetOutputModule.applyTemplate(targetTemplateName);
        }
        if (!existTemplate) {
            alert("Please create ".concat(targetTemplateName, " output module first."));
            protectiveTry(function () {
                app.executeCommand(2150);
            });
        }
        var outputFolderPath = app.project.file.path + "//" + activeItem.parentFolder.name;
        var outputFile = new File(getFolder(outputFolderPath).fsName + "//" + activeItem.name);
        targetOutputModule.includeSourceXMP = false;
        targetOutputModule.postRenderAction = PostRenderAction.NONE;
        return targetOutputModule.file = outputFile;
    }
    function applyRenderSetting(renderQueueItem) {
        activeItem = getActiveItem();
        if (!activeItem) {
            return;
        }
        var timeSpanStart = activeItem.time;
        var timeSpanDuration = activeItem.frameDuration;
        var renderSettings = {
            "Color Depth": "Current Settings",
            "Disk Cache": "Read Only",
            Effects: "All On",
            "Frame Blending": "On for Checked Layers",
            "Frame Rate": "Use comp's frame rate",
            "Motion Blur": "On for Checked Layers",
            "Proxy Use": "Use No Proxies",
            Quality: "Best",
            Resolution: "Full",
            "Solo Switches": "Current Settings",
            "Time Span Start": timeSpanStart,
            "Time Span Duration": timeSpanDuration,
            "Time Span End": timeSpanStart + timeSpanDuration
        };
        renderQueueItem.setSettings(renderSettings);
    }
    function protectiveSave() {
        if (app.project.file === null) {
            app.project.save();
        }
        if (app.project.dirty) {
            app.project.save();
        }
    }
    function getFolder(folderPath) {
        var folder = new Folder(folderPath);
        if (!folder.exists) {
            folder.create();
        }
        return folder;
    }
    function startRender() {
        app.project.renderQueue.render();
    }
    function fixRenderFile(renderFile) {
        if (!renderFile.exists) {
            return;
        }
        var oldName = renderFile.displayName;
        var regex = /\.(png|tga)\d{5}/g;
        var newName = oldName.replace(regex, function (match) {
            var extensionMatch = match.match(/\.(png|tga)/);
            return extensionMatch ? extensionMatch[0] : match;
        });
        renderFile.rename(newName);
    }
    function isSecurityPrefSet() {
        try {
            var securitySetting = app.preferences.getPrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY");
            return securitySetting == 1;
        } catch (error) {
            return true;
        }
    }
    function permissionDialog() {
        if (!isSecurityPrefSet()) {
            alert("This script requires access to write files.\n Go to the  General  panel of the application preferences and make sure 「Allow Scripts to Write Files and Access Network」 is checked.");
            protectiveTry(function () {
                app.executeCommand(3131);
            });
        }
    }
    function protectiveTry(callback) {
        try {
            callback();
        } catch (error) {
            alert(error);
        }
    }
}).call(this);
