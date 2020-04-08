import * as React from 'react';
import { Button, Modal, Slider, Icon, Divider, Checkbox, message } from 'antd';
import styles from './index.module.less';
import classnames from 'classnames';



function dragWithCustomImage(event) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 100;

  const ctx = canvas.getContext("2d");
  ctx.lineWidth = 4;
  ctx.strokeStyle = 'red';
  ctx.moveTo(0, 0);
  ctx.lineTo(50, 50);
  ctx.moveTo(0, 50);
  ctx.lineTo(50, 0);
  ctx.stroke();
  

  const dt = event.dataTransfer;
  // dt.setData('text/plain', 'Data to Drag');
  dt.setDragImage(canvas, 25, 25);
}



export default class ToolItem extends React.Component {


  onDragStart = e => {
    // e.preventDefault();
    console.log(e);
    dragWithCustomImage(e);
  }


  onDragEnd = e => {
    e.preventDefault();

  }



  render() {

    // TODO tool item from data;

    let label = '矩形';

    return (
      <div 
        className={styles['item']} 
        draggable={true} 
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
      >
        <div className={styles['item-icon']}>
          <Icon type="border-outer" />
        </div>
        <div className={styles['item-label']}>{label}</div>
      </div>
    )

  }

}