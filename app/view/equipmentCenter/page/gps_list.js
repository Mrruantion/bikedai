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
export default class GpsList extends React.Component {
	constructor(props){
		super(props)
		this.columns = [{
			title: (<div><ul><li>IMEI/ID</li><li>物联网卡</li><li>设备型号/类型</li></ul></div>),
			dataIndex: 'type',
			width: '14%',
		}, {
			title: (<div><ul><li>库存状态</li><li>设备状态</li><li>复用率</li></ul></div>),
			dataIndex: 'device_status',
			width: '12%',
		}, {
			title: (<div><ul><li>所属组织</li><li>付费方式</li></ul></div>),
			dataIndex: 'organization',
			width: '13%',
		}, {
			title: '添加日期',
			dataIndex: 'add_date',
			width: '9%',
		},{
			title: (<div><ul><li>激活日期</li><li>到期日期</li></ul></div>),
			dataIndex: 'activation_date',
			width: '9%',
		},{
			title: (<div><ul><li>最后定位时间</li><li>数据接收时间</li></ul></div>),
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
			render: () => (<a href=''>修改</a>)
		}];
		this.state = {
			data: [{
				key: '0',
				type: {
					value: (<div><ul><li>039163701070</li><li>1064853458160</li><li>WY900S/无线</li></ul></div>)
				},
				device_status: {
					value: (<div><ul><li>使用中</li><li><a>正常</a></li><li>3</li></ul></div>)
				},
				organization: {
					value: (<div><ul><li>测试专用111</li><li>包年收费</li></ul></div>)
				},
				add_date: {
					value: '2016-10-19'
				},
				activation_date: {
					value: (<div><ul><li>2016-10-19</li><li>2017-10-19</li></ul></div>)
				},
				position_time: {
					value: (<div><ul><li>2017-02-12 18:02:01</li><li>2017-02-12 18:02:01</li></ul></div>),
				},
				lasttime: {
					value: (<div><ul><li>2017-01-09 07:20:08</li><li>2017-01-10 10:39:31</li></ul></div>)
				},
				current_status: {
					value: '离线'
				},
				current_position: {
					value: '江苏省盐城市大丰市大丰海堤'
				}
			},{
				key: '1',
				type: {
					value: (<div><ul><li>有线/WY200</li><li>0868120144159875</li><li>1064846805191</li></ul></div>)
				},
				device_status: {
					value: (<div><ul><li>使用中</li><li>正常</li><li>3</li></ul></div>)
				},
				organization: {
					value: (<div><ul><li>测试专用111</li><li>包年收费</li></ul></div>)
				},
				add_date: {
					value: '2016-10-19'
				},
				activation_date: {
					value: (<div><ul><li>2016-10-19</li><li>2017-10-19</li></ul></div>)
				},
				position_time: {
					value: (<div><ul><li>2017-02-12 18:02:01</li><li>2017-02-12 18:02:01</li></ul></div>),
				},
				lasttime: {
					value: (<div><ul><li>2017-01-09 07:20:08</li><li>2017-01-10 10:39:31</li></ul></div>)
				},
				current_status: {
					value: '离线'
				},
				current_position: {
					value: '江苏省盐城市大丰市大丰海堤'
				}
			}]	
		};
		this.pagination = {
			total: this.state.data.length,
			showSizeChanger: true,
			showQuickJumper: true,
		};
	}
	
	render(){
		const { data } = this.state;
		const dataSource = data.map((item) => {
			const obj = {};
			Object.keys(item).forEach((key) => {
				obj[key] = key === 'key' ? item[key] : item[key].value;
			});
			return obj;
		});
		const columns = this.columns;
		const pagination = this.pagination;
		return(
			<div className="main-box">
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
						<Table rowSelection={rowSelection} columns={columns} dataSource={dataSource} pagination={pagination}/>
					</div>
				</div>
			</div>	
		)
	}
}

