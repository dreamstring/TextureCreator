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
		margins: 0,
		spacing: 0,
		param: ['textureSize_group'],
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
		margins: 0,
		spacing: 0,
		param: ['textureName_group'],
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
	group3: {
		margins: 0,
		spacing: 0,
		param: ['buttons_group'],
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
	}
};

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

let compName =
	textureNameArray[(textureName_dropDownList.selection as ListItem).index];
let compWidth =
	textureSizeArray[(textureWidth_dropDownList.selection as ListItem).index];
let compHeight =
	textureSizeArray[(textureHeight_dropDownList.selection as ListItem).index];

let activeItem = _.getActiveItem();
let items = _.get(app, ['project', 'items']);

function refreshTextureSize() {
	textureWidth_dropDownList.selection = textureHeight_dropDownList.selection = 4;
}

function createComp() {
	items.addComp(compName, compWidth, compHeight, 1, 1 / 30, 30);
}

function apply() {
	if (activeItem) {
		(activeItem as CompItem).width = compWidth;
		(activeItem as CompItem).height = compHeight;
	}
}
