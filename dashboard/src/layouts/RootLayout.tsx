import { Button, Input, Modal, Space, Typography } from 'antd';
import mixpanel from 'mixpanel-browser';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  const { Text, Link } = Typography;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState<'' | 'error'>('');
  const [id, setId] = useState('');

  const [show, setShow] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem('id');
    if (id) {
      mixpanel.init('08a1dee1408d2a5942e2d93dabc6daac', {
        debug: true,
        persistence: 'localStorage',
      });
      mixpanel.identify(id);
      setShow(true);
      return;
    }
    setShow(true);
    setIsModalOpen(true);
  }, []);

  const handleConfirm = () => {
    if (!id) {
      setStatus('error');
      return;
    }
    localStorage.setItem('id', id);
    setStatus('');
    setId('');
    setIsModalOpen(false);

    mixpanel.init('08a1dee1408d2a5942e2d93dabc6daac', {
      debug: true,
      persistence: 'localStorage',
    });

    mixpanel.identify(id);

    mixpanel.track_pageview();
  };

  return (
    <>
      {show ? (
        <>
          <Outlet />
          <Modal
            title='Enter Your Id'
            maskClosable={false}
            keyboard={false}
            closeIcon={null}
            destroyOnClose
            open={isModalOpen}
            footer={[
              <Button key='submit' type='primary' onClick={handleConfirm}>
                Confirm
              </Button>,
            ]}
          >
            <Space direction='vertical' size='middle' style={{ padding: 16, width: '80%' }}>
              <Text>
                As part of this survey we will record key click events within our website. This will
                help give us an idea of how you interacted with our website. To do this we need you
                to generate a uuid and enter it here and also on your survey form so that we can
                anonymously link your results. At any time you can click on the profile button in
                the top right hand corner to view your id.
              </Text>
              <Space size='small'>
                <Text>Get your uuid from</Text>
                <Link href='https://www.uuidgenerator.net/guid' target='_blank'>
                  Here
                </Link>
              </Space>
              <Input
                placeholder='uuid'
                status={status}
                value={id}
                onChange={(e) => setId(e.target.value)}
                onPressEnter={handleConfirm}
                style={{ marginTop: 16 }}
              />
            </Space>
          </Modal>
        </>
      ) : (
        ''
      )}
    </>
  );
}

export default RootLayout;
