import React, { Component } from 'react'
import { Button, Icon, DatePicker, Row, Col, Input, Table, Tabs, Select } from 'antd'
import moment from 'moment';
const RangePicker = DatePicker.RangePicker;
const TabPane = Tabs.TabPane;
const Option = Select.Option;



export default class PageOne extends React.Component {
	constructor(props){
		super(props)
		this.columns = [{
			title: '组织名称',
			dataIndex: 'type',
			width: '20%',
		}, {
			title: '上级组织',
			dataIndex: 'device_status',
			width: '20%',
		}, {
			title: '联系人',
			dataIndex: 'organization',
			width: '8%',
		}, {
			title: '联系电话',
			dataIndex: 'add_date',
			width: '12%',
		},{
			title: '组织地址',
			dataIndex: 'activation_date',
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
						<b className="topbar-tit"><span id="title">组织管理</span></b>
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
							所属组织 <Input />
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

