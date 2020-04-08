import { fabric } from 'fabric';
import { INIT_WIDTH, INIT_HEIGHT} from '../const';


fabric.Object.prototype.transparentCorners = false;
fabric.Object.prototype.padding = 2;


export default class Controller {

  fabricInstance: fabric.Canvas;


  constructor() {

    const ele = document.createElement('canvas') as HTMLCanvasElement;
    ele.width = INIT_WIDTH;
    ele.height = INIT_HEIGHT;

    this.fabricInstance = new fabric.Canvas(ele, {
      preserveObjectStacking: true,
      enableRetinaScaling: false,
    });





  }




}


