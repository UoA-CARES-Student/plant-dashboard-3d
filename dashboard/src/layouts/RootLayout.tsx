import { Button, Input, Modal, Space, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  const { Text, Link } = Typography;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState<'' | 'error'>('');
  const [id, setId] = useState('');

  useEffect(() => {
    if (localStorage.getItem('id')) {
      return;
    }
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
  };

  return (
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
          />
        </Space>
      </Modal>
    </>
  );
}

export default RootLayout;
