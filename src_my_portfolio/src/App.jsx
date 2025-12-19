import  { useEffect, useState } from 'react';
import { Avatar, Card, Flex, Layout, List, Switch, Tag } from "antd";
import {MutedOutlined,SoundOutlined,GoogleOutlined,GithubOutlined,CloseOutlined, AppstoreOutlined, CheckCircleOutlined, ToolOutlined, UserOutlined } from '@ant-design/icons';
import { Modal, Row, Col, Typography, Button, Tooltip } from "antd";
import {  CalendarOutlined } from "@ant-design/icons";
import dataProject from './services/project/projects';
import dataOthers from './services/project/others';
import info from './services/info';
import Meta from 'antd/es/card/Meta';
import "./css/cover_photo.css";
import "./css/mymodal.css";
import "./css/avatar.css";
import "./css/app.css";
const { Title, Text, Paragraph } = Typography;
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
    
      <Modal
      open={isOpen}
      footer={null}
      closable={false}
      width={1280}
      centered
      bodyStyle={{ padding: 16 }}
    >
      {/* Nút đóng */}
      <div style={{ textAlign: "right" }}>
        <Tooltip title="Đóng">
          <Button
            shape="circle"
            icon={<CloseOutlined />}
            onClick={() => SetIsOpen(false)}
          />
        </Tooltip>
      </div>
      <Row gutter={8}>
        {/* Video bên trái */}
        <Col span={16}>
          <video
            src={dataProject[index].videoURL} 
            controls
            autoPlay
            style={{
              width: "100%",
              borderRadius: 8,
              background: "#000",
            }}
          />
        </Col>

        {/* Thông tin bên phải */}
        <Col span={8}>
          <Title style={{textAlign:'center'}} level={4}>Mô tả chi tiết</Title>
          <Card bordered={false} style={{ marginTop: 16 }}>
      {/* 1️⃣ Ứng dụng làm gì */}
      <Title level={5}>
        <AppstoreOutlined /> Ứng dụng làm gì
      </Title>
      <Paragraph className="yt-description">
      {dataProject[index].about} 
      </Paragraph>
 {/* 4️⃣ Vai trò trong dự án */}
    <Title level={5} style={{ marginTop: 16 }}>
      <UserOutlined /> Vai trò trong dự án
    </Title>
    <List
      size="small"
      dataSource={dataProject[index].role}
      renderItem={(item) => <List.Item>• {item}</List.Item>}
    />
      {/* 2️⃣ Tính năng xây dựng */}
      <Title level={5} style={{ marginTop: 16 }}>
        <CheckCircleOutlined /> Tính năng xây dựng
      </Title>
      <List
        size="small"
        dataSource={dataProject[index].features}
        renderItem={(item) => (
          <List.Item>• {item}</List.Item>
        )}
      />
 
      {/* 3️⃣ Công nghệ sử dụng */}
      <Title level={5} style={{ marginTop: 16 }}>
        <ToolOutlined /> Công nghệ sử dụng
      </Title>
      <div>
        {dataProject[index].tech.map((t, i) => (
          <Tag key={i} color="blue" style={{ marginBottom: 6 }}>
            {t}
          </Tag>
        ))}
      </div>
     
    </Card>
        </Col>
      </Row>

      {/* Mô tả bên dưới */}
      <div style={{ marginTop: 16 }}>
        <Title level={3}>{dataProject[index].title} </Title>
        <Text type="secondary">
            <CalendarOutlined /> {dataProject[index].finishedDay}
          </Text>
      </div>
    </Modal>
      :""}
    </>
  )
};

export default App;