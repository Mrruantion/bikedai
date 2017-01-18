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

import AssetStatus from './view/assetStatus/assetStatus.js'
import MainRight from './view/main_right/MainRight.js'
import Analysis from './view/analysis/analysis.js'
import Position from './view/position/position.js'
import StatisticReport from './view/statisticsReport/statisticsReport.js'
import RiskMain from './view/riskMain/riskMain.js'
import CustomerList from './view/customer_list/customer_list.js'
import CustomerAdd from './view/customer_list/customer_add.js'
import EquipmentCenter from './view/equipmentCenter/equipmentCenter.js'
import Area from './view/area/area.js'
import EventList from './view/event_list/event_list.js'
import EventAdd from './view/event_list/event_add.js'
import AccountMain from './view/accountMain/accountMain.js'
import WorkList from './view/work_list/work_list.js'
import MessageCenter from './view/messageCenter/messageCenter.js'
import TrainingCenter from './view/trainingCenter/trainingCenter.js'
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
			  <Menu mode={collapse ? "vertical" : "inline"} theme="dark" defaultOpenKeys={['sub1','sub2','sub3']} style={{ color: '#c4c7ca' }}>
				<SubMenu key="sub1" title={<span><Icon type="cloud-o" />{!collapse && <span className="nav-text">风控服务</span>}</span>}>
					<Menu.Item key="1"><Link to="/assetStatus">资产状态</Link></Menu.Item>
					<Menu.Item key="2"><Link to="/position">位置跟踪</Link></Menu.Item>
					<Menu.Item key="3"><Link to="/analysis">趋势分析</Link></Menu.Item>
					<Menu.Item key="4"><Link to="/statisticReport">报表统计</Link></Menu.Item>
					<Menu.Item key="5"><Link to="/riskMain">暗访追车</Link></Menu.Item>
				</SubMenu>
				<SubMenu key="sub2" title={<span><Icon type="tablet" />{!collapse && <span className="nav-text">数据中心</span>}</span>}>
					<Menu.Item key="6"><Link to="/">数据概览</Link></Menu.Item>
					<Menu.Item key="7"><Link to="/customer_list">客户管理</Link></Menu.Item>
					<Menu.Item key="8"><Link to="/equipmentCenter">设备中心</Link></Menu.Item>
					<Menu.Item key="9"><Link to="/area">区域管理</Link></Menu.Item>
					<Menu.Item key="10"><Link to="/event_list">事件中心</Link></Menu.Item>
				</SubMenu>
				<SubMenu key="sub3" title={<span><Icon type="team" />{!collapse && <span className="nav-text">用户中心</span>}</span>}>
					<Menu.Item key="11"><Link to="/accountMain">账号管理</Link></Menu.Item>
					<Menu.Item key="12"><Link to="/messageCenter">公告通知</Link></Menu.Item>
					<Menu.Item key="13"><Link to="/work_list">工单管理</Link></Menu.Item>
					<Menu.Item key="14"><Link to="/trainingCenter">培训中心</Link></Menu.Item>
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
            <IndexRoute component={MainRight} />
			<Route path="/mainRight" component={MainRight} />
			<Route path="/analysis" component={Analysis} />
			<Route path="/position" component={Position} />
			<Route path="/assetStatus" component={AssetStatus} />
			<Route path="/statisticReport" component={StatisticReport} />
			<Route path="/riskMain" component={RiskMain} />
			<Route path="/customer_list" component={CustomerList} />
			<Route path="/customerAdd" component={CustomerAdd} />
			<Route path="/equipmentCenter" component={EquipmentCenter} />
			<Route path="/area" component={Area} />
			<Route path="/event_list" component={EventList} />
			<Route path="/eventAdd" component={EventAdd} />
			<Route path="/accountMain" component={AccountMain} />
			<Route path="/work_list" component={WorkList} />
			<Route path="/messageCenter" component={MessageCenter} />
			<Route path="/trainingCenter" component={TrainingCenter} />
        </Route>
    </Router>
), document.getElementById('root'));