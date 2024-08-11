import React , {useState} from 'react'
import { useGetExchangesQuery } from '../services/cryptoExchanges'
import Loader from './Loader'
import {Card,Row,Col,Input,Typography,Avatar,Tooltip,Modal} from 'antd'
import millify from 'millify'
const {Title} = Typography
const ExchangeRow = ({ item, index }) => {
  // const [isModalVisible, setIsModalVisible] = useState(false);

  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };

  return (
    <>
      <Card hoverable style={{ marginBottom: '1rem' }}>
      <Row gutter={16}>
  <Col xs={4} sm={4}>
    <Title level={4} style={{ fontSize: '0.9rem' }}>
      {index + 1}
    </Title>
  </Col>
  <Col xs={5} sm={5}>
    <Title level={4} style={{ fontSize: '0.9rem' }}>
      {item.exchange_name}
    </Title>
  </Col>
  <Col xs={5} sm={5}>
    <Title level={4} style={{ fontSize: '0.9rem' }}>
      ${Math.round(item.vol_derivatives_24h + item.vol_spot_24h).toLocaleString()}
    </Title>
  </Col>
  <Col xs={5} sm={5}>
    <div
      style={{
        fontSize: '0.7rem', // Reduced font size
        alignItems: 'center',
        fontWeight: 'bolder',
        color: 'white',
        backgroundColor:
          item?.rating_spot?.includes('A')
            ? 'green'
            : item?.rating_spot?.includes('B')
            ? 'deepskyblue'
            : item?.rating_spot?.includes('C')
            ? 'orange'
            : 'red',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '10px', // Reduced border radius
        padding: '1px', // Reduced padding
        height: '20px', // Reduced height
        width: '40px', // Reduced width for larger screens
        '@media (max-width: 576px)': {
          width: '35%', // Reduced width for smaller screens
        },
      }}
    >
      {item.rating_spot == null ? 'N/A' : item.rating_spot}
    </div>
  </Col>
  <Col xs={5} sm={5} className="website-headings">
    <a href={item.website} target="_blank" rel="noopener noreferrer">
      <Title level={4} underline={true} style={{ color: 'deepskyblue', fontSize: '0.9rem' }}>
        Visit {item.id}
      </Title>
    </a>
  </Col>
</Row>
      </Card>
      
    </>
  );
};

const Exchanges = () => {
  const {data,isFetching} = useGetExchangesQuery(100)
  console.log(data)
  if(isFetching){
    return <Loader />
  }
  return (
    <>
      <Row gutter={[0, 16]} className="exchanges-stats">
      <Col span={24}>
  <Card>
    <Row gutter={16}>
      <Col xs={4} sm={4}>
        <Title level={4} style={{ fontSize: '0.9rem' }}>
          <Tooltip title="Rank">#</Tooltip>
        </Title>
      </Col>
      <Col xs={5} sm={5}>
        <Title level={4} style={{ fontSize: '0.9rem' }}>
          <Tooltip title="Name of the Exchange">Name</Tooltip>
        </Title>
      </Col>
      <Col xs={5} sm={5}>
        <Title level={4} style={{ fontSize: '0.9rem' }}>
          <Tooltip title="24-hour trading volume">24h Volume</Tooltip>
        </Title>
      </Col>
      <Col xs={5} sm={5}>
        <Title level={4} style={{ fontSize: '0.9rem' }}>
          <Tooltip title="Refer to the security and trustworthiness of a platform">Rating</Tooltip>
        </Title>
      </Col>
      <Col xs={5} sm={5}>
        <Title level={4} style={{ fontSize: '0.9rem' }}>
          <Tooltip title="Link to the website">Website</Tooltip>
        </Title>
      </Col>
    </Row>
  </Card>
</Col>
  <Col span={24}>
    {data?.data?.items?.map((item, index) => {return <ExchangeRow key={index} item={item} index={index}/>})}
  </Col>
</Row>
    </>
  )
}

export default Exchanges
