
export const INIT_WIDTH = 1600;
export const INIT_HEIGHT = 900;



export const CANVAS_MAX_WIDTH = 1000;
export const CANVAS_MAX_HEIGHT = 500;

export const CANVAS_INIT_WIDTH = 400;
export const CANVAS_INIT_HEIGHT = 400;

export const CANVAS_PADDING = 20;


export const MIN_SCALE = 0.0001;

export const MAX_CANVAS_PIXEL_SIZE = 40000;
export const MIN_CANVAS_PIXEL_SIZE = 20;

export const MAX_POS_VAL = 40000;
export const MIN_POS_VAL = -MAX_POS_VAL;

export const CROP_ZONE_ID = 'crop_zone_id';

export const PRECISION_SCENE_RATIO = 0.001;


export const CROP_STYLE = Object.freeze({
  borderColor: "#fff",
  cornerColor: "#fff",
  cornerSize: 16,
  cornerStrokeColor: "#fff",
  cornerStyle: "circle",
  lineWidth: 2,
  transparentCorners: false
});


export enum Direction {
  Up = 'up',
  Down = 'down',
}

export enum ViewMode {
  Normal = 'normal',
  Crop = 'crop',
}

export const KEY_CODES = {
  Z: 90,
  Y: 89,
  SHIFT: 16,
  BACKSPACE: 8,
  DEL: 46
};



export const TOOL_RECT = Object.freeze({
  type: 'rect',
  typeName: '矩形',
  width: 150,
  height: 100,
  stroke: 'red',
  fill: 'rgba(255, 255, 255, 0)',
});

export const TOOL_CIRCLE = Object.freeze({
  type: 'circle',
  typeName: '圆圈',
  radius: 50,
  width: 100,
  height: 100,
  stroke: 'red',
  fill: 'rgba(255, 255, 255, 0)',
});


export const TOOL_LOGO = Object.freeze({
  type: 'rect',
  typeName: 'LOGO区域',
  width: 150,
  height: 100,
  stroke: 'red',
  fill: 'rgba(255, 255, 255, 0)',
});


export const TOOL_FACE = Object.freeze({
  type: 'rect',
  typeName: '人脸区域',
  width: 150,
  height: 100,
  stroke: 'red',
  fill: 'rgba(255, 255, 255, 0)',
});



// export const TOOL_LINE = Object.freeze({
//   type: 'rect',
//   width: 300,
//   height: 200,
// });
  








