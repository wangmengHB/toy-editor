import * as React from 'react';
import { Spin } from 'antd';
import Header from './header';
import ImageLayerList from './image-layer-list';
import WorkCanvas from './work-canvas';
import Toolbox from './toolbox';
import classnames from 'classnames';
import styles from './style.less';




export interface ImageEditorProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface ImageEditorState {
  // layerController: LayerController;
}


export default class ImageEditorView extends React.Component<ImageEditorProps, ImageEditorState> {

  constructor(props: ImageEditorProps) {
    super(props);
    
  }

  

  render() {
    const { className, style} = this.props;
    
    
    return (
      <Spin spinning={false} tip="处理中...">
        <div className={classnames([styles['toy-editor'], className])} style={style}>
          <Header 
            className={styles['header']} 
          />
          <div className={styles['main']}>
            <ImageLayerList 
              className={styles['image-list']}
            />
            <Toolbox 
              className={styles['toolbox']}
            />
            <WorkCanvas 
              className={styles['work-canvas']}
            />

          </div>

        </div>
      </Spin>
    )

  }

}

