import * as React from 'react';
import { Button, Modal, Slider, InputNumber, Divider, Checkbox, message } from 'antd';
import styles from './index.module.less';
import classnames from 'classnames';



const PERCENT = 100;
const MIN = 0.1;
const MAX = 1;
const PARAM_ITEM_WIDTH = 100;


export interface HeaderProps{
  className?: string;
  style?: React.CSSProperties;
  // layerController: any;
}

export default class Header extends React.Component<HeaderProps> {

  

  

  render() {    
    const { className, style } = this.props;
  
    
    
    return (
      <div className={classnames([styles.header, className])} style={style}>
        


      </div>
    )
  }

}
