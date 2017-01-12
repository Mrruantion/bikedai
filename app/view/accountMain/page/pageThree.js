import React, { Component } from 'react'
import { Button, Icon, DatePicker, Row, Col, Input, Table, Tabs, Select } from 'antd'
import moment from 'moment';
const RangePicker = DatePicker.RangePicker;
const TabPane = Tabs.TabPane;
const Option = Select.Option;

const rowSelection = {
	onChange: (selectedRowKeys, selectedRows) => {
		console.log(`selectedRowKeys: $(selectedRowKeys)`, `selectedRows: $(selectedRows)`);
	},
	onSelect: (record, selected, selectedRows) => {
		console.log(record, selected, selectedRows);
	},
	onSelectAll: (selected, selectedRows, changeRows) => {
		console.log(selected, selectedRows, changeRows);
	},
	getCheckboxProps: record => ({
		disabled: record.name === 'Disabled User',
	}),
};

export default class PageThree extends React.Component {
	constructor(props){
		super(props)
		this.columns = [{
			title: '用户名称',
			dataIndex: 'type',
			width: '20%',
		}, {
			title: '登录账号',
			dataIndex: 'device_status',
			width: '20%',
		}, {
			title: '状态',
			dataIndex: 'status',
			width: '10%',
		}, {
			title: '所属组织',
			dataIndex: 'organization',
			width: '20%',
		}, {
			title: '已授权角色',
			dataIndex: 'add_date',
			width: '15%',
		}, {
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
						<b className="topbar-tit"><span id="title">用户管理</span></b>
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
							登录账号 <Input />
						</Col>
						<Col span={6}>
							所属组织 <Input />
						</Col>
						<Col span={6}>
							<Button type="primary">查询</Button>
						</Col>
					</Row>
					<div style={{ marginTop: 20 }}>
						<Table rowSelection={rowSelection} columns={columns} />
					</div>
				</div>
			</div>	
		)
	}
}

