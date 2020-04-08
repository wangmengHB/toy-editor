import * as React from 'react';
import classnames from 'classnames';
import { Icon, Button, Input, InputNumber } from 'antd';
import styles from './index.module.less';
import Layer from './layer';


export interface ImageLayerListProps{
  className?: string;
  style?: React.CSSProperties;
  
}



export default class ImageLayerList extends React.Component<ImageLayerListProps> {

  

  render() {
    const { className, style } = this.props;
    
  
    return (
      <div className={classnames([styles['image-layer-list'], className])} style={style}>
        <div className={styles['title']}>
          图层列表 
          <span className={styles['sub-title']}>(从底到顶排序)</span>
        </div>
        <div className={styles['list']}>
          
        </div>
      </div>
    )
  }


}

