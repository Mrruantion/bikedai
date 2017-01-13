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

export default class PageTwo extends React.Component {
	constructor(props){
		super(props)
		this.columns = [{
			title: '物联网卡',
			dataIndex: 'internet_card',
			width: '12%',
		}, {
			title: 'ICCID',
			dataIndex: 'ICCID',
			width: '10%',
		}, {
			title: '套餐类型',
			dataIndex: 'package_type',
			width: '10%',
		}, {
			title: '卡商',
			dataIndex: 'card',
			width: '10%',
		},{
			title: '所属组织',
			dataIndex: 'organization',
			width: '12%',
		},{
			title: '付费方式',
			dataIndex: 'payment_method',
			width: '12%',
		},{
			title: '添加日期',
			dataIndex: 'add_date',
			width: '12%',
		},{
			title: '激活日期到期日期',
			dataIndex: 'activation_date',
			width: '12%',
		},{
			title: '操作',
			dataIndex: 'operation',
			width: '10%',
		}];
	}
	
	render(){
		const columns = this.columns;
		return(
			<div>
				<div className="topbar"> 
					<div className="topbar-cell">
						<b className="topbar-tit"><span id="title">我的流量卡</span></b>
					</div>
					<div className="topbar-cell">
						<span className="fr">
							<Button type="primary"><span><Icon type="reload" /></span>刷新</Button>
							<Button type="primary"><span><Icon type="export" /></span>导出</Button>
						</span>
					</div>
				</div>
				<div style={{ marginTop: 20 }} className="dataPick">
					<Row>
						<Col span={6}>
							物联网卡号 <Input />
						</Col>
						<Col span={4}>
							套餐类型 
							<Select defaultValue="全部" style={{ width: 88 }}>
								<Option value="全部">全部</Option>
								<Option value="5M/月">5M/月</Option>
								<Option value="10M/月">10M/月</Option>
								<Option value="20M/月">20M/月</Option>
								<Option value="30M/月">30M/月</Option>
							</Select>
						</Col>
						<Col span={4}>
							卡商 
							<Select defaultValue="全部" style={{ width: 88 }}>
								<Option value="全部">全部</Option>
								<Option value="移动">移动</Option>
								<Option value="联通">联通</Option>
								<Option value="电信">电信</Option>
							</Select>
						</Col>
						<Col span={10}>
							所属组织 <Input />
						</Col>
					</Row>
					<Row style={{ marginTop: 20}} >
						<Col span={4}>
							付费方式
							<Select defaultValue="全部" style={{ width: 88 }}>
								<Option value="全部">全部</Option>
								<Option value="包年">包年</Option>
							</Select>
						</Col>
						<Col span={8}>
							添加时间 <DatePicker />
						</Col>
						<Col span={3}>
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

