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
				  <Col span={6}>
					所属组织 <Input style={{ width: "70%"}}/>
				  </Col>
				  <Col span={3} style={{ width: '15%'}}>
					在线 
					<Select defaultValue="全部" style={{ width: 76 }}>
						<Option value="全部">全部</Option>
						<Option value="在线">在线</Option>
						<Option value="离线">离线</Option>
					</Select>
				  </Col>
				  <Col span={3} style={{ width: '17%'}}>
					设备类型 
					<Select defaultValue="全部" style={{ width: 76 }}>
						<Option value="全部">全部</Option>
						<Option value="有线">有线</Option>
						<Option value="无线">无线</Option>
						<Option value="OBD">OBD</Option>
					</Select>
				  </Col>
				  <Col span={3} style={{ width: '17%'}}>
					跟踪数据
					<Select defaultValue="全部" style={{ width: 76 }}>
						<Option value="全部">全部</Option>
						<Option value="正常">正常</Option>
						<Option value="可疑">可疑</Option>
						<Option value="高危">高危</Option>
					</Select>
				  </Col>
				  <Col span={3} style={{ width: '17%'}}>
					回款状态
					<Select defaultValue="全部" style={{ width: 66 }}>
						<Option value="全部">全部</Option>
						<Option value="正常">正常</Option>
						<Option value="逾期">逾期</Option>
						<Option value="不良">不良</Option>
						<Option value="拖车">拖车</Option>
						<Option value="结清">结清</Option>
					</Select>
				  </Col>
				  <Col span={2}>
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
			dataIndex: 'offline',
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
			dataIndex: 'traceStatus',
			width: '7%',
		},{
			title: '回款状态',
			dataIndex: 'payStatus',
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
			data: [],
			jj: '111'
		};
		this.callback = this.callback.bind(this);
		this.fetch = this.fetch.bind(this);
	}
	componentDidMount(){
		this.fetch();
	}
	callback(key) {
		console.log(key);
	}
	
	fetch(){
		let _this = this;
		W.ajax('http://localhost:4000/query.json',{
			dataType:'json',//服务器返回json格式数据
			type:'get',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			headers:{'Content-Type':'application/json'},	              
			success: ((ret) => {
				var obj=[];
				for(var i = 0; i<ret.dataList.length; i++){
					obj[i] = {
						key: i,
						devicename: {
							value: (<div><ul><li>{ret.dataList[i].gpsName}</li><li>{ret.dataList[i].customerName}</li><li>{ret.dataList[i].vehicleType}</li></ul></div>)
						},
						type: {
							value: (<div><ul><li>有线/WY200</li><li>0868120144159875</li><li>1064846805191</li></ul></div>)
						},
						organization: {
							value: '测试专用111'
						},
						offline: {
							value: ret.dataList[i].offline
						},
						devicestatus: {
							value: ret.dataList[i].statusDes
						},
						positiontype: {
							value: (<div style={{textAlign: 'center'}}>{ret.dataList[i].gpsLbs}</div>)
						},
						currentposition: {
							value: ret.dataList[i].posinfo,
						},
						lasttime: {
							value: (<div><ul><li>{W.dateToString(new Date(parseInt(ret.dataList[i].lastGpsTime)))}</li><li>{W.dateToString(new Date(parseInt(ret.dataList[i].updateTime)))}</li></ul></div>)
						},
						traceStatus: {
							value: ret.dataList[i].traceStatus
						},
						payStatus: {
							value: ret.dataList[i].payStatus
						}
					}	
				};
				console.log(obj)
				_this.setState({
					data: obj
				})
				
			}),
			error:function(xhr,type,errorThrown){
				//异常处理；
				console.log(type);
			}
		});
	}
	render(){
		const { data } = this.state;
		const traStatusArr = ["", "正常", "可疑", "高危"];
		const payStatusArr = ["", "正常", "逾期", "不良", "拖车", "结清"];
		const traColorArr = ['','greencir','orangecir','redcir'];
		const psColorArr2 = ["", "greencir", "redcir", "purplecir", "orangecir", "skybluecir"];
		let traceStatus;
		let payStatus;
		for(var i = 0;i<data.length;i++){
			if(data[i].offline.value == 0){
				data[i].offline.value = (<span className='icon icon-greencir'></span>);
			}else{
				data[i].offline.value = (<span className='icon icon-graycir'></span>);
			}
			traceStatus = traStatusArr[data[i].traceStatus.value];
			data[i].traceStatus.value = (<div><span className={"icon icon-" + traColorArr[data[i].traceStatus.value]}></span><span></span>{traceStatus}</div>);
			
			payStatus = payStatusArr[data[i].payStatus.value];
			data[i].payStatus.value = (<div><span className={"icon icon-" + psColorArr2[data[i].payStatus.value]}></span><span></span>{payStatus}</div>);
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
								<b className="topbar-tit" >资产状态</b>
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
							<Table rowSelection={rowSelection} columns={columns}  dataSource={dataSource}/>
						 </div>
					</div>
				</div>	
			</div>
		)
	}
}

export default AssetStatus