import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import { fetchSchedule } from '../service/tvmazeAPI';
import Loader from './Loader';

const Schedule = ({ onShowSelect }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSchedule = async () => {
      try {
        const schedule = await fetchSchedule();
        setData(schedule);
      } catch (error) {
        console.error('Failed to fetch schedule:', error);
      } finally {
        setLoading(false);
      }
    };
    getSchedule();
  }, []);

  const columns = [
    {
      title: 'Show Name',
      dataIndex: 'name',
      key: 'name',
      render: (_, record) => record.show.name,
      width: '30%',
    },
    {
      title: 'Time',
      dataIndex: 'airtime',
      key: 'airtime',
      width: '20%',
    },
    {
      title: 'Channel',
      dataIndex: 'network',
      key: 'network',
      render: (_, record) =>
        record.show.network ? record.show.network.name : 'N/A',
      width: '30%',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button type="primary" onClick={() => onShowSelect(record.show)}>
          View Details
        </Button>
      ),
      width: '20%',
    },
  ];

  if (loading) {
    return <Loader tip="Loading TV schedule..." />;
  }

  return (
    <div style={styles.container}>
      <Table
        dataSource={data}
        columns={columns}
        rowKey={(record) => record.id}
        pagination={{
          pageSize: 10,
          position: ['bottomCenter'],
        }}
        style={styles.table}
      />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100%',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: '#f0f2f5',
    overflow: 'hidden',
  },
  table: {
    width: '90%',
    maxWidth: '1245px',
    border: '1px solid #d9d9d9',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default Schedule;
