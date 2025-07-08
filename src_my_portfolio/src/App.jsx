import React, { useEffect, useState } from 'react';
import { Avatar, Card, Flex, Layout, Switch, Tooltip } from "antd";
import "./css/cover_photo.css";
import "./css/mymodal.css";
import "./css/avatar.css";
import "./css/app.css"
import {MutedOutlined,SoundOutlined,GoogleOutlined,GithubOutlined,CloseOutlined } from '@ant-design/icons';
import { Button  } from "antd";
import dataProject from './services/project/projects'
import dataOthers from './services/project/others'
import info from './services/info';
import Meta from 'antd/es/card/Meta';
const { Header, Content } = Layout;
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
  const [index,SetIndex] = useState(0)
  const [isOpen,SetIsOpen]= useState(false)
  const [mode,setMode] = useState(0) // 0 : products, 1: others
  const handleClickProduct=(idx)=>{
    SetIndex(idx)
    SetIsOpen(true)
  }
  useEffect(()=>{
    // console.log(data)
  },[])
  return ( 
    <>
      <Card style={ isOpen ? {opacity:"0.77",pointerEvents:'none',userSelect:'none'}:{}}>
        <Layout style={layoutStyle} id='layout'>
            <Header  style={headerStyle}  >
            <div className="cover_photo">
              <div className="p_btn_on_cover_photo">
                <Tooltip title={isMuted ? "Bật âm thanh" : "Tắt âm thanh"} >
                      <Button className='btn_volume' onClick={()=> {SetIsMuted(!isMuted)}} shape="circle" icon={ !isMuted ? <SoundOutlined /> :  <MutedOutlined />  } />
                  </Tooltip>
                  <div className="my_info">
                    <Tooltip title="GitHub của tôi" >
                        <Button onClick={() => window.open(info.githubLink, '_blank', 'noopener')} shape="circle" icon={ <GithubOutlined />  } />
                    </Tooltip>
                    <Tooltip title="Email của tôi"  >
                        <Button  onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to='+info.emailContact, '_blank', 'noopener')} shape="circle" icon={ <GoogleOutlined />   } />
                    </Tooltip>
                  </div>
              </div>
                <video muted={isMuted}  autoPlay loop id='video'>
                    <source src={info.coverVideo} type="video/mp4" />
                </video>
            </div>
            <div className="avatar">
                    <img src={info.avatarURL} alt="" />
              </div>
            <div className="my_name">
                  <span>{info.authorName}</span>
            </div>
            </Header>
            <Content  style={contentStyle} >
              <Flex gap="small" wrap justify='center' > 
                <Button type={mode == 0 ? "primary" : 'default'} block size="large" onClick={()=>{setMode(0)}}>Các sản phẩm của tôi</Button>
                <Button type={mode == 1 ? "primary" : 'default'} block size="large" onClick={()=>{setMode(1)}}>Các sản phẩm khác</Button>
              </Flex>

              <div style={ {marginTop: '20px'}} >
                {mode == 0 &&
                <Card title="Các dự án nho nhỏ" bordered style={{textAlign:'left'}}  size ='default'>
                  <Flex wrap gap='25px' >
                    {dataProject.map((val,idx)=>{
                      return (
                        <div className="product-item" key={idx}>
                          <Card
                              onClick={()=>{handleClickProduct(idx)}}
                              bordered={false}
                              hoverable
                              className='hover_card'
                              cover={<img alt="example" src={val.image} 
                                style={
                                  {
                                    aspectRatio: "16 / 9",
                                    objectFit: 'cover'
                                  }
                                }
                              />}
                              size ='default'
                              style={
                                {height:'100%', webkitTransition:'all 1s',transition:'all 1s'}
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
                }
                {mode == 1 &&
                <Card title="Các dự án khác nho nhỏ" bordered style={{textAlign:'left'}}  size ='default'>
                  <Flex wrap gap='25px' >
                    {dataOthers.map((val,idx)=>{
                      return (
                        <div className="product-item others" key={idx}>
                          <Card
                              bordered={false}
                              hoverable
                              className='hover_card'
                              cover={<img alt="example" src={val.image} 
                                style={
                                  {
                                    aspectRatio: "1/1",
                                    objectFit: 'cover'
                                  }
                                }
                              />}
                              size ='default'
                              style={
                                {height:'100%', webkitTransition:'all 1s',transition:'all 1s'}
                              }
                            >         
                              <Meta  
                              title={val.title}
                              description={
                                <>
                                  <h4>{val.author}</h4>
                                  <p style={{textAlign:'right'}}><b>{val.finishedDay}</b></p>
                                </>
                              } />
                            </Card>
                      </div>
                      )
                    })}
                  </Flex>
                  </Card>
                }
                </div>
            </Content>
          
        </Layout>
    </Card>
    {mode ==0 && isOpen ? 
      <div className="container">
        <div className="mymodal">
            <Tooltip title="Nhấn để thoát khỏi">
                <Button shape="circle" icon={<CloseOutlined />} onClick={()=>{SetIsOpen(false)}} />
            </Tooltip>
            <video src={dataProject[index].videoURL} controls autoPlay></video>
       </div>
       </div>
      :""}
    </>
  )
};

export default App;