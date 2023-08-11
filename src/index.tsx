import * as _ from 'soil-ts';

let textureSizeArray: number[];
textureSizeArray = [16, 32, 64, 128, 256, 512, 1024, 2048, 4096];
let textureNameArray: string[];
textureNameArray = ['Glow', 'Light', 'Mask', 'Noise', 'Trail', 'Turbulence'];

let globalHeight = 22;

let UISource = {
	style: {
		margins: 5,
		spacing: 5,
		orientation: 'column',
		alignment: ['fill', 'fill']
	},
	group1: {
		param: ['textureSize_group'],
		margins: 0,
		spacing: 0,
		style: {
			orientation: 'row',
			alignment: ['fill', 'top']
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
					style: { alignment: ['fill', 'fill'], selection: 4 },
					param: [
						'textureWidth_dropDownList',
						[0, 0, 50, globalHeight],
						textureSizeArray
					]
				},
				dropDownList2: {
					style: { alignment: ['fill', 'fill'], selection: 4 },
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
			style: { alignment: ['right', 'center'], onClick: refreshTextureSize },
			param: [undefined, [0, 0, 22, globalHeight], '↺']
		}
	},
	group2: {
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
					[0, 0, 50, globalHeight],
					textureNameArray
				]
			}
		},
		group2: {
			margins: 0,
			spacing: 0,
			style: {
				orientation: 'row',
				alignment: ['fill', 'top']
			},
			statictext: {
				style: { alignment: ['left', 'center'] },
				param: ['digits_Statictext', [0, 0, 46, globalHeight], 'Digits: 2']
			},
			scrollbar: {
				style: { alignment: ['fill', 'center'], selection: 0 },
				param: ['digits_Scrollbar', [0, 0, 140, 10], 2, 0, 6]
			}
		},
		button: {
			style: { alignment: ['right', 'center'], onClick: refreshScrollbar },
			param: [undefined, [0, 0, 22, globalHeight], '↺']
		}
	},
	group3: {
		param: ['method_group'],
		margins: 0,
		spacing: 0,
		style: {
			orientation: 'row',
			alignment: ['fill', 'top']
		},
		button1: {
			style: { alignment: ['fill', 'fill'], onClick: createComp },
			param: ['Create', [0, 0, 22, globalHeight], 'Create']
		},
		button2: {
			style: { alignment: ['fill', 'fill'], onClick: apply },
			param: ['Apply', [0, 0, 22, globalHeight], 'Apply']
		}
	},
	group4: {
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
					style: { alignment: ['left', 'center'], value: true },
					param: ['PNG_Checkbox', undefined, 'PNG']
				},
				checkbox2: {
					style: { alignment: ['left', 'center'], value: false },
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
let textureWidth_dropDownList = (elements.getElementById(
	'textureWidth_dropDownList'
) as unknown) as DropDownList;
let textureHeight_dropDownList = (elements.getElementById(
	'textureHeight_dropDownList'
) as unknown) as DropDownList;
let textureName_dropDownList = (elements.getElementById(
	'textureName_dropDownList'
) as unknown) as DropDownList;
let PNG_Checkbox = (elements.getElementById(
	'PNG_Checkbox'
) as unknown) as Checkbox;
let TGA_Checkbox = (elements.getElementById(
	'TGA_Checkbox'
) as unknown) as Checkbox;
let digits_Statictext = (elements.getElementById(
	'digits_Statictext'
) as unknown) as StaticText;
let digits_Scrollbar = (elements.getElementById(
	'digits_Scrollbar'
) as unknown) as Scrollbar;

digits_Scrollbar.onChange = digits_Scrollbar.onChanging = refreshDigitsText;

function refreshDigitsText() {
	digits_Statictext.text =
		'Digits: ' + _.toString(digits_Scrollbar.value.toFixed(0));
}

function existCategoryFolder(folder: FolderItem, inputName: string) {
	let result = { exist: false, folder: folder };
	_.eachItems(folder, function(file) {
		if (file.name === inputName) {
			result.exist = true;
			result.folder = file as FolderItem;
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
	textureWidth_dropDownList.selection = textureHeight_dropDownList.selection = 4;
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
	let compNameIndex = (textureName_dropDownList.selection as ListItem).index;
	let compName = textureNameArray[compNameIndex];
	let compWidth =
		textureSizeArray[(textureWidth_dropDownList.selection as ListItem).index];
	let compHeight =
		textureSizeArray[(textureHeight_dropDownList.selection as ListItem).index];
	let parentFolderName = dataLeftCompleting(compNameIndex, 2) + ' ' + compName;
	let parentFolder = getCategoryFolder(parentFolderName);
	let finalCompName = getFinalCompName(
		compName,
		compWidth,
		compHeight,
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
}

function apply() {
	activeItem = _.getActiveItem();
	let compNameIndex = (textureName_dropDownList.selection as ListItem).index;
	let compName = textureNameArray[compNameIndex];
	let compWidth =
		textureSizeArray[(textureWidth_dropDownList.selection as ListItem).index];
	let compHeight =
		textureSizeArray[(textureHeight_dropDownList.selection as ListItem).index];
	let parentFolderName = dataLeftCompleting(compNameIndex, 2) + ' ' + compName;
	let targetComp = activeItem as CompItem;
	let parentFolder = getCategoryFolder(parentFolderName);
	let finalCompName = getFinalCompName(
		compName,
		compWidth,
		compHeight,
		parentFolder
	);

	targetComp.width = compWidth;
	targetComp.height = compHeight;
	targetComp.name = finalCompName;
	targetComp.parentFolder = parentFolder;
	targetComp.openInViewer();
}

function render() {
	protectiveSave();
	activeItem = _.getActiveItem();
	if (activeItem && (PNG_Checkbox.value || TGA_Checkbox.value))
		renderQueueItems.add(activeItem as CompItem);
	let targetRenderQueueItem = renderQueueItems[renderQueueItems.length];
	let numOutputModules = targetRenderQueueItem.numOutputModules;
	let pngFile, tgaFile;
	if (PNG_Checkbox.value && TGA_Checkbox.value)
		(targetRenderQueueItem.outputModules as any).add();
	if (PNG_Checkbox.value) {
		let targetTemplateName = 'PNG';
		let targetOutputModule = targetRenderQueueItem.outputModule(
			numOutputModules++
		);
		pngFile = applyTargetTemplate(targetOutputModule, targetTemplateName);
	}
	if (TGA_Checkbox.value) {
		let targetTemplateName = 'TGA';
		let targetOutputModule = targetRenderQueueItem.outputModule(
			numOutputModules++
		);
		tgaFile = applyTargetTemplate(targetOutputModule, targetTemplateName);
	}
	startRender();
	if (pngFile) fixRenderFile(File(pngFile.fsName + '.png00000'));
	if (tgaFile) fixRenderFile(File(tgaFile.fsName + '.tga00000'));
}

function getTargetCompName(
	compName: string,
	compWidth: string | number,
	compHeight: string | number,
	index: string | number
) {
	return `T_${compName}_${compWidth}x${compHeight}_${index}`;
}

function getFinalCompName(
	compName: string,
	compWidth: string | number,
	compHeight: string | number,
	parentFolder: FolderItem
) {
	let compIndex = 0;
	_.eachItems(parentFolder, function(compItem) {
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
	let templatesArray = targetOutputModule.templates;
	let existTemplate = false;
	_.forEach(templatesArray, function(value) {
		if (value === targetTemplateName) existTemplate = true;
	});
	if (existTemplate) targetOutputModule.applyTemplate(targetTemplateName);
	let outputFolderPath =
		(app.project.file as File).path +
		'//' +
		(activeItem as CompItem).parentFolder.name;
	let outputFile = File(
		getFolder(outputFolderPath).fsName + '//' + (activeItem as CompItem).name
	);
	return (targetOutputModule.file = outputFile);
}

function protectiveSave() {
	if (app.project.file === null) app.project.save();
	if ((app.project as any).dirty) app.project.save();
}

function getFolder(folderPath: string) {
	var folder = new Folder(folderPath);
	if (!folder.exists) {
		folder.create();
	}
	return folder;
}

function startRender() {
	app.project.renderQueue.render();
}

function fixRenderFile(renderFile: File) {
	if (!renderFile.exists) return;
	let oldName = renderFile.displayName;
	let newName =
		oldName.split('.')[0] + '.' + oldName.split('.')[1].substring(0, 3);
	renderFile.rename(newName);
}
