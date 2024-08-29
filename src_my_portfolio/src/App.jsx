import React, { useEffect, useState } from 'react';
import { Avatar, Card, Flex, Layout, Switch, Tooltip } from "antd";
import video from './data/5636516356524.mp4';
import avatar from './data/34832482.jpg'
import "./css/cover_photo.css";
import "./css/avatar.css";
import {MutedOutlined,SoundOutlined,GoogleOutlined,GithubOutlined,WhatsAppOutlined } from '@ant-design/icons';
import { Button } from "antd";
import data from './data/data';
import Meta from 'antd/es/card/Meta';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  lineHeight: '64px',
  padding:0,
  height:'400px',
  backgroundColor: '#FFFFFF',
  position: "relative"
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
};

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: '100%',
  padding: '0 120px',
  height: "100% ",
  backgroundColor: '#FFFFFF',
};
const App = () => {
  const [isMuted,SetIsMuted] = useState(true)
  useEffect(()=>{
    console.log(data);
  },[])
  return ( 
      <Card>
        <Layout style={layoutStyle}>
            <Header  style={headerStyle}  >
            <div className="cover_photo">
              <div className="p_btn_on_cover_photo">
                <Tooltip title="Bật âm thanh" >
                      <Button className='btn_volume' onClick={()=> {SetIsMuted(!isMuted)}} shape="circle" icon={ !isMuted ? <SoundOutlined /> :  <MutedOutlined />  } />
                  </Tooltip>
                  <div className="my_info">
                    <Tooltip title="GitHub của tôi" >
                        <Button onClick={() => window.open('https://github.com/mvtvn78', '_blank', 'noopener')} shape="circle" icon={ <GithubOutlined />  } />
                    </Tooltip>

                    <Tooltip title="Email của tôi"  >
                        <Button   onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=mvt78vn@gmail.com', '_blank', 'noopener')} shape="circle" icon={ <GoogleOutlined />   } />
                    </Tooltip>
                  </div>
              </div>
                <video muted={isMuted}  autoPlay loop id='video'>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className="avatar">
                    <img src={avatar} alt="" />
              </div>
            <div className="my_name">
                  <span>Mai Văn Tiền(Mvt)</span>
            </div>
            </Header>
            <Content style={contentStyle}>
              <Flex gap="small" wrap justify='center' >
                <Button type="primary" block size="large">Sản phẩm</Button>
                <Button  block size="large">Video của tôi</Button>
              </Flex>

              <div style={ {marginTop: '20px'}} >
              <Card title="Các sản phẩm của tôi" bordered style={{textAlign:'left'}}  size ='default'>
                <Flex wrap gap='25px' >
                  {data.map((val,idx)=>{
                    return (
                      <div className="product-item" key={idx}>
                        <Card
                            bordered={false}
                            hoverable
                            cover={<img alt="example" src={val.image} 
                             />}
                            size ='default'
                            style={
                              {height:'100%'}
                            }
                          >         
                            <Meta  avatar={
                            <Avatar src={val.avatar} />} 
                            title={val.title}
                            description={
                              <>
                                <h4>{val.language}</h4>
                                <p>{val.linkGithub}</p>
                                <p style={{textAlign:'right'}}><b>{val.finishedDay}</b></p>
                              </>
                            } />
                          </Card>
                    </div>
                    )
                  })}
                  
                </Flex>
                </Card>

              </div>
            </Content>
           
        </Layout>
    </Card>
  )
};

export default App;