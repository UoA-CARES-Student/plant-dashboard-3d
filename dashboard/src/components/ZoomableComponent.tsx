import { Button } from 'antd';
import { ReactNode } from 'react';
import { MaterialSymbol } from 'react-material-symbols';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

interface ZoomableComponentProps {
  children: ReactNode;
}

function ZoomableComponent(props: ZoomableComponentProps) {
  const { children } = props;
  return (
    <TransformWrapper centerOnInit={true} minScale={0.6}>
      {({ zoomIn, zoomOut, centerView }) => (
        <>
          <div
            style={{
              position: 'absolute',
              bottom: '32px',
              right: '16px',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Button onClick={() => centerView(1)} style={{ marginBottom: '4px' }}>
              <MaterialSymbol icon='adjust' size={24} grade={-25} />
            </Button>
            <Button onClick={() => zoomIn()}>
              <MaterialSymbol icon='zoom_in' size={24} grade={-25} />
            </Button>
            <Button onClick={() => zoomOut()}>
              <MaterialSymbol icon='zoom_out' size={24} grade={-25} />
            </Button>
          </div>
          <TransformComponent
            wrapperStyle={{ width: '100%', maxHeight: '100%' }}
            contentStyle={{ width: '100%' }}
          >
            {children}
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
}

export default ZoomableComponent;
