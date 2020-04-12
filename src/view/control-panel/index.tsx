import * as React from 'react';
import classnames from 'classnames';
import { Icon, Button, Input, InputNumber, Form, Row, Col } from 'antd';
import styles from './index.module.less';
import Controller from '../../controller';
import { MIN_POS_VAL, MAX_POS_VAL, TEMPLATE_TYPE_NORMAL } from '../../const';
import SpecRule from './spec-rule';

const FormItem = Form.Item;

const formLayout2 = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};


export interface ImageLayerListProps{
  className?: string;
  style?: React.CSSProperties;
  controller: Controller;
}



export default class ImageLayerList extends React.Component<ImageLayerListProps> {

  

  render() {
    const { className, style, controller } = this.props;
    const { width, height } = controller.getDimension();
    const ruleLineList = controller.getRuleLineList();


    return (
      <div className={classnames([styles['image-layer-list'], className])} style={style}>
        <div className={styles['title']}>
          { controller.templateType }
        </div>
        <div className={styles['list']}>
          <Form>
            
              <FormItem {...formLayout2}  label="名称">
                <Input />
              </FormItem>
              
              <FormItem {...formLayout2}  label="描述">
              <Input.TextArea />
            </FormItem>
            
            
          </Form>
        </div>
        
        <div className={styles['title']}>
          图片尺寸
        </div>
        <div className={styles['list']}>
          <Form>
            <Row>
              <Col span={12}>
                <FormItem {...formLayout2}  label="宽">
                <InputNumber
                  disabled={controller.templateType !== TEMPLATE_TYPE_NORMAL}
                  value={Math.floor(width)}
                  min={MIN_POS_VAL}
                  max={MAX_POS_VAL}
                  step={1}
                  onChange={(val) => controller.changeDimension('width', val)}
                />
              </FormItem>
              </Col>
              <Col span={12}>
              <FormItem {...formLayout2} label="高">
              <InputNumber
                disabled={controller.templateType !== TEMPLATE_TYPE_NORMAL} 
                value={Math.floor(height)}
                min={MIN_POS_VAL}
                max={MAX_POS_VAL}
                step={1}
                onChange={(val) => controller.changeDimension('height', val)}
              />
            </FormItem>
              </Col>
            </Row>
            
            
          </Form>
        </div>
        <div className={styles['title']}>
          规则线
        </div>
        <div className={styles['list']}>
          {
            ruleLineList.map((rule) => <SpecRule key={rule.id} rule={rule} controller={controller}/>)
          }

        </div>
      </div>
    )
  }


}

