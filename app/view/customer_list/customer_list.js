import React, { Component } from 'react'
import { Button, Icon, Tabs, Input, Row, Col, Select, Table } from 'antd'
const TabPane = Tabs.TabPane;
const Option = Select.Option;

import './index.css'

const ListSearch = React.createClass({
	render(){
		return (
			<div style={{ marginBottom: 20 }}>
				<Row gutter={16}>
				  <Col span={6}>
					客户姓名 <Input />
				  </Col>
				  <Col span={6}>
					车牌号码 <Input />
				  </Col>
				  <Col span={6}>
					所属组织 <Input />
				  </Col>
				  <Col span={6}>
					贷款类型 
					<Select defaultValue="全部" style={{ width: 88 }}>
						<Option value="全部">全部</Option>
						<Option value="抵押贷款">抵押贷款</Option>
						<Option value="按揭贷款">按揭贷款</Option>
					</Select>
				  </Col>
				</Row>
				<Row gutter={16} style={{ marginTop: 20 }}>
				  <Col span={6}>
					<Button type="primary">查询</Button>
				  </Col>
				</Row>
			</div>
		)
	}
})

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

class CustomerList extends React.Component {
	constructor(props) {
		super(props);
		this.columns = [{
			title: '客户姓名',
			dataIndex: 'customer',
			width: '10%',
		}, {
			title: '添加日期',
			dataIndex: 'adddate',
			width: '10%',
		}, {
			title: '车牌号码',
			dataIndex: 'carnumber',
			width: '10%',
		}, {
			title: '车型',
			dataIndex: 'cartype',
			width: '10%',
		},{
			title: '所属组织',
			dataIndex: 'organization',
			width: '19%',
		},{
			title: '贷款类型',
			dataIndex: 'loantype',
			width: '8%',
		},{
			title: '客户状态',
			dataIndex: 'customerstatus',
			width: '8%',
		},{
			title: '设备数量',
			dataIndex: 'devicenumber',
			width: '8%',
		},{
			width: '14%',
			title: '操作',
			dataIndex: 'operation',
			render: () => {
				return (<div className="editable-row-operation">
							<span>
								<a>删除</a>
							</span>
						</div>);
			},
		}];
		
	}
	render(){
		const columns = this.columns;
		return (
			<div className="main-box">
				<div className="content-wrap">
					<div className="content-layout pl20 pr20">
						<div className="topbar"> 
							<div className="topbar-cell">
								<b className="topbar-tit">客户管理</b>
							</div>
							<div className="topbar-cell">
								<span className="fr">
									<Button type="primary"><span><Icon type="plus-circle-o" /></span>添加</Button>
									<Button type="primary"><span><Icon type="minus-circle-o" /></span>删除</Button>
									<Button type="primary"><span><Icon type="export" /></span>导出</Button>
								</span>
							</div>
						 </div>
						 <div style={{ marginTop: 30 }}>
							<ListSearch />
							<Table rowSelection={rowSelection} columns={columns} />;
						 </div>
					</div>
				</div>	
			</div>
		)
	}
}

export default CustomerList