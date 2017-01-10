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
					车牌号码 <Input />
				  </Col>
				  <Col span={6}>
					车主姓名 <Input />
				  </Col>
				  <Col span={6}>
					事件性质 
					<Select defaultValue="全部" style={{ width: 100 }}>
						<Option value="全部">全部</Option>
						<Option value="资料欺诈">资料欺诈</Option>
						<Option value="征信不良">征信不良</Option>
						<Option value="还款逾期">还款逾期</Option>
						<Option value="二抵骗贷">二抵骗贷</Option>
					</Select>
				  </Col>
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

class EventList extends React.Component {
	constructor(props) {
		super(props);
		this.columns = [{
			title: '车牌号码',
			dataIndex: 'customer',
			width: '10%',
		}, {
			title: '车型',
			dataIndex: 'adddate',
			width: '10%',
		}, {
			title: '车主姓名',
			dataIndex: 'carnumber',
			width: '10%',
		}, {
			title: '身份证号码',
			dataIndex: 'cartype',
			width: '15%',
		},{
			title: '事件性质',
			dataIndex: 'organization',
			width: '12%',
		},{
			title: '发生时间',
			dataIndex: 'loantype',
			width: '15%',
		},{
			title: '举报人员',
			dataIndex: 'customerstatus',
			width: '11%',
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
								<b className="topbar-tit">事件中心</b>
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

export default EventList