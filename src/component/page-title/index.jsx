import React from 'react';

class PageTitle extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        document.title = this.props.title + ' - 后台管理系统小dome';
    }
    render(){
        return (
            <div>
                <h1 className="page-header">{this.props.title}</h1>
            </div>
        );
    }
}

export default PageTitle;