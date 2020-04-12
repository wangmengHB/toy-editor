import * as React from 'react';
import { Button, Modal, Slider, Icon, Divider, Checkbox, message } from 'antd';
import styles from './index.module.less';
import classnames from 'classnames';
import ToolItem from './tool-item';
import { TOOL_RECT, TOOL_CIRCLE, TOOL_LOGO, TOOL_FACE, TEMPLATE_TYPE_NORMAL, TEMPLATE_TYPE_TEMPLATE } from '../../const';




export interface ToolboxProps{
  className?: string;
  style?: React.CSSProperties;
  controller: any;
}




export default class Toolbox extends React.Component<ToolboxProps>{

  
  render() {
    const { className, style, controller } = this.props;
    let TOOL_LIST = [];
    if (controller.templateType === TEMPLATE_TYPE_NORMAL) {
      TOOL_LIST = [ TOOL_RECT ];
    } else if (controller.templateType === TEMPLATE_TYPE_TEMPLATE) {
      TOOL_LIST = [ TOOL_LOGO, TOOL_FACE ];
    }
    
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