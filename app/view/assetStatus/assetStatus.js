import React, { Component } from 'react'
import { Button, Icon, Tabs } from 'antd'
const TabPane = Tabs.TabPane;

import './index.css'

const ListSearch = React.createClass({
	render(){
		return (
			<Button type="primary">M</Button>
		)
	}
})

class AssetStatus extends React.Component {
	render(){
		return (
			<div className="main-box">
				<div className="content-wrap">
					<div className="content-layout pl20 pr20">
						<div className="topbar"> 
							<div className="topbar-cell">
								<b className="topbar-tit">资产状态</b>
							</div>
							<div className="topbar-cell">
								<span className="fr">
									<Button type="primary"><span><Icon type="reload" /></span>刷新</Button>
									<Button type="primary"><span><Icon type="export" /></span>导出</Button>
								</span>
							</div>
						 </div>
						 <div style={{ marginTop: 30 }}>
							<Tabs  type="card">
								<TabPane tab="全部状态" key="1">
									<ListSearch />
								</TabPane>
								<TabPane tab="离线超时报警" key="2">Content of Tab Pane 2</TabPane>
								<TabPane tab="停车超时报警" key="3">Content of Tab Pane 3</TabPane>
								<TabPane tab="进敏感区域报警" key="4">Content of Tab Pane 1</TabPane>
								<TabPane tab="出行政区域报警" key="5">Content of Tab Pane 2</TabPane>
								<TabPane tab="敏感区域停车超时报警" key="6">Content of Tab Pane 3</TabPane>
								<TabPane tab="未进常用区域超时报警" key="7">Content of Tab Pane 1</TabPane>
								<TabPane tab="出围栏报警" key="8">Content of Tab Pane 2</TabPane>
								<TabPane tab="有线无线分离报警" key="9">Content of Tab Pane 3</TabPane>
								<TabPane tab="异动报警" key="10">Content of Tab Pane 3</TabPane>
								<TabPane tab="设备功能报警" key="11">Content of Tab Pane 3</TabPane>
							</Tabs>
						 </div>
					</div>
				</div>	
			</div>
		)
	}
}

export default AssetStatus