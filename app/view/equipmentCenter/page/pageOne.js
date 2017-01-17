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

export default class PageOne extends React.Component {
	constructor(props){
		super(props)
		this.columns = [{
			title: 'IMEI/ID 物联网卡 设备型号/类型',
			dataIndex: 'type',
			width: '10%',
		}, {
			title: '库存状态 设备状态 复用率',
			dataIndex: 'device_status',
			width: '12%',
		}, {
			title: '所属组织付费方式',
			dataIndex: 'organization',
			width: '13%',
		}, {
			title: '添加日期',
			dataIndex: 'add_date',
			width: '9%',
		},{
			title: '激活日期 到期日期',
			dataIndex: 'activation_date',
			width: '9%',
		},{
			title: '最后定位时间 数据接收时间',
			dataIndex: 'position_time',
			width: '10%',
		},{
			title: '当前状态',
			dataIndex: 'current_status',
			width: '14%',
		},{
			title: '当前位置',
			dataIndex: 'current_position',
			width: '14%',
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
						<b className="topbar-tit"><span id="title">我的设备</span></b>
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
							IMEI/ID <Input />
						</Col>
						<Col span={6}>
							物联网卡 <Input />
						</Col>
						<Col span={4}>
							设备类型 
							<Select defaultValue="全部" style={{ width: 88 }}>
								<Option value="全部">全部</Option>
								<Option value="有线">有线</Option>
								<Option value="无线">无线</Option>
								<Option value="OBD">OBD</Option>
							</Select>
						</Col>
						<Col span={4}>
							设备型号 
							<Select defaultValue="全部" style={{ width: 88 }}>
								<Option value="全部">全部</Option>
								<Option value="GM06">GM06</Option>
								<Option value="GM09">GM09</Option>
								<Option value="WY200">WY200</Option>
								<Option value="WY220">WY220</Option>
								<Option value="GT06S">GT06S</Option>
							</Select>
						</Col>
						<Col span={4}>
							库存状态 
							<Select defaultValue="全部" style={{ width: 88 }}>
								<Option value="全部">全部</Option>
								<Option value="库存中">库存中</Option>
								<Option value="使用中">使用中</Option>
								<Option value="未拆除">未拆除</Option>
							</Select>
						</Col>
					</Row>
					<Row style={{ marginTop: 20}} >
						<Col span={4}>
							设备状态
							<Select defaultValue="全部" style={{ width: 88 }}>
								<Option value="全部">全部</Option>
								<Option value="正常">正常</Option>
								<Option value="维修中">维修中</Option>
								<Option value="已报废">已报废</Option>
							</Select>
						</Col>
						<Col span={4}>
							付费方式
							<Select defaultValue="全部" style={{ width: 88 }}>
								<Option value="全部">全部</Option>
								<Option value="包年收费">包年收费</Option>
								<Option value="终生服务">终生服务</Option>
								<Option value="赠送服务">赠送服务</Option>
							</Select>
						</Col>
						<Col span={5}>
							所属组织 <Input />
						</Col>
						<Col span={8}>
						    <div className="equip">
							    添加时间 <DatePicker />
						    </div>
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

