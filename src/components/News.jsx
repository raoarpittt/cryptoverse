import React, { useEffect, useState } from 'react'
import {Select,Typography,Row,Col,Avatar,Card} from 'antd'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'
import axios from 'axios';
import Loader from './Loader'
const {Option} = Select
const { Title } = Typography;
const {Text} = Typography;
const News = ({simplified}) => {
  const count = simplified ? 12 : 50
  const [newsCategory,setNewsCategory] = useState('Cryptocurrency')  
  const {data:newsList,isFetching} = useGetCryptoNewsQuery(count)
  const [cryptonews,setNews] = useState([])
  const [imageurllist,setimageurllist] = useState([])
  
  
  useEffect(() => {
    if (!isFetching && newsList?.data) {
      const slicedData = newsList.data.slice(0, count);
      console.log(slicedData)
      setNews(slicedData);
      // geturllist(slicedData);
    }
  }, [newsList, isFetching, count]); // Depend on newsList, isFetching, and count
  if(isFetching){
    return <Loader/>
  }
  // async function geturllist(arr) {
  //   try {
  //     const response = await axios.post('http://localhost:8000/getimageurl', {
  //       newsarr: arr
  //     }, {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });
  //     console.log(response.data);
  //     // Optionally update state with the result
  //     setimageurllist(response.data.redirectedurls);
  //   } catch (error) {
  //     console.error('Error fetching image URLs:', error);
  //   }
  // }


  
  return (
    <>
    <Row gutter={[24,24]} className='news-card-container'>
    {/* {!simplified && (
      <Col span={24}>
        <Select
        showSearch
        className='select-news'
        placeholder='Select a Crypto'
        optionFilterProp='children'
        onChange={(val)=>setNewsCategory(val)}
        filterOption={(input,option)=> option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
        <Option value="Cryptocurrency">Cryptocurrency</Option>
        {data?.data?.coins.map((coin)=><Option value={coin.name}>{coin.name}</Option>)}
        </Select>
      </Col>
    )} */}
        {cryptonews?.map((news,index)=>{
          console.log(""+imageurllist[index])
            return <Col xs={24} sm={12} lg={6} className='news-card' key={index}>
            <a href={news.url} target='_blank' rel='noreferrer'>
                    <Card  className='news-card' 
                    cover={<img  src={news.thumbnail}></img>}                    
                    hoverable 
                     >                         
                      <Text className='news-title' style={{ fontWeight: 'bold' }}>{news.title}</Text>

                      <p>{news.description}</p>  
                      <Text className='news-date' type='secondary'>{moment(news.createdAt).fromNow()}</Text>                   
                    </Card>                    
                    </a>
                
            </Col>
        })}
    </Row>
    </>
  )
}

export default News
