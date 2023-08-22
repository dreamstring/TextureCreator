import * as _ from 'soil-ts';

const textureSizeArray: number[] = [
	4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096
];
const textureNameArray: string[] = [
	'Glow',
	'Light',
	'Flare',
	'Spark',
	'Trail',
	'Mask',
	'Noise',
	'Turbulence',
	'Element',
	'Sequence'
];
const textureName = (
	compName: string,
	compWidth: string | number,
	compHeight: string | number,
	index: string | number
) => {
	return `T_${compName}_${compWidth}x${compHeight}_${index}`;
};
const textureRegex = /^T_[a-zA-Z]+_\d+x\d+_\d+$/;
const globalHeight = 22;

let UISource = {
	style: {
		margins: 5,
		spacing: 5,
		orientation: 'column',
		alignment: ['fill', 'fill']
	},
	panel1: {
		margins: 0,
		spacing: 0,
		style: {
			orientation: 'stack',
			alignment: ['fill', 'top'],
			bounds: [0, 0, 50, 114],
			text: 'Method'
		},
		group1: {
			param: ['textureSize_group'],
			margins: 0,
			spacing: 0,
			style: {
				orientation: 'row',
				alignment: ['fill', 'top'],
				bounds: [0, 0, 50, 26]
			},
			statictext: {
				style: { alignment: ['left', 'center'] },
				param: [undefined, [0, 0, 26, globalHeight], 'Size: ']
			},
			group: {
				style: {
					orientation: 'stack',
					alignment: ['fill', 'center']
				},
				group1: {
					style: {
						margins: 0,
						spacing: 20,
						orientation: 'row',
						alignment: ['fill', 'center']
					},
					param: ['textureSize', [0, 0, 200, globalHeight]],
					dropDownList1: {
						style: { alignment: ['fill', 'fill'], selection: 6 },
						param: [
							'textureWidth_dropDownList',
							[0, 0, 50, globalHeight],
							textureSizeArray
						]
					},
					dropDownList2: {
						style: { alignment: ['fill', 'fill'], selection: 6 },
						param: [
							'textureHeight_dropDownList',
							[0, 0, 50, globalHeight],
							textureSizeArray
						]
					}
				},
				group2: {
					style: {
						orientation: 'row',
						alignment: ['center', 'center']
					},
					statictext1: {
						style: { alignment: ['center', 'center'] },
						param: [undefined, [0, 0, 12, globalHeight], ' x']
					}
				}
			},
			button: {
				style: {
					alignment: ['right', 'center'],
					onClick: refreshTextureSize
				},
				param: [undefined, [0, 0, 22, globalHeight], '↺']
			}
		},
		group2: {
			param: ['realSize_group'],
			margins: 0,
			spacing: 0,
			style: {
				orientation: 'row',
				alignment: ['fill', 'bottom'],
				bounds: [0, -28, 50, 26]
			},
			group1: {
				param: ['realSize_group', [0, -6, 50, 22]],
				style: {
					orientation: 'stack',
					alignment: ['left', 'top']
				},
				group: {
					style: {
						orientation: 'row',
						alignment: ['left', 'center']
					},
					checkbox: {
						style: { alignment: ['left', 'center'], value: false },
						param: ['realSize_Checkbox', undefined, 'Realsize']
					}
				}
			},
			group2: {
				style: {
					orientation: 'stack',
					alignment: ['fill', 'top']
				},
				group1: {
					style: {
						margins: 0,
						spacing: 20,
						orientation: 'row',
						alignment: ['fill', 'center']
					},
					param: ['realSize', [0, 0, 200, globalHeight]],
					edittext1: {
						style: { alignment: ['fill', 'center'], enable: false },
						param: ['realWidth_Edittext', [0, 0, 26, globalHeight], '256']
					},
					edittext2: {
						style: { alignment: ['fill', 'center'], enable: false },
						param: ['realHeight_Edittext', [0, 0, 26, globalHeight], '256']
					}
				},
				group2: {
					style: {
						orientation: 'row',
						alignment: ['center', 'center']
					},
					statictext1: {
						style: { alignment: ['center', 'center'] },
						param: [undefined, [0, 0, 12, globalHeight], ' x']
					}
				}
			},
			button: {
				style: {
					alignment: ['right', 'top'],
					onClick: refreshRealSize
				},
				param: [undefined, [0, 0, 22, globalHeight], '↺']
			}
		},
		group3: {
			style: {
				orientation: 'stack',
				alignment: ['fill', 'bottom'],
				bounds: [0, 0, 50, 26]
			},
			group3: {
				param: ['textureName_group'],
				margins: 0,
				spacing: 0,
				style: {
					orientation: 'row',
					alignment: ['fill', 'top']
				},
				group1: {
					margins: 0,
					spacing: 0,
					style: {
						orientation: 'row',
						alignment: ['fill', 'top']
					},
					statictext: {
						style: { alignment: ['left', 'center'] },
						param: [undefined, [0, 0, 36, globalHeight], 'Name: ']
					},
					dropDownList: {
						style: { alignment: ['fill', 'fill'], selection: 0 },
						param: [
							'textureName_dropDownList',
							[0, 0, 75, globalHeight],
							textureNameArray
						]
					}
				},
				statictext: {
					style: { alignment: ['right', 'center'] },
					param: ['digits_Statictext', [0, 0, 46, globalHeight], 'Digits: 2']
				},
				scrollbar: {
					style: { alignment: ['right', 'center'], selection: 0 },
					param: ['digits_Scrollbar', [0, 0, 120, 10], 2, 0, 6]
				},
				button: {
					style: {
						alignment: ['right', 'center'],
						onClick: refreshScrollbar
					},
					param: [undefined, [0, 0, 22, globalHeight], '↺']
				}
			}
		}
	},
	panel3: {
		param: ['method_group'],
		margins: 0,
		spacing: 0,
		style: {
			orientation: 'row',
			alignment: ['fill', 'top'],
			text: 'Method'
		},
		button1: {
			style: { alignment: ['fill', 'fill'], onClick: createComp },
			param: ['Create', [0, 0, 22, globalHeight], 'Create']
		},
		button2: {
			style: { alignment: ['fill', 'fill'], onClick: duplicateComp },
			param: ['Duplicate', [0, 0, 22, globalHeight], 'Duplicate']
		},
		button3: {
			style: { alignment: ['fill', 'fill'], onClick: changeComp },
			param: ['Apply', [0, 0, 22, globalHeight], 'Apply']
		}
	},
	panel4: {
		param: ['bg_group'],
		margins: 0,
		spacing: 0,
		style: {
			orientation: 'row',
			alignment: ['fill', 'top'],
			text: 'BackGround'
		},
		button1: {
			style: { alignment: ['fill', 'fill'], onClick: createBlackBg },
			param: ['BlackBg', [0, 0, 22, globalHeight], 'BlackBg']
		},
		button2: {
			style: { alignment: ['fill', 'fill'], onClick: createWhiteBg },
			param: ['WhiteBg', [0, 0, 22, globalHeight], 'WhiteBg']
		},
		button3: {
			style: { alignment: ['fill', 'fill'], onClick: createGreyBg },
			param: ['GreyBg', [0, 0, 22, globalHeight], 'GreyBg']
		},
		button4: {
			style: { alignment: ['fill', 'fill'], onClick: createNoBg },
			param: ['NoBg', [0, 0, 22, globalHeight], 'NoBg']
		}
	},
	group5: {
		param: ['render_group', [0, 0, 50, 22]],
		margins: 0,
		spacing: 0,
		style: {
			orientation: 'row',
			alignment: ['fill', 'top']
		},
		group: {
			param: ['render_group', [0, -6, 50, 22]],
			style: {
				orientation: 'stack',
				alignment: ['left', 'top']
			},
			group: {
				style: {
					orientation: 'row',
					alignment: ['left', 'center']
				},
				checkbox1: {
					style: { alignment: ['left', 'center'], value: false },
					param: ['PNG_Checkbox', undefined, 'PNG']
				},
				checkbox2: {
					style: { alignment: ['left', 'center'], value: true },
					param: ['TGA_Checkbox', undefined, 'TGA']
				}
			}
		},
		button: {
			style: { alignment: ['fill', 'top'], onClick: render },
			param: ['Rrender', [0, 0, 22, globalHeight], 'Render']
		}
	}
};

let activeItem = _.getActiveItem();
let items = app.project.items;
let rootFolder = app.project.rootFolder;
let renderQueueItems = app.project.renderQueue.items;

let elements = _.tree.parse(UISource);
let textureWidth_dropDownList = elements.getElementById(
	'textureWidth_dropDownList'
) as unknown as DropDownList;
let textureHeight_dropDownList = elements.getElementById(
	'textureHeight_dropDownList'
) as unknown as DropDownList;
let textureName_dropDownList = elements.getElementById(
	'textureName_dropDownList'
) as unknown as DropDownList;

let realSize_Checkbox = elements.getElementById(
	'realSize_Checkbox'
) as unknown as Checkbox;
let realWidth_Edittext = elements.getElementById(
	'realWidth_Edittext'
) as unknown as EditText;
let realHeight_Edittext = elements.getElementById(
	'realHeight_Edittext'
) as unknown as EditText;

let PNG_Checkbox = elements.getElementById(
	'PNG_Checkbox'
) as unknown as Checkbox;
let TGA_Checkbox = elements.getElementById(
	'TGA_Checkbox'
) as unknown as Checkbox;
let digits_Statictext = elements.getElementById(
	'digits_Statictext'
) as unknown as StaticText;
let digits_Scrollbar = elements.getElementById(
	'digits_Scrollbar'
) as unknown as Scrollbar;

realWidth_Edittext.enabled = realHeight_Edittext.enabled = false;
digits_Scrollbar.onChange = digits_Scrollbar.onChanging = refreshDigitsText;
realSize_Checkbox.onClick = enableRealsize;
realWidth_Edittext.onChange = realWidth_Edittext.onChanging =
	realWidthValidation;
realHeight_Edittext.onChange = realHeight_Edittext.onChanging =
	realWidthValidation;

function realWidthValidation() {
	realWidth_Edittext.text = realWidth_Edittext.text.replace(/\D/g, '');
}
function enableRealsize() {
	realWidth_Edittext.enabled = realHeight_Edittext.enabled =
		realSize_Checkbox.value;
}

function refreshDigitsText() {
	digits_Statictext.text =
		'Digits: ' + _.toString(digits_Scrollbar.value.toFixed(0));
}

function existCategoryFolder(folder: FolderItem, inputName: string) {
	let result = { exist: false, folder: folder };
	_.eachItems(folder, file => {
		if (file.name === inputName && _.isFolderItem(file)) {
			result.exist = true;
			result.folder = file;
		}
	});
	return result;
}

function getCategoryFolder(parentFolderName: string) {
	let targetFolder = existCategoryFolder(rootFolder, parentFolderName);
	return targetFolder.exist
		? targetFolder.folder
		: items.addFolder(parentFolderName);
}

function refreshTextureSize() {
	textureWidth_dropDownList.selection =
		textureHeight_dropDownList.selection = 6;
}

function refreshRealSize() {
	realWidth_Edittext.text = _.toString(
		textureWidth_dropDownList.selection as number
	);
	realHeight_Edittext.text = _.toString(
		textureHeight_dropDownList.selection as number
	);
}

function refreshScrollbar() {
	digits_Scrollbar.value = 2;
	refreshDigitsText();
}

function dataLeftCompleting(
	originData: number,
	bits: number,
	identifier?: string
) {
	identifier = identifier || '0';
	let finalData = Array(bits + 1).join(identifier) + originData;
	return finalData.slice(-bits);
}

function createComp() {
	_.setUndoGroup('Create comp', () => {
		let categoryFolderIndex = (textureName_dropDownList.selection as ListItem)
			.index;
		let categoryFolderName = textureNameArray[categoryFolderIndex];
		let compWidth =
			textureSizeArray[(textureWidth_dropDownList.selection as ListItem).index];
		let compHeight =
			textureSizeArray[
				(textureHeight_dropDownList.selection as ListItem).index
			];
		let parentFolderName =
			dataLeftCompleting(categoryFolderIndex, 2) + ' ' + categoryFolderName;
		let parentFolder = getCategoryFolder(parentFolderName);
		let finalCompName = getFinalCompName(
			categoryFolderName,
			realSize_Checkbox.value ? realWidth_Edittext.text : compWidth,
			realSize_Checkbox.value ? realHeight_Edittext.text : compHeight,
			parentFolder
		);
		let targetComp = items.addComp(
			finalCompName,
			compWidth,
			compHeight,
			1,
			1 / 30,
			30
		);
		(targetComp as CompItem).parentFolder = parentFolder;
		targetComp.openInViewer();
	});
}

function duplicateComp() {
	_.setUndoGroup('Duplicate comp', () => {
		activeItem = _.getActiveItem();
		if (!activeItem) return;
		let nameArray = (activeItem as CompItem).name.split('_');
		let compName = nameArray[1];
		let compSize = nameArray[nameArray.length - 2];
		let compWidth = _.toNumber(compSize.split('x')[0]);
		let compHeight = _.toNumber(compSize.split('x')[1]);
		let originComp = activeItem as CompItem;
		let parentFolder = originComp.parentFolder;
		let finalCompName = getFinalCompName(
			compName,
			realSize_Checkbox.value ? realWidth_Edittext.text : compWidth,
			realSize_Checkbox.value ? realHeight_Edittext.text : compHeight,
			parentFolder
		);
		let targetComp = items.addComp(
			finalCompName,
			compWidth,
			compHeight,
			1,
			1 / 30,
			30
		);
		(targetComp as CompItem).parentFolder = parentFolder;
		_.eachLayersRight(originComp, layer => {
			layer.copyToComp(targetComp);
		});
		targetComp.openInViewer();
	});
}

function changeComp() {
	_.setUndoGroup('Change comp', () => {
		activeItem = _.getActiveItem();
		if (!activeItem) return;
		let categoryFolderIndex = (textureName_dropDownList.selection as ListItem)
			.index;
		let categoryFolderName = textureNameArray[categoryFolderIndex];
		let compWidth =
			textureSizeArray[(textureWidth_dropDownList.selection as ListItem).index];
		let compHeight =
			textureSizeArray[
				(textureHeight_dropDownList.selection as ListItem).index
			];
		let parentFolderName =
			dataLeftCompleting(categoryFolderIndex, 2) + ' ' + categoryFolderName;
		let targetComp = activeItem as CompItem;
		let parentFolder = getCategoryFolder(parentFolderName);
		let finalCompName = getFinalCompName(
			categoryFolderName,
			realSize_Checkbox.value ? realWidth_Edittext.text : compWidth,
			realSize_Checkbox.value ? realHeight_Edittext.text : compHeight,
			parentFolder
		);

		targetComp.width = compWidth;
		targetComp.height = compHeight;
		targetComp.name = finalCompName;
		targetComp.parentFolder = parentFolder;
		targetComp.openInViewer();

		let existBg = false;
		let bgComment = 'TextureBackGround';
		let bgColor: ThreeDColorValue = [1, 1, 1];
		let bgColorName = 'None';

		_.eachLayers(targetComp, layer => {
			if (layer.comment == bgComment) {
				existBg = true;
				layer.locked = false;
				bgColorName = layer.name.split(' ')[1];
				layer.remove();
			}
		});

		if (!existBg) return;
		if (bgColorName == 'Black') bgColor = [0, 0, 0];
		if (bgColorName == 'White') bgColor = [1, 1, 1];
		createTargetColorBg(bgColor, bgColorName);
	});
}

function createBg(
	targetComp: CompItem,
	compWidth: string | number,
	compHeight: string | number,
	color: ThreeDColorValue,
	name: string
) {
	return targetComp.layers.addSolid(
		color,
		name,
		_.toNumber(compWidth),
		_.toNumber(compHeight),
		1
	);
}

function createBlackBg() {
	_.setUndoGroup('Create Balck Background', () => {
		createTargetColorBg([0, 0, 0], 'Black');
	});
}

function createWhiteBg() {
	_.setUndoGroup('Create Balck Background', () => {
		createTargetColorBg([1, 1, 1], 'White');
	});
}

function createGreyBg() {
	_.setUndoGroup('Create Balck Background', () => {
		createTargetColorBg([0.5, 0.5, 0.5], 'Grey');
	});
}

function createNoBg() {
	_.setUndoGroup('Create Balck Background', () => {
		createTargetColorBg([1, 1, 1], 'None');
	});
}

function createTargetColorBg(
	targetColor: ThreeDColorValue,
	targetColorName: string
) {
	activeItem = _.getActiveItem();
	if (!activeItem) return;
	let compWidth = (activeItem as CompItem).width;
	let compHeight = (activeItem as CompItem).height;
	let existBgSource = false;

	let bgName = `${compWidth}x${compHeight} ${targetColorName}`;
	let bgComment = 'TextureBackGround';
	let solidsFolder = getSolidsFolder();

	_.eachLayers(activeItem as CompItem, layer => {
		if (layer.comment === bgComment) {
			layer.locked = false;
			layer.remove();
		}
	});
	if (targetColorName === 'None') return;

	let solidsSource: Item;
	if (solidsFolder)
		_.eachItems(solidsFolder, solidItem => {
			if (solidItem.name === bgName && solidItem.comment === bgComment) {
				existBgSource = true;
				solidsSource = solidItem;
			}
		});

	let bgLayer: Layer;
	if (!existBgSource) {
		bgLayer = createBg(
			activeItem as CompItem,
			compWidth,
			compHeight,
			targetColor,
			bgName
		);
		if (_.isAVLayer(bgLayer)) bgLayer.source.comment = bgComment;
	}
	if (existBgSource)
		bgLayer = (activeItem as CompItem).layers.add(solidsSource! as AVItem);
	bgLayer!.comment = bgComment;
	bgLayer!.moveToEnd();
	bgLayer!.locked = true;
}

function getSolidsFolder() {
	let solidsFolder: FolderItem | null;
	_.eachItems(rootFolder, folderItem => {
		if (
			(folderItem.name === 'Solids' || folderItem.name === 'solids') &&
			_.isFolderItem(folderItem)
		)
			solidsFolder = folderItem;
	});
	return solidsFolder!;
}

function render() {
	permissionDialog();
	protectiveSave();
	activeItem = _.getActiveItem();
	if (!activeItem) return;
	if (activeItem && (PNG_Checkbox.value || TGA_Checkbox.value))
		renderQueueItems.add(activeItem as CompItem);
	let targetRenderQueueItem = renderQueueItems[renderQueueItems.length];
	let numOutputModules = targetRenderQueueItem.numOutputModules;
	let pngFile: File, tgaFile: File, renderFolder: Folder;
	if (PNG_Checkbox.value && TGA_Checkbox.value)
		(targetRenderQueueItem.outputModules as any).add();
	if (PNG_Checkbox.value) {
		let targetTemplateName = 'PNG';
		let targetOutputModule = targetRenderQueueItem.outputModule(
			numOutputModules++
		);
		applyRenderSetting(targetRenderQueueItem);
		targetRenderQueueItem.logType = LogType.ERRORS_AND_PER_FRAME_INFO;
		pngFile = applyTargetTemplate(targetOutputModule, targetTemplateName)!;
		renderFolder = pngFile.parent;
	}
	if (TGA_Checkbox.value) {
		let targetTemplateName = 'TGA';
		let targetOutputModule = targetRenderQueueItem.outputModule(
			numOutputModules++
		);
		applyRenderSetting(targetRenderQueueItem);
		targetRenderQueueItem.logType = LogType.ERRORS_AND_PER_FRAME_INFO;
		tgaFile = applyTargetTemplate(targetOutputModule, targetTemplateName)!;
		renderFolder = tgaFile.parent;
	}

	startRender();
	if (renderFolder!.exists)
		_.eachFiles(renderFolder!, file => {
			const regex = /\.(png|tga)\d{5}/g;
			if (file.displayName.match(regex)) fixRenderFile(file);
		});
}

function getTargetCompName(
	compName: string,
	compWidth: string | number,
	compHeight: string | number,
	index: string | number
) {
	return textureName(compName, compWidth, compHeight, index);
}

function getFinalCompName(
	compName: string,
	compWidth: string | number,
	compHeight: string | number,
	parentFolder: FolderItem
) {
	let compIndex = 0;
	_.eachItems(parentFolder, compItem => {
		if (!textureRegex.test(compItem.name)) return;
		let nameArray = compItem.name.split('_');
		let compItemSize = nameArray[nameArray.length - 2];
		let compItemWidth = compItemSize.split('x')[0];
		let compItemHeight = compItemSize.split('x')[1];
		let compItemIndex = _.toNumber(nameArray[nameArray.length - 1]);
		if (
			compWidth == _.toNumber(compItemWidth) &&
			compHeight == _.toNumber(compItemHeight) &&
			compItemIndex === compIndex
		)
			compIndex++;
	});
	return getTargetCompName(
		compName,
		compWidth,
		compHeight,
		dataLeftCompleting(compIndex, _.toNumber(digits_Scrollbar.value.toFixed(0)))
	);
}

function applyTargetTemplate(
	targetOutputModule: OutputModule,
	targetTemplateName: string
) {
	activeItem = _.getActiveItem();
	if (!activeItem) return;
	let templatesArray = targetOutputModule.templates;
	let existTemplate = false;
	_.forEach(templatesArray, function (value) {
		if (value === targetTemplateName) existTemplate = true;
	});
	if (existTemplate) targetOutputModule.applyTemplate(targetTemplateName);
	if (!existTemplate) {
		alert(`Please create ${targetTemplateName} output module first.`);
		protectiveTry(() => {
			app.executeCommand(_CommandID.OutputModule);
		});
	}
	let outputFolderPath =
		(app.project.file as File).path +
		'//' +
		(activeItem as CompItem).parentFolder.name;
	let outputFile = new File(
		getFolder(outputFolderPath).fsName + '//' + (activeItem as CompItem).name
	);

	targetOutputModule.includeSourceXMP = false;
	targetOutputModule.postRenderAction = PostRenderAction.NONE;
	return (targetOutputModule.file = outputFile);
}

function applyRenderSetting(renderQueueItem: RenderQueueItem) {
	activeItem = _.getActiveItem();
	if (!activeItem) return;
	let timeSpanStart = (activeItem as CompItem).time;
	let timeSpanDuration = (activeItem as CompItem).frameDuration;
	var renderSettings = {
		'Color Depth': 'Current Settings',
		'Disk Cache': 'Read Only',
		Effects: 'All On',
		'Frame Blending': 'On for Checked Layers',
		'Frame Rate': "Use comp's frame rate",
		'Motion Blur': 'On for Checked Layers',
		'Proxy Use': 'Use No Proxies',
		Quality: 'Best',
		Resolution: 'Full',
		'Solo Switches': 'Current Settings',
		'Time Span Start': timeSpanStart,
		'Time Span Duration': timeSpanDuration,
		'Time Span End': timeSpanStart + timeSpanDuration
	};
	renderQueueItem.setSettings(renderSettings);
}

function protectiveSave() {
	if (app.project.file === null) app.project.save();
	if ((app.project as any).dirty) app.project.save();
}

function getFolder(folderPath: string) {
	let folder = new Folder(folderPath);
	if (!folder.exists) folder.create();
	return folder;
}

function startRender() {
	app.project.renderQueue.render();
}

function fixRenderFile(renderFile: File) {
	if (!renderFile.exists) return;
	const oldName = renderFile.displayName;
	const regex = /\.(png|tga)\d{5}/g;
	const newName = oldName.replace(regex, match => {
		const extensionMatch = match.match(/\.(png|tga)/);
		return extensionMatch ? extensionMatch[0] : match;
	});
	renderFile.rename(newName);
}

function isSecurityPrefSet() {
	try {
		var securitySetting = app.preferences.getPrefAsLong(
			'Main Pref Section',
			'Pref_SCRIPTING_FILE_NETWORK_SECURITY'
		);
		return securitySetting == 1;
	} catch (error) {
		return true;
	}
}

function permissionDialog() {
	if (!isSecurityPrefSet()) {
		alert(
			'This script requires access to write files.\n Go to the  General  panel of the application preferences and make sure 「Allow Scripts to Write Files and Access Network」 is checked.'
		);
		protectiveTry(() => {
			app.executeCommand(_CommandID.ScriptsExpressions);
		});
	}
}

function protectiveTry(callback: Function) {
	try {
		callback();
	} catch (error) {
		alert(error);
	}
}
