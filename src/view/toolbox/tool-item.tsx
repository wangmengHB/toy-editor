import * as React from 'react';
import { Button, Modal, Slider, Icon, Divider, Checkbox, message } from 'antd';
import styles from './index.module.less';
import classnames from 'classnames';


const LINE_WIDTH = 4;


function createDragCanvas(shape: any) {

  const { width, height, type, radius, stroke } = shape;
  const canvas = document.createElement('canvas');
  canvas.style.position = "absolute";
  canvas.style.left = "-1000px";
  
  document.body.appendChild(canvas);

  canvas.width = width + LINE_WIDTH * 2;
  canvas.height = height + LINE_WIDTH * 2;
  const ctx = canvas.getContext("2d");
  ctx.lineWidth = LINE_WIDTH;
  ctx.strokeStyle = stroke || 'red';

  // TODO draw different shapes depned on props;

  ctx.beginPath();

  if ( type === 'rect') {
    ctx.strokeRect(LINE_WIDTH, LINE_WIDTH, width, height);
  } else if (type === 'circle') {
    ctx.arc(width/2 + LINE_WIDTH, height/2 + LINE_WIDTH, radius, 0, Math.PI * 2);
    ctx.stroke();
  }

  ctx.closePath();
  
  
  return {
    element: canvas,
    offsetX: width/2,
    offsetY: height/2,
    dispose: () => {
      document.body.removeChild(canvas);
    }
  };

}



export default class ToolItem extends React.Component<any, any> {
  
  _disposeDrag: Function;
  
  onDragStart = e => {
    const { shape } = this.props;
    const dt = e.dataTransfer;
    dt.setData('text/plain', JSON.stringify(shape));
    const { element, offsetX, offsetY, dispose } = createDragCanvas(shape);
    this._disposeDrag = dispose;
    dt.setDragImage(element, offsetX, offsetY);
  }


  onDragEnd = e => {
    if (typeof this._disposeDrag === 'function') {
      this._disposeDrag();
    }  
  }



  render() {
    const { shape } = this.props;
    const { type, typeName } = shape;
    
    return (
      <div 
        className={styles['item']} 
        draggable={true} 
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
      >
        <div className={styles[`item-icon-${type}`]}>
        </div>
        <div className={styles['item-label']}>{typeName}</div>
      </div>
    )

  }

}