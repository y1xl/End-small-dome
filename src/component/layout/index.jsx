import React from 'react';
import { Link } from 'react-router-dom';
import bindOnce from 'react-bind-once';
import NoticeIcon from 'ant-design-pro/lib/NoticeIcon';
import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';
import { Layout, Menu, Icon, Avatar } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

import Axios from 'axios';
import { API_BASE_URL } from 'service/api.js';
import Util from 'util/util.js';
import './index.css';

class NavTop extends React.Component {
    constructor(props) {
        super(props);
        bindOnce(this);
        this.state = {
            username : Util.getStorage('userInfo').username || ''
        }
    }
    // 退出登录
    onLogout(){
        let that = this;
        Axios.post(`${API_BASE_URL}/user/logout.do`)
          .then(function (res) {
            Util.removeStorage('userInfo');
            // that.props.history.push('/login');
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    render() {
        return (
            <React.Fragment>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%', overflow: 'hidden' }}>
                    <div className="fr">
                        <HeaderSearch placeholder="站内搜索" className="search" />
                        <NoticeIcon count={1} className="notice" />
                        <Avatar icon="user"/> 
                        {
                            this.state.username
                            ? <span className="username">欢迎，{this.state.username}</span>
                            : <Link to="/login"><span className="username">您还未登陆</span></Link>
                        }
                        {
                            this.state.username ? <Link to="/login"><Icon type="poweroff" className="poweroff" onClick={this.onLogout} /></Link> : null
                        }
                    </div>
                </Header>
            </React.Fragment>
        )
    }
}

class NavSide extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Sider
                collapsible
                breakpoint="lg"
                collapsed={this.props.collapsed}
                onCollapse={this.props.onCollapse}
                style={{ overflow: 'auto', height: '100vh', zIndex: 2, position: 'fixed', left: 0 }}
                >
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
                        <Menu.Item key="1">
                            <Link to="/">
                                <Icon type="pie-chart" />
                                <span>首页</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/user">
                                <Icon type="user" />
                                <span>用户</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu
                        key="sub1"
                        title={<span><Icon type="bars" /><span>商品</span></span>}
                        >
                            <Menu.Item key="3"><Link to="/product">商品管理</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/product-category">品类管理</Link></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="5">
                            <Link to="/order">
                                <Icon type="bank" />
                                <span>订单</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
            </React.Fragment>
        )
    }
}

class Layouts extends React.Component {
    constructor(props) {
        super(props);
        bindOnce(this);
        this.state = {
            collapsed: false,
        }
    }

    onCollapse() {
        this.setState({
            collapsed : !this.state.collapsed,
        });
    }

    render(){
        let { collapsed } = this.state
        return (
            <React.Fragment>
                <Layout>
                    <NavSide onCollapse={this.onCollapse} collapsed={collapsed} />
                    <Layout>
                        <NavTop/>                        
                        <Content style={{ padding: '0 50px', marginTop: 64, marginLeft: collapsed?64:200 }}>
                            {this.props.children}
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>React-BackEnd-SmallDome ©2018 Created by y1xl</Footer>
                    </Layout>
                </Layout>
            </React.Fragment>
        )
    }
}

export default Layouts;