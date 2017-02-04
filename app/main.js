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
/*首页*/
import MainRight from './view/main_right/MainRight.js'
/*资产状态*/
import AssetStatus from './view/assetStatus/assetStatus.js'
/*位置跟踪*/
import Position from './view/position/position.js'
/*趋势分析*/
import Analysis from './view/analysis/analysis.js'
import RiskMap from './view/analysis/page/risk_map.js'
import RiskTrend from './view/analysis/page/risk_trend.js'
/*报表统计*/
import StatisticReport from './view/statisticsReport/statisticsReport.js'
/*暗访追车*/
import RiskMain from './view/riskMain/riskMain.js'
import HuntList from './view/riskMain/page/hunt_list.js'
import InvestigationList from './view/riskMain/page/investigation_list.js'
/*数据概览*/
import DataView from './view/data_view/data_view.js'
/*客户管理*/
import CustomerList from './view/customer_list/customer_list.js'
import CustomerAdd from './view/customer_list/customer_add.js'
/*设备中心*/
import EquipmentCenter from './view/equipmentCenter/equipmentCenter.js'
import GpsList from './view/equipmentCenter/page/gps_list.js'
import SimcordList from './view/equipmentCenter/page/simcord_list.js'

/*区域管理*/
import Area from './view/area/area.js'
import AreaOne from './view/area/page/areaOne.js'
import AreaTwo from './view/area/page/areaTwo.js'
import AreaThree from './view/area/page/areaThree.js'

/*事件中心*/
import EventList from './view/event_list/event_list.js'
import EventAdd from './view/event_list/event_add.js'
/*账号管理*/
import AccountMain from './view/accountMain/accountMain.js'
import AccountOrganization from './view/accountMain/page/account_organization.js'
import AccountOrganizationAdd from './view/accountMain/page/account_organization_add.js'
import AccountRole from './view/accountMain/page/account_role.js'
import AccountRoleAdd from './view/accountMain/page/account_role_add.js'
import AccountUser from './view/accountMain/page/account_user.js'
import AccountUserAdd from './view/accountMain/page/account_user_add.js'
/*公告通知*/
import MessageCenter from './view/messageCenter/messageCenter.js'
import NotifyAll from './view/messageCenter/page/notify_all.js'
import NotifyUnread from './view/messageCenter/page/notify_unread.js'
import NotifyRead from './view/messageCenter/page/notify_read.js'
/*工单管理*/
import WorkList from './view/work_list/work_list.js'
/*培训中心*/
import TrainingCenter from './view/trainingCenter/trainingCenter.js'
import YhPeixunOne from './view/trainingCenter/page/yh_peixun.js'
import YhPeixunTwo from './view/trainingCenter/page/yh_peixun2.js'
import YhPeixunThree from './view/trainingCenter/page/yh_peixun3.js'
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
					<Menu.Item key="6"><Link to="/dataView">数据概览</Link></Menu.Item>
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
			
			<Route path="/analysis" component={Analysis} >
				<IndexRoute component={RiskMap}/>
                <Route path="risk_map" component={RiskMap} />
                <Route path="risk_trend" component={RiskTrend} />
            </Route>
			
			<Route path="/position" component={Position} />
			<Route path="/assetStatus" component={AssetStatus} />
			<Route path="/statisticReport" component={StatisticReport} />
			
			<Route path="riskMain" component={RiskMain}>
                <IndexRoute component={HuntList}/>
                <Route path="hunt_list" component={HuntList} />
                <Route path="investigation_list" component={InvestigationList} />
            </Route>
			
			<Route path="/dataView" component={DataView} />
			<Route path="/customer_list" component={CustomerList} />
			<Route path="/customerAdd" component={CustomerAdd} />
			
			<Route path="/equipmentCenter" component={EquipmentCenter} >
				<IndexRoute component={GpsList}/>
                <Route path="gps_list" component={GpsList} />
                <Route path="simcord_list" component={SimcordList} />
            </Route>
			
			<Route path="/area" component={Area}>
				<IndexRoute component={AreaOne}/>
                <Route path="areaOne" component={AreaOne} />
                <Route path="areaTwo" component={AreaTwo} />
                <Route path="areaThree" component={AreaThree} />
            </Route>
			<Route path="/event_list" component={EventList} />
			<Route path="/eventAdd" component={EventAdd} />
			
			<Route path="/accountMain" component={AccountMain}>
				<IndexRoute component={AccountOrganization}/>
                <Route path="account_organization" component={AccountOrganization} />
				<Route path="account_organization_add" component={AccountOrganizationAdd} />
                <Route path="account_role" component={AccountRole} />
				<Route path="account_role_add" component={AccountRoleAdd} />
                <Route path="account_user" component={AccountUser} />
				<Route path="account_user_add" component={AccountUserAdd} />
            </Route>
			
			<Route path="/work_list" component={WorkList} />
			<Route path="/messageCenter" component={MessageCenter}>
				<IndexRoute component={NotifyAll}/>
                <Route path="notify_all" component={NotifyAll} />
                <Route path="notify_unread" component={NotifyUnread} />
                <Route path="notify_read" component={NotifyRead} />
            </Route>
			
			<Route path="/trainingCenter" component={TrainingCenter}>
				<IndexRoute component={YhPeixunOne}/>
                <Route path="yh_peixun" component={YhPeixunOne} />
                <Route path="yh_peixun2" component={YhPeixunTwo} />
                <Route path="yh_peixun3" component={YhPeixunThree} />
            </Route>
        </Route>
    </Router>
), document.getElementById('root'));