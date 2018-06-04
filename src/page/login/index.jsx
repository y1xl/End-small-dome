import React from 'react';
import bindOnce from 'react-bind-once';
import LoginPC from 'ant-design-pro/lib/Login';
import { Alert, Checkbox,Row } from 'antd';

import Axios from 'axios';
import { API_BASE_URL } from 'service/api.js';
import Util from 'util/util.js';

import './index.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        bindOnce(this);
        this.state = {
            autoLogin : true,
            defaultValue : null,
            type : 'error',
            notice : '',
            username : '',
            password : '',
            redirect: Util.getUrlParam('redirect') || '/'
        }
    }
    componentWillMount() {
        document.title = '登录 - 后台管理系统小dome';
        this.setDefaultValue();
    }

    setDefaultValue() {
        if(this.state.autoLogin) {
            let username = Util.getStorage('userInfo').username;
            this.setState({
                defaultValue: username,
            })
        }
    }    

    onInputChange(e) {
        let inputValue  = e.target.value,
            inputName   = e.target.id;
        this.setState({
            [inputName] : inputValue
        });
    }

    onSubmit() {
        let that = this;
        let { username, password } = this.state;
        username.trim();
        password.trim();

        if( !username || !password ){
            this.setState({ 
                notice : '用户名或密码不能为空',
                type : 'warning'
            })
    		return false;
    	}
        
        let params = new URLSearchParams();
        params.append('username', username);
        params.append('password', password);
        Axios.post(`${API_BASE_URL}/manage/user/login.do`, params)
          .then(function (res) {
            console.log(res);
            let status = res.data.status;
            if(status == 0) {
                let data = res.data.data
                Util.setStorage('userInfo', data);
                that.props.history.push(that.state.redirect);
            } else {
                let msg = res.data.msg;
                that.setState({
                    notice : msg
                })
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    onInputKeyUp(e){
        if(e.keyCode === 13){
            this.onSubmit();
        }
    }

    changeAutoLogin (e) {
        this.setState({
          autoLogin: e.target.checked,
        })
    }
    forget() {
        this.setState({ 
            notice : '你以为点我就能想起来了吗',
            type : 'warning'
        })
    }

    render() {
        let { type, notice, autoLogin, defaultValue } = this.state;

        return (
            <React.Fragment>
                <div className="bg">
                    <LoginPC className="login" onSubmit={this.onSubmit} >
                        {
                            this.state.notice &&
                            <Alert style={{ marginBottom: 24 }} message={notice} type={type} showIcon closable />
                        }
                        <LoginPC.UserName 
                         name="username" 
                         onChange={this.onInputChange} 
                         defaultValue={defaultValue} 
                         onKeyUp={this.onInputKeyUp} 
                        />
                        <LoginPC.Password 
                         name="password" 
                         placeholder="admin" 
                         onChange={this.onInputChange} 
                         onKeyUp={this.onInputKeyUp} 
                        />
                        <div>
                            <Checkbox checked={autoLogin} onChange={this.changeAutoLogin}>记住我</Checkbox>
                            <a style={{ float: 'right' }} href="javascript:;" onClick={this.forget}>忘记了？</a>
                        </div>
                        <LoginPC.Submit>登陆</LoginPC.Submit>
                    </LoginPC> 
                </div>

            </React.Fragment>
        )
    }

}

export default Login;