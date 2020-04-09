import * as React from 'react';
import { Spin } from 'antd';
import Header from './header';
import ImageLayerList from './image-layer-list';
import WorkCanvas from './work-canvas';
import Toolbox from './toolbox';
import classnames from 'classnames';
import styles from './style.less';
import Controller from '../controller';




export interface ImageEditorProps {
  className?: string;
  style?: React.CSSProperties;
  controller: Controller;
}

export interface ImageEditorState {
  
}


export default class ImageEditorView extends React.Component<ImageEditorProps, ImageEditorState> {

  constructor(props: ImageEditorProps) {
    super(props);
    const { controller } = this.props;
    controller.mountReactCmp(this);
  }

  

  render() {
    const { className, style, controller } = this.props;
    
    
    return (
      <Spin spinning={false} tip="处理中...">
        <div className={classnames([styles['toy-editor'], className])} style={style}>
          <Header 
            className={styles['header']} 
          />
          <div className={styles['main']}>
            <ImageLayerList 
              className={styles['image-list']}
              controller={controller}
            />
            <Toolbox 
              className={styles['toolbox']}
            />
            <WorkCanvas 
              className={styles['work-canvas']}
              controller={controller}
            />

          </div>

        </div>
      </Spin>
    )

  }

}

