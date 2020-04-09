import * as React from 'react';
import { Button, Modal, Slider, Icon, Divider, Checkbox, message } from 'antd';
import styles from './index.module.less';
import classnames from 'classnames';
import ToolItem from './tool-item';
import { TOOL_RECT, TOOL_CIRCLE } from '../../const';




export interface ToolboxProps{
  className?: string;
  style?: React.CSSProperties;
}

const TOOL_LIST = [ TOOL_RECT, TOOL_CIRCLE ];


export default class Toolbox extends React.Component<ToolboxProps>{

  
  render() {
    const { className, style } = this.props;
    
    return (
      <div className={classnames([styles['toolbox-panel'], className])} style={style}>
        <div className={styles['title']}>工具箱</div>
        <div className={styles['toolbox']}>
          {
            TOOL_LIST.map((shape, index) => <ToolItem shape={shape} key={shape.typeName || index} />)
          }  
        </div>
      </div>
    )
  }

}