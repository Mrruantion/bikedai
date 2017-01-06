import React, {PropTypes} from 'react'
import { render } from 'react-dom'

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'





import Header from './components/Header/Header.js'
import SiderDemo from './components/Sidebar/Sidebar.js'

const ACTIVE = { color: 'red' }


const App = React.createClass({

  render() {
    return (
      <div>
		<Header />
		<SiderDemo />
      </div>
    );
  },
});
// 配置路由
render((
    <Router history={hashHistory} >
        <Route path="/" component={App}>
		</Route>
    </Router>
), document.getElementById('root'));