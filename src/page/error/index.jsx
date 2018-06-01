import React        from 'react';
import { Link }     from 'react-router-dom';

import PageTitle    from 'component/page-title/index.jsx';

class Error extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <PageTitle title="出错啦!"/>
                <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                    <span>找不到该路径，</span>
                    <Link to="/">点我返回首页</Link>
                </div>
            </React.Fragment>
        );
    }
}

export default Error;