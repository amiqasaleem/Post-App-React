import React from 'react'
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

const items =[
  {
    key:'/',
    label:'Home'
  },
  {
    key:'/about',
    label:'About'
  },
  {
    key:'/services',
    label:'Services'
  },
  {
    key:'/contact',
    label:'Contact'
  },
  {
    key:'/profile',
    label:'Profile'
  }
];

const AppLayout = ({children}) => {
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    
    const navigate = useNavigate();
    
    return (
      <Layout>
        <Header style={{ display: 'flex', alignItems: 'center'}}>
          <div className="demo-logo" />
          <Menu onClick={(data)=>navigate(data.key)} theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items}
            style={{ flex: 1, minWidth: 0 }}/>
        </Header>
        <Content style={{ padding: '0 48px',}}>
          <div style={{ background: colorBgContainer,minHeight: 280,padding: 24,borderRadius: borderRadiusLG,}}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', }}>
          Ant Design ©{new Date().getFullYear()} Created by Amiqa Saleem™
        </Footer>
      </Layout>
  )
}
export default AppLayout;

