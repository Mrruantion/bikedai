import React, { Component } from 'react'
import { Button, Icon, Tabs, Input, Row, Col, Select, Table } from 'antd'
const TabPane = Tabs.TabPane;
const Option = Select.Option;

import './index.css'

const ListSearch = React.createClass({
	render(){
		return (
			<div style={{ marginBottom: 20, marginTop: 20 }}>
				<Row gutter={16}>
				  <Col span={6}>
					设备名称 <Input />
				  </Col>
				  <Col span={6}>
					客户姓名 <Input />
				  </Col>
				  <Col span={6}>
					IMEI/ID <Input />
				  </Col>
				  <Col span={6}>
					物联网卡号 <Input />
				  </Col>
				</Row>
				<Row gutter={16} style={{ marginTop: 20, marginBottom: 20}}>
				  <Col span={9}>
					所属组织 <Input style={{ width: "70%"}}/>
				  </Col>
				  <Col span={5}>
					在线 
					<Select defaultValue="全部" style={{ width: 88 }}>
						<Option value="全部">全部</Option>
						<Option value="在线">在线</Option>
						<Option value="离线">离线</Option>
					</Select>
				  </Col>
				  <Col span={5}>
					设备类型 
					<Select defaultValue="全部" style={{ width: 88 }}>
						<Option value="全部">全部</Option>
						<Option value="有线">有线</Option>
						<Option value="无线">无线</Option>
						<Option value="OBD">OBD</Option>
					</Select>
				  </Col>
				  <Col span={5}>
					跟踪数据
					<Select defaultValue="全部" style={{ width: 88 }}>
						<Option value="全部">全部</Option>
						<Option value="正常">正常</Option>
						<Option value="可疑">可疑</Option>
						<Option value="高危">高危</Option>
					</Select>
				  </Col>
				</Row>
				<Row gutter={16} >
				  <Col span={6} style={{ width: '19%'}}>
					回款状态
					<Select defaultValue="全部" style={{ width: 88 }}>
						<Option value="全部">全部</Option>
						<Option value="正常">正常</Option>
						<Option value="逾期">逾期</Option>
						<Option value="不良">不良</Option>
						<Option value="拖车">拖车</Option>
						<Option value="结清">结清</Option>
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


class EditableCell extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			value: this.props.value,
			editable: this.props.editable || false,
		}
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.editable !== this.state.editable) {
			this.setState({ editable: nextProps.editable });
			if(nextProps.editable) {
				this.cacheValue = this.state.value;
			}
		}
		if(nextProps.status && nextProps.status !== this.props.status) {
			if(nextProps.status === 'save') {
				this.props.onChange(this.state.value);
			}else if(nextProps.status === 'cancel') {
				this.setState({ value: this.cacheValue });
				this.props.onChange(this.cacheValue);
			}
		}
	}
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.editable !== this.state.editable ||
			nextState.value !== this.state.value;
	}
	handleChange(value) {
		console.log(value);
		this.setState({ value });
	}
	render() {
		const { value, editable } = this.state;
		return (<div>
		{
			editable ?
			<div>
				<Select
					style={{ width: 100 }}
					placeholder={value}
					onChange={this.handleChange.bind(this)}
				>
					<Option value="正在使用" >正在使用</Option>
					<Option value="已注销" >已注销</Option>
				</Select>
			</div>
			:
			<div className="editable-row-text">
				{value || ' '}
			</div>			
		}
		</div>);
	}
}

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



class AssetStatus extends React.Component {
	constructor(props) {
		super(props);
		this.columns = [{
			title: '设备名称客户姓名车型',
			dataIndex: 'devicename',
			width: '9%',
		}, {
			title: '类型/型号IMEI/ID物联网卡号',
			dataIndex: 'type',
			width: '10%',
		}, {
			title: '所属组织',
			dataIndex: 'organization',
			width: '10%',
		}, {
			title: '在线',
			dataIndex: 'inline',
			width: '4%',
		},{
			title: '设备状态',
			dataIndex: 'devicestatus',
			width: '14%',
		},{
			title: '定位类型',
			dataIndex: 'positiontype',
			width: '7%',
		},{
			title: '当前位置',
			dataIndex: 'currentposition',
			width: '12%',
		},{
			title: '最后定位时间数据接收时间',
			dataIndex: 'lasttime',
			width: '12%',
		},{
			title: '跟踪数据',
			dataIndex: 'tracedata',
			width: '7%',
		},{
			title: '回款状态',
			dataIndex: 'receivestatus',
			width: '7%',
			render: (text, record, index) => this.renderColumns(this.state.data, index, 'receivestatus', text),
		}, {
			width: '7%',
			title: '操作',
			dataIndex: 'operation',
			render: (text, record, index) => {
				const { editable } = this.state.data[index].receivestatus;
				return (<div className="editable-row-operation">
					{
						editable ?
						<span>
							<a onClick={() => this.editDone(index, 'save')}>保存</a>
							<Popconfirm title="确定取消?" onConfirm={() => this.editDone(index, 'cancel')}>
								<a>取消</a>
							</Popconfirm>
						</span>
						:
						<span>
							<a onClick={() => this.edit(index)}>删除</a>
						</span>
					}
					</div>);
			},
		}];
		this.state = {
			data: [{
				key: '0',
				devicename: {
					value: '闽A00000-2测试客户1234'
				},
				type: {
					value: '有线/WY20008681201441598751064846805191'
				},
				organization: {
					value: '测试专用111'
				},
				inline: {
					value: '1'
				},
				devicestatus: {
					value: 'GPS定位 上传时间间隔:10'
				},
				positiontype: {
					value: 'GPS',
				},
				currentposition: {
					value: '江苏省盐城市大丰市大丰海堤',
				},
				lasttime: {
					value: '2017-01-09 07:20:082017-01-10 10:39:31'
				},
				tracedata: {
					value: '高危'
				},
				receivestatus: {
					editable: false,
					value: '正常'
				}
			},{
				key: '1',
				devicename: {
					value: '闽A00000-2测试客户1234'
				},
				type: {
					value: '有线/WY20008681201441598751064846805191'
				},
				organization: {
					value: '测试专用111'
				},
				inline: {
					value: '1'
				},
				devicestatus: {
					value: 'GPS定位 上传时间间隔:10'
				},
				positiontype: {
					value: 'GPS',
				},
				currentposition: {
					value: '江苏省盐城市大丰市大丰海堤',
				},
				lasttime: {
					value: '2017-01-09 07:20:082017-01-10 10:39:31'
				},
				tracedata: {
					value: '高危'
				},
				receivestatus: {
					editable: false,
					value: '正常'
				}
			}]
		};
		
	}
	renderColumns(data, index, key, text) {
		const { editable, status } = data[index][key];
		if (typeof editable === 'undefined') {
			return text;
		}
		return (<EditableCell
			editable={editable}
			value={text}
			onChange={value => this.handleChange(key, index, value)}
			status={status}
		/>);
	}
	handleChange(key, index, value) {
		const { data } = this.state;
		data[index][key].value = value;
		this.setState({ data });
	}
	edit(index) {
		const { data } = this.state;
		Object.keys(data[index]).forEach((item) => {
			if(data[index][item] && typeof data[index][item].editable !== 'undefined') {
				data[index][item].editable = true;
			}
		});
		this.setState({ data });
	}
	editDone(index, type) {
		const { data } = this.state;
		Object.keys(data[index]).forEach((item) => {
			if(data[index][item] && typeof data[index][item]. editable !== 'undefined') {
				data[index][item].editable = false;
				data[index][item].status = type;
			}
		});
		this.setState({ data }, () => {
			Object.keys(data[index]).forEach((item) => {
				if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
					delete data[index][item].status;
				}
			});
		});
	}
	render(){
		const { data } = this.state;
		const dataSource = data.map((item) => {
			const obj = {};
			Object.keys(item).forEach((key) => {
				obj[key] = key === 'key' ? item[key] : item[key].value;
			});
			return obj;
		})
		const columns = this.columns;
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
									<Button type="primary" onClick={ () => history.go(0) }><span><Icon type="reload" /></span>刷新</Button>
									<Button type="primary"><span><Icon type="export" /></span>导出</Button>
								</span>
							</div>
						 </div>
						 <div style={{ marginTop: 30 }}>
							<Tabs  type="card">
								<TabPane tab="全部状态" key="1"></TabPane>
								<TabPane tab="离线超时报警" key="2"></TabPane>
								<TabPane tab="停车超时报警" key="3"></TabPane>
								<TabPane tab="进敏感区域报警" key="4"></TabPane>
								<TabPane tab="出行政区域报警" key="5"></TabPane>
								<TabPane tab="敏感区域停车超时报警" key="6"></TabPane>
								<TabPane tab="未进常用区域超时报警" key="7"></TabPane>
								<TabPane tab="出围栏报警" key="8"></TabPane>
								<TabPane tab="有线无线分离报警" key="9"></TabPane>
								<TabPane tab="异动报警" key="10"></TabPane>
								<TabPane tab="设备功能报警" key="11"></TabPane>
							</Tabs>
							<ListSearch />
							<Table rowSelection={rowSelection} columns={columns}  />
						 </div>
					</div>
				</div>	
			</div>
		)
	}
}

export default AssetStatus