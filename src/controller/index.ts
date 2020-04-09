import { fabric } from 'fabric';
import { INIT_WIDTH, INIT_HEIGHT, CANVAS_PADDING } from '../const';
import { getCoordinates } from 'web-util-kit'
import { generateUuid } from 'util-kit'


fabric.Object.prototype.transparentCorners = false;
fabric.Object.prototype.padding = 2;


export default class Controller {

  fabricInstance: fabric.Canvas;

  cmp: any;
  container: HTMLElement;

  width: number = INIT_WIDTH;
  height: number = INIT_HEIGHT;

  shapeObjectMap = new Map();

  shapeList: any[] = [];

  cssScale: number = 1;


  constructor() {

    const ele = document.createElement('canvas') as HTMLCanvasElement;
    ele.width = this.width;
    ele.height = this.height;

    this.fabricInstance = new fabric.Canvas(ele, {
      preserveObjectStacking: true,
      enableRetinaScaling: false,
      containerClass: 'toy-editor-canvas-container',
    });

    this.fabricInstance.on('object:modified', this.onObjectModified);

  }

  mountAt(container: HTMLElement) {
    if (!( container instanceof HTMLElement)) {
      throw new Error('must mount at a HTML Element');
    }
    // clean the container if has any children
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }
    container.appendChild(this.fabricInstance.wrapperEl);
    this.container = container;
    container.addEventListener('drop', this.onDropObject);
    this.autofit();
  }

  mountReactCmp(cmp: any) {
    this.cmp = cmp;
  }

  unmount() {
    this.container.removeEventListener('drop', this.onDropObject);
    this.container = null;
    this.cmp = null;
  }


  onDropObject = (e: DragEvent) => {
    e.preventDefault();
    const dt = e.dataTransfer;
    const { x, y } = getCoordinates(e, this.fabricInstance.lowerCanvasEl);
    const data = dt.getData('text/plain');
    let object;
    try {
      object = JSON.parse(data);
    } catch (error) {
      console.error('failed to get the shape');
    }
    if (!object || !object.type) {
      return;
    }

    const width = object.width / this.cssScale;
    const height = object.height / this.cssScale;
    let radius;
    if (object.radius) {
      radius = object.radius / this.cssScale;
    }
    
    const obj = {
      ...object,
      width,
      height,
      radius,
      left: x - width/2,
      top: y - height/2,
      id: generateUuid(),
    }
    this.addObject(obj);
  }

  onObjectModified = (e: any) => {
    const { target } = e;
    console.log(target);
  }



  addObject(obj: any) {
    const { type } = obj;
    let target;
    
    switch(type) {
      case 'rect':
        target = new fabric.Rect(obj);
        break;
      case 'circle':
        target = new fabric.Circle(obj)
        break;
    }

    if (!target) {
      return;
    }


    this.shapeObjectMap.set(target, obj);
    this.shapeList.push(obj);
    this.fabricInstance.add(target);
    
    
    
  }


  update() {
    if (this.cmp && typeof this.cmp.forceUpdate === 'function') {
      this.cmp.forceUpdate();
    }
    this.fabricInstance.renderAll();
  }


  getDimension() {
    return {
      width: this.fabricInstance.getWidth(),
      height: this.fabricInstance.getHeight(),
    };
  }

  changeDimension(type, val) {
    this.fabricInstance.setDimensions({ [type]: val });
    this.autofit();
  }

  private autofit = () => {    
    const pixelWidth = this.fabricInstance.getWidth();
    const pixelHeight = this.fabricInstance.getHeight();

    const image_aspect = pixelWidth / pixelHeight;
    const MAX_AVAILABLE_WIDTH = this.container.clientWidth - CANVAS_PADDING;
    const MAX_AVAILABLE_HEIGHT = this.container.clientHeight - CANVAS_PADDING;
    const canvasAspect = MAX_AVAILABLE_WIDTH / MAX_AVAILABLE_HEIGHT;

    let zoom = 1;
    if (image_aspect < canvasAspect) {
      zoom = MAX_AVAILABLE_HEIGHT / pixelHeight;
    } else {
      zoom = MAX_AVAILABLE_WIDTH / pixelWidth;
    }
    this.cssScale = zoom;
    this.fabricInstance._setCssDimension('width', `${pixelWidth * zoom}px`);
    this.fabricInstance._setCssDimension('height', `${pixelHeight * zoom}px`);

    this.update();
  };




}


