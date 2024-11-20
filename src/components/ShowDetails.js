import React, { useState, useEffect } from 'react';
import { Table, Card, Button } from 'antd';
import Loader from './Loader';

const ShowDetails = ({ show, onBack }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDetails = async () => {
      try {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Failed to load show details:', error);
      }
    };
    loadDetails();
  }, [show]);

  if (!show) return null;

  const columns = [
    {
      title: 'Property',
      dataIndex: 'property',
      key: 'property',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
  ];

  const data = [
    { key: 1, property: 'Name', value: show.name },
    { key: 2, property: 'Language', value: show.language },
    { key: 3, property: 'Genres', value: show.genres.join(', ') },
    { key: 4, property: 'Premiered', value: show.premiered },
    { key: 5, property: 'Rating', value: show.rating?.average || 'N/A' },
  ];

  if (loading) {
    return <Loader tip="Loading show details..." />;
  }

  return (
    <Card
      title={show.name}
      extra={
        <Button type="primary" onClick={onBack}>
          Back
        </Button>
      }
      style={{ width: 800, margin: '20px auto' }}
    >
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey={(record) => record.key}
        style={{ marginBottom: '20px' }}
      />
      <div dangerouslySetInnerHTML={{ __html: show.summary }} />
    </Card>
  );
};

export default ShowDetails;
