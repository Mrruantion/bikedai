import React, { Component } from 'react'
import { Button, Icon, Row, Col, Input, Table, Tabs, Select } from 'antd'
const TabPane = Tabs.TabPane;
const Option = Select.Option;


export default class PageOne extends React.Component {
	constructor(props){
		super(props)
		this.columns = [{
			title: '角色名称',
			dataIndex: 'type',
			width: '20%',
		}, {
			title: '所属角色组',
			dataIndex: 'device_status',
			width: '20%',
		}, {
			title: '角色状态',
			dataIndex: 'organization',
			width: '20%',
		}, {
			title: '权限状态',
			dataIndex: 'add_date',
			width: '25%',
		},{
			title: '操作',
			dataIndex: 'operation',
			width: '15%',
		}];
	}
	
	render(){
		const columns = this.columns;
		return(
			<div>
				<div className="topbar"> 
					<div className="topbar-cell">
						<b className="topbar-tit"><span id="title">角色管理</span></b>
					</div>
					<div className="topbar-cell">
						<span className="fr">
							<Button type="primary"><span><Icon type="plus-circle-o" /></span>添加</Button>
							<Button type="primary"><span><Icon type="reload" /></span>刷新</Button>
							<Button type="primary"><span><Icon type="export" /></span>导出</Button>
						</span>
					</div>
				</div>
				<div style={{ marginTop: 20 }} className="dataPick">
					<Row>
						<Col span={6}>
							角色名称 <Input />
						</Col>
						<Col span={6}>
							所属角色组 
							<Select defaultValue="全部" style={{ width: 120 }}>
								<Option value="全部">全部</Option>
								<Option value="系统管理员">系统管理员</Option>
								<Option value="普通管理员">普通管理员</Option>
								<Option value="一般监控员">一般监控员</Option>
							</Select>
						</Col>
						<Col span={6}>
							<Button type="primary">查询</Button>
						</Col>
					</Row>
					<div style={{ marginTop: 20 }}>
						<Table columns={columns} />
					</div>
				</div>
			</div>	
		)
	}
}

