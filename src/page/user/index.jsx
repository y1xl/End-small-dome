import React        from 'react';
import PageTitle    from 'component/page-title/index.jsx';

class Error extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <PageTitle title="用户列表"/>
                <div style={{ background: '#fff', padding: 24 }}>
                    
                </div>
            </React.Fragment>
        );
    }
}

export default Error;