import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import bindOnce from 'react-bind-once';
import NoticeIcon from 'ant-design-pro/lib/NoticeIcon';
import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';
import { Layout, Menu, Icon, Avatar } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

import './index.css';

class NavTop extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <Avatar icon="user" /> 
                    <span className="username">欢迎，xxxx</span>
                    <Icon type="poweroff" className="icon" />
                    <NoticeIcon count={1} className="notice" />
                    <HeaderSearch placeholder="站内搜索" className="search" />
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
                style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}
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