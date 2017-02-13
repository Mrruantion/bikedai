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
			title: (<div><ul><li>设备名称</li><li>客户姓名</li><li>车型</li></ul></div>),
			dataIndex: 'devicename',
			width: '8%',
		}, {
			title: (<div><ul><li>类型/型号</li><li>IMEI/ID</li><li>物联网卡号</li></ul></div>),
			dataIndex: 'type',
			width: '12%',
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
			width: '15%',
		},{
			title: '定位类型',
			dataIndex: 'positiontype',
			width: '7%',
		},{
			title: '当前位置',
			dataIndex: 'currentposition',
			width: '12%',
		},{
			title: (<div><ul><li>最后定位时间</li><li>数据接收时间</li></ul></div>),
			dataIndex: 'lasttime',
			width: '13%',
		},{
			title: '跟踪数据',
			dataIndex: 'tracedata',
			width: '7%',
		},{
			title: '回款状态',
			dataIndex: 'receivestatus',
			width: '7%',
		}, {
			width: '7%',
			title: '操作',
			dataIndex: 'operation',
			render: (text, record) => (
					<span>
						<a href="#">修改</a>
						<br />
						<a href="#">轨迹</a>
						<br />
						<a href="#">位置</a>
					</span>
			),
		}];
		this.state = {
			data: [{
				key: '0',
				devicename: {
					value: (<div><ul><li>闽A00000-2</li><li>测试客户</li><li>1234</li></ul></div>)
				},
				type: {
					value: (<div><ul><li>有线/WY200</li><li>0868120144159875</li><li>1064846805191</li></ul></div>)
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
					value: (<div style={{textAlign: 'center'}}>GPS</div>)
				},
				currentposition: {
					value: '江苏省盐城市大丰市大丰海堤',
				},
				lasttime: {
					value: (<div><ul><li>2017-01-09 07:20:08</li><li>2017-01-10 10:39:31</li></ul></div>)
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
					value: (<div><ul><li>闽A00000-2</li><li>测试客户</li><li>1234</li></ul></div>)
				},
				type: {
					value: (<div><ul><li>有线/WY200</li><li>0868120144159875</li><li>1064846805191</li></ul></div>)
				},
				organization: {
					value: '测试专用111'
				},
				inline: {
					value: '0'
				},
				devicestatus: {
					value: 'GPS定位 上传时间间隔:10'
				},
				positiontype: {
					value: (<div style={{textAlign: 'center'}}>GPS</div>)
				},
				currentposition: {
					value: '江苏省盐城市大丰市大丰海堤',
				},
				lasttime: {
					value: (<div><ul><li>2017-01-09 07:20:08</li><li>2017-01-10 10:39:31</li></ul></div>)
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
		this.callback = this.callback.bind(this);
	}
	componentDidMount(){
		const queryObj = {

		};
		W.ajax('http://localhost:4000/query.json',{
			dataType:'json',//服务器返回json格式数据
			type:'get',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			headers:{'Content-Type':'application/json'},	              
			success: (data) => {
				//服务器返回响应，根据响应结果，分析是否登录成功；
				let obj
				for(var i = 0; i<data.dataList.length; i++){
					obj = {
						key: i,
						devicename: {
							value: (<div><ul><li>data.dataList[i].gpsName</li><li>data.dataList[i].customerName</li><li>data.dataList[i].vehicleType</li></ul></div>)
						},
						type: {
							value: (<div><ul><li>有线/WY200</li><li>0868120144159875</li><li>1064846805191</li></ul></div>)
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
							value: (<div style={{textAlign: 'center'}}>GPS</div>)
						},
						currentposition: {
							value: '江苏省盐城市大丰市大丰海堤',
						},
						lasttime: {
							value: (<div><ul><li>2017-01-09 07:20:08</li><li>2017-01-10 10:39:31</li></ul></div>)
						},
						tracedata: {
							value: '高危'
						},
						receivestatus: {
							editable: false,
							value: '正常'
						}
					}
					console.log(obj)
				}
				// const obj = data.dataList.map((item) => {
				// 	return data.dataList[0]
				// })	
				// console.log(obj)
				
			},
			error:function(xhr,type,errorThrown){
				//异常处理；
				console.log(type);
			}
		});
		// this.fetch();
	}
	callback(key) {
		console.log(key);
	}
	
	render(){
		const { data } = this.state;
		for(var i = 0;i<data.length;i++){
			if(data[i].inline.value == 0){
				data[i].inline.value = (<span className='icon icon-greencir'></span>);
			}else{
				data[i].inline.value = (<span className='icon icon-graycir'></span>);
			}
		}
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
									<Button type="primary" onClick={ () => window.location.reload()  }><span><Icon type="reload" /></span>刷新</Button>
									<Button type="primary"><span><Icon type="export" /></span>导出</Button>
								</span>
							</div>
						 </div>
						 <div style={{ marginTop: 30 }}>
							<Tabs  type="card" onChange={this.callback}>
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
							<Table rowSelection={rowSelection} columns={columns} dataSource={dataSource} />
						 </div>
					</div>
				</div>	
			</div>
		)
	}
}

export default AssetStatus