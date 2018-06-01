import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import bindOnce from 'react-bind-once';
import { Layout, Menu, Icon, Avatar } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

import './index.css';
import style from './index.css'

class NavTop extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="user">
                        <Avatar icon="user" /> 
                        <span>欢迎，xxxx</span>
                        <Icon type="poweroff" className="icon" />
                    </div>
                </Header>
            </React.Fragment>
        )
    }
}

class NavSide extends React.Component {
    constructor(props) {
        super(props);
        bindOnce(this);
        this.state = {
            collapsed: false,
        }
    }

    onCollapse() {
        this.setState({
            collapsed : !this.state.collapsed
        });
    }

    render() {
        return (
            <React.Fragment>
                <Sider
                collapsible
                breakpoint="lg"
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                >
                    {/* <div className={style.logo} /> */}
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
    }
    render(){
        return (
            <React.Fragment>
                <Layout>
                    <NavSide/>
                    <Layout>
                        <NavTop/>                        
                        <Content style={{ padding: '0 50px', marginTop: 64 }}>{this.props.children}</Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by y1xl</Footer>
                    </Layout>
                </Layout>
            </React.Fragment>
        )
    }
}

export default Layouts;