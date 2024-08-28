import React, { useState } from 'react';
import { Card, Layout, Tooltip } from "antd";
import video from './data/5636516356524.mp4';
import "./css/cover_photo.css";
import {MutedOutlined,SoundOutlined,GoogleOutlined,GithubOutlined,WhatsAppOutlined } from '@ant-design/icons';
import { Button } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  lineHeight: '64px',
  padding:0,
  height:'300px',
  backgroundColor: '#FFFF1F',
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
  height: "500px",
  backgroundColor: '#FFFFFF',
};
const App = () => {
  const [isMuted,SetIsMuted] = useState(true)
  return ( 
      <Card>
        <Layout style={layoutStyle}>
            <Header style={headerStyle} >
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

            </Header>
            {/* <Content style={contentStyle}>

            </Content>
            */}
        </Layout>
    </Card>
  )
};

export default App;