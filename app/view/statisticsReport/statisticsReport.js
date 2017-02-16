import React, { Component } from 'react'
import { Menu } from 'antd'
const SubMenu = Menu.SubMenu;

import { Link } from 'react-router'



import './index.css'

class StatisticsReport extends React.Component {
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
	render(){
		const collapse = this.state.collapse;
		const { routes, params, children } = this.props;
		return (
			<div className="testone">
				<div className="testtwo">
					<div className={collapse ? "menu-third-collapse" : "menu-third"}>
						<div className="menu-third-head">
							报表统计
						</div>
						<aside style={{    height: 500,overflowY: 'auto',overflowX: 'hidden'}}>
							<Menu mode="inline" theme="light" defaultOpenKeys={['sub1']}>
								<SubMenu key="sub1" title="报警报表" >
									<Menu.Item key="1"><Link to="/statisticReport/alarmType1">离线超时报警</Link></Menu.Item>
									<Menu.Item key="2"><Link to="/statisticReport/alarmType2">停车超时报警</Link></Menu.Item>
									<Menu.Item key="3"><Link to="/statisticReport/alarmType3">进敏感区域报警</Link></Menu.Item>
									<Menu.Item key="4"><Link to="/statisticReport/alarmType4">出行政区域报警</Link></Menu.Item>
									<Menu.Item key="5"><Link to="/statisticReport/alarmType5">敏感区域停车超时</Link></Menu.Item>
									<Menu.Item key="6"><Link to="/statisticReport/alarmType6">未进常用区域超时</Link></Menu.Item>
									<Menu.Item key="7"><Link to="/statisticReport/alarmType8">出围栏报警</Link></Menu.Item>
									<Menu.Item key="8"><Link to="/statisticReport/alarmType9">有线无线分离报警</Link></Menu.Item>
									<Menu.Item key="9"><Link to="/statisticReport/alarmType7">设备功能报警</Link></Menu.Item>
									<Menu.Item key="10"><Link to="/statisticReport/alarmType10">单车报警明细</Link></Menu.Item>
								</SubMenu>
								<Menu.Item key="11"><Link to="/statisticReport/mileageReport">里程报表</Link></Menu.Item>
								<Menu.Item key="12"><Link to="/statisticReport/offlineReport">离线报表</Link></Menu.Item>
								<Menu.Item key="13"><Link to="/statisticReport/partReport">停留报表</Link></Menu.Item>
								<Menu.Item key="14"><Link to="/statisticReport/installReport">安装报表</Link></Menu.Item>
								<Menu.Item key="15"><Link to="/statisticReport/uninstallReport">拆卸报表</Link></Menu.Item>
							</Menu>
						</aside>
						<div className={collapse ? "menu-third-btn  menu-third-btn-collapse" : "menu-third-btn"} onClick={this.onCollapseChange}></div>  
					</div>
				</div>
				<div className={ collapse ? 'main-box sta': "main-box main-box-collapse sta"}>
					{this.props.children}
				</div>
			</div>
		)
	}
}


export default StatisticsReport