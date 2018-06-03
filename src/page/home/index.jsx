import React from "react";
import Axios from "axios";
import { Card, Col, Row } from 'antd';

import PageTitle from 'component/page-title/index.jsx';
import { API_BASE_URL } from 'service/api.js';

import './index.css'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userCount       : '-',
            productCount    : '-',
            orderCount      : '-'
        }
    }
    componentDidMount(){
        this.statisticData();
    }

    statisticData(){
        let that = this;
        Axios.get(`${API_BASE_URL}/manage/statistic/base_count.do`)
        .then(function (res) {
            let status = res.data.status;
            if (status == 0) {
                let data = res.data.data;
                that.setState(data)
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render(){
        let {userCount, productCount, orderCount} = this.state
        
        return (
            <React.Fragment>
                <PageTitle title="首页" />
                <div style={{ background: '#fff', padding: 24 }}>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card hoverable className="card" >
                                <h1>{userCount}</h1>
                                <h2>用户总数</h2>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card hoverable className="card" >
                                <h1>{productCount}</h1>
                                <h2>商品总数</h2>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card hoverable className="card" >
                                <h1>{orderCount}</h1>
                                <h2>订单总数</h2>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;