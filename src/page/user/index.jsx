import React from 'react';
import { Table, Modal } from 'antd';
import PageTitle    from 'component/page-title/index.jsx';
import Axios from 'axios';
import { API_BASE_URL } from 'service/api.js';
import { request } from 'service/request.js';

class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading : false,
            pageNum : 1,
            data : []
        }
    }
    componentDidMount(){
        this.loadUserList();
    }

    loginError(msg) {
        Modal.error({
            title: '出错了耶!',
            content: msg,
        });
    }

    loadUserList() {
      request({
        type    : 'post',
        url     : `${API_BASE_URL}/manage/user/list.do`,
        data    : {
            pageNum : this.state.pageNum
        }
      })
      .then(res => {
        console.log(res);
        let status = res.status;
        if(status == 0) {
            let data = res.data

        } else if(status == 10) {
            let msg = res.msg;
            this.loginError(msg);
            this.props.history.push('/login?redirect=' + encodeURIComponent(window.location.pathname));
        }
      }, errMsg => {
        console.log(errMsg);
      });
        // let that = this;
        // let pageNum = this.state.pageNum;
        // Axios.post(`${API_BASE_URL}/manage/user/list.do`, pageNum)
        //   .then(function (res) {
        //     console.log(res);
        //     let status = res.data.status;
        //     if(status == 0) {
        //         let data = res.data.data

        //     } else if(status == 10) {
        //         let msg = res.data.msg;
        //         that.loginError(msg);
        //         // that.props.history.push('/login');
        //     }
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
    }

    render(){
        const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
          }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
          }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
          }];

          const columns = [{
            title: 'ID',
            dataIndex: 'name',
          }, {
            title: '用户名',
            dataIndex: 'age',
          }, {
            title: '邮箱',
            dataIndex: 'address',
          }, {
            title: '电话',
            dataIndex: 'a',
          }, {
            title: '注册时间',
            dataIndex: 'b',
          }, {
            title: '操作',
            key: 'action',
            render: (text, record) => (
              <span>
                <a href="javascript:;">Delete</a>
              </span>
            ),
          }];
          
        return (
            <React.Fragment>
                <PageTitle title="用户列表"/>
                <div style={{ background: '#fff', padding: 24 }}>
                    <Table 
                     bordered
                     loading={this.state.loading}
                     columns={columns} 
                     dataSource={data} 
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default UserList;