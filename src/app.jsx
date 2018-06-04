import React from 'react';
import ReactDOM from 'react-dom';

import './style/reset.css';
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css';
import './style/base.css';

import AppRouter from './router/router';

ReactDOM.render(
  <AppRouter/>,
  document.getElementById('root')
);