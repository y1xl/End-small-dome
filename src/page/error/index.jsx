import React        from 'react';
import { Link }     from 'react-router-dom';
import Exception from 'ant-design-pro/lib/Exception';

import PageTitle    from 'component/page-title/index.jsx';

class Error extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <PageTitle title="出错啦!"/>
                <div style={{ background: '#fff', padding: 24 }}>
                    <Exception type="404" />
                </div>
            </React.Fragment>
        );
    }
}

export default Error;