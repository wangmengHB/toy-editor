import * as React from 'react';
import classnames from 'classnames';
import { Icon, Button, Input, InputNumber, Form } from 'antd';
import styles from './index.module.less';
import Controller from '../../controller';
import { MIN_POS_VAL, MAX_POS_VAL } from '../../const';

const FormItem = Form.Item;


export interface ImageLayerListProps{
  className?: string;
  style?: React.CSSProperties;
  controller: Controller;
  
}



export default class ImageLayerList extends React.Component<ImageLayerListProps> {

  

  render() {
    const { className, style, controller } = this.props;
    const { width, height } = controller.getDimension();
    
  
    return (
      <div className={classnames([styles['image-layer-list'], className])} style={style}>
        <div className={styles['title']}>
          图片尺寸
        </div>
        <div className={styles['list']}>
          <Form layout="inline">
            <FormItem  label="图片宽">
              <InputNumber
                value={Math.floor(width)}
                min={MIN_POS_VAL}
                max={MAX_POS_VAL}
                step={1}
                onChange={(val) => controller.changeDimension('width', val)}
              />
            </FormItem>
            <FormItem label="图片高">
              <InputNumber 
                value={Math.floor(height)}
                min={MIN_POS_VAL}
                max={MAX_POS_VAL}
                step={1}
                onChange={(val) => controller.changeDimension('height', val)}
              />
            </FormItem>
          </Form>
        </div>
        <div className={styles['title']}>
          规则线
        </div>
        <div className={styles['list']}>

        </div>
      </div>
    )
  }


}

