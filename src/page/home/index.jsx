import React from "react";
import { Breadcrumb } from 'antd';

import PageTitle from 'component/page-title/index.jsx';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb> */}
                <PageTitle title="首页" />
                <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
            </React.Fragment>
        );
    }
}

export default Home;