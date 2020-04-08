import * as React from 'react';
import { Button, Modal, Slider, Icon, Divider, Checkbox, message } from 'antd';
import styles from './index.module.less';
import classnames from 'classnames';
import ToolItem from './tool-item';




export interface ToolboxProps{
  className?: string;
  style?: React.CSSProperties;
}


export default class Toolbox extends React.Component<ToolboxProps>{

  


  


  render() {
    const { className, style } = this.props;
    

    
    return (
      <div className={classnames([styles['toolbox-panel'], className])} style={style}>
        <div className={styles['title']}>工具箱</div>
        <div className={styles['toolbox']}>
          <ToolItem />
        
      
          
        </div>
        


      </div>
    )
  }

}