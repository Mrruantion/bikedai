import React, { Component } from 'react'
import { Button, Icon, DatePicker, Row, Col, Input, Table, Tabs } from 'antd'
import moment from 'moment';
const RangePicker = DatePicker.RangePicker;
const TabPane = Tabs.TabPane;


const ListSearch = React.createClass({
	render(){
		return (
			<div style={{ marginBottom: 20, marginTop: 20 }}>
				<Row>
					<Col span={6}>
						车牌号码 <Input />
					</Col>
					<Col span={6}>
						客户姓名 <Input />
					</Col>
					<Col span={7}>
						所属组织 <Input style={{ width: "70%"}}/>
					</Col>
					<Col span={4}>
						<Button type="primary">查询</Button>
					</Col>
				</Row>
				<Row gutter={16} style={{ marginTop: 20}} >
					<Col span={14}>
						选择时间 
						<RangePicker
							ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
                         />
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

export default class PageOne extends React.Component {
	constructor(props){
		super(props)
		this.columns = [{
			title: '车牌号码',
			dataIndex: 'devicename',
			width: '10%',
		}, {
			title: '车型',
			dataIndex: 'cartype',
			width: '10%',
		}, {
			title: '所属组织',
			dataIndex: 'organization',
			width: '12%',
		}, {
			title: '客户姓名',
			dataIndex: 'customer',
			width: '10%',
		},{
			title: '暗访人员',
			dataIndex: 'researcher',
			width: '10%',
		},{
			title: '暗访时间',
			dataIndex: 'investigations_time',
			width: '16%',
		},{
			title: '暗访结果',
			dataIndex: 'investigations_results',
			width: '10%',
		},{
			title: '操作',
			dataIndex: 'operation',
			width: '12%',
		}];
	}
	
	render(){
		const columns = this.columns;
		return(
			<div>
				<div className="topbar"> 
					<div className="topbar-cell">
						<b className="topbar-tit"><span id="title">暗访记录</span></b>
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
					<Tabs  type="card">
						<TabPane tab="全部状态" key="1">
							<ListSearch />
							<Table rowSelection={rowSelection} columns={columns} />
						</TabPane>
						<TabPane tab="常住地址不真实()" key="2">
							<ListSearch />
							<Table rowSelection={rowSelection} columns={columns} />
						</TabPane>	
						<TabPane tab="工作地址不真实()" key="3">
							<ListSearch />
							<Table rowSelection={rowSelection} columns={columns} />
						</TabPane>
						<TabPane tab="3天以上未回家()" key="4">
							<ListSearch />
							<Table rowSelection={rowSelection} columns={columns} />
						</TabPane>
						<TabPane tab="3天以上未上班()" key="5">
							<ListSearch />
							<Table rowSelection={rowSelection} columns={columns} />
						</TabPane>
					</Tabs>
				</div>
			</div>	
		)
	}
}

