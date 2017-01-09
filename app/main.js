import React, {PropTypes} from 'react'
import { render } from 'react-dom'

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

// 引入Antd的导航组件
import { Menu, Icon, Switch, Breadcrumb, Alert } from 'antd'
const SubMenu = Menu.SubMenu

// 引入Ant-Design样式 & Animate.CSS样式
// import 'animate.css/animate.min.css'
// import 'font-awesome/css/font-awesome.min.css'

// 引入主体样式文件
import './main.css'


import Header from './components/Header/Header.js'

import LoginUser from './view/loginuser/loginUser.js'
import Page from './view/page/page.js'
import AssetStatus from './view/assetStatus/assetStatus.js'


/*import LoginUser from './view/loginuser/loginUser.js'*/

const ACTIVE = { color: 'red' }


class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			collapse: false
		}
		this.onCollapseChange = this.onCollapseChange.bind(this);
	}
	onCollapseChange(){
		this.setState ({
			collapse: !this.state.collapse
		})
	}
	
  render() {
	const collapse = this.state.collapse;
	const { routes, params, children } = this.props;
    return (
      <div>
		<Header />
		<div className={collapse ? "layout-aside layout-aside-collapse" : "layout-aside"}>
			<aside className="layout-sider">
			  <Menu mode={collapse ? "vertical" : "inline"} theme="dark" defaultSelectedKeys={['user']}>
				<SubMenu key="sub1" title={<span><Icon type="mail" />{!collapse && <span className="nav-text">风控服务</span>}</span>}>
					<Menu.Item key="1"><Link to="/assetStatus">资产状态</Link></Menu.Item>
					<Menu.Item key="2"><Link to="/page">位置跟踪</Link></Menu.Item>
					<Menu.Item key="3"><Link to="/">趋势分析</Link></Menu.Item>
					<Menu.Item key="4"><Link to="/">报表统计</Link></Menu.Item>
					<Menu.Item key="5"><Link to="/">暗访追车</Link></Menu.Item>
				</SubMenu>
				<SubMenu key="user" title={<span><Icon type="user" />{!collapse && <span className="nav-text">数据中心</span>}</span>}>
					<Menu.Item key="6"><Link to="/">数据概览</Link></Menu.Item>
					<Menu.Item key="7"><Link to="/">客户管理</Link></Menu.Item>
					<Menu.Item key="8"><Link to="/">设备中心</Link></Menu.Item>
					<Menu.Item key="9"><Link to="/">区域管理</Link></Menu.Item>
					<Menu.Item key="10"><Link to="/">事件中心</Link></Menu.Item>
				</SubMenu>
				<SubMenu key="sub3" title={<span><Icon type="team" />{!collapse && <span className="nav-text">用户中心</span>}</span>}>
					<Menu.Item key="11"><Link to="/">账号管理</Link></Menu.Item>
					<Menu.Item key="12"><Link to="/">公告通知</Link></Menu.Item>
					<Menu.Item key="13"><Link to="/">工单管理</Link></Menu.Item>
					<Menu.Item key="14"><Link to="/loginUser">培训中心</Link></Menu.Item>
				</SubMenu>
			  </Menu>
			  <div className="aside-action" onClick={this.onCollapseChange}>
				{collapse ? <Icon type="right" /> : <Icon type="left" />}
			  </div>
			</aside>
			<div className="layout-main">
				{this.props.children}
			</div>
		</div>
      </div>
    )
  }
}

// 配置路由
render((
    <Router history={hashHistory} >
        <Route path="/" component={App}>
            <IndexRoute breadcrumbName="增加车辆信息" component={LoginUser} />
			<Route path="/loginUser" component={LoginUser} />
			<Route path="/page" component={Page} />
			<Route path="assetStatus" component={AssetStatus} />
        </Route>
    </Router>
), document.getElementById('root'));