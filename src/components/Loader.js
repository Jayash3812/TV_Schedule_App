import React from 'react';
import { Spin } from 'antd';

const Loader = ({ size = 'large', tip = 'Loading...' }) => {
  return (
    <div style={styles.container}>
      <Spin size={size} tip={tip} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
  },
};

export default Loader;
