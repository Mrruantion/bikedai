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
			data: []	
		};
		this.pagination = {
			total: this.state.data.length,
			showSizeChanger: true,
			showQuickJumper: true,
		};
		this.fetch = this.fetch.bind(this);
		this.timeToDate = this.timeToDate.bind(this)
	}
	componentDidMount(){
		this.fetch()
	}
	//将秒转换为YYYY-MM-DD格式的日期
	timeToDate(timeTemp){
		var time = 0;
		if(typeof(timeTemp) != "number" && timeTemp != null && timeTemp != "null" && timeTemp != ""){
			time = parseInt(timeTemp);
		}else if(typeof(timeTemp) == "number"){
			time = timeTemp;
		}else{
			time = '';
		}
		if(time != null && time != ''){
			
			var timeBegin = new Date(time);
			var validDateBegin = timeBegin.getFullYear() + "-" + this.GetFullDate(timeBegin.getMonth()+1) + "-" + this.GetFullDate(timeBegin.getDate());
			return validDateBegin;
		}else{
			return time;
		}
	}
	//返回日月 （修正为两位数） 
	GetFullDate(date){
		if(date <= 9){
			return "0" + date.toString();
		}else{
			return date;
		}
	}
	fetch(){
		let _this = this;
		W.ajax('http://localhost:4000/list.json',{
			dataType:'json',//服务器返回json格式数据
			type:'get',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			headers:{'Content-Type':'application/json'},	              
			success: ((data) => {
				var obj=[];
				var payWayArr=new Array("","包年收费","","");
				var modelNameArr = ["", "GM06", "GM09", "WY200", "WY220", "GT06S", "WY800", "WY900", "WY710", "WYA5C-3", "WYMini", "GV20", "WYT1S", "WY900S", "WY600", "GT16", "WY900C", "WY-T2A", "WYminiS"]
				var typeArr = ["", "有线", "无线", "OBD"]
				var statusArr=["","行驶","停车","报警","离线","参考定位","基站定位","离线","WIFI定位"];
				var eStatusArr = ["正常", "维修中", "已报废"]
				var isBindStr;
				for(var i = 0; i<data.dataList.length; i++){
					if (data.dataList[i].isBind == 1){
						isBindStr = (<div><span className="icon icon-greencir"></span><span>使用中</span></div>);
					}	
					else  if(data.dataList[i].isBind == 0){
						isBindStr = (<div><span className="icon icon-greencir"></span><span>库存中</span></div>);
					}
					else{
						isBindStr = (<div><span className="icon icon-greencir"></span><span>未拆除</span></div>);
					}
					obj[i] = {
						key: i,
						type:  (<div><ul><li>{data.dataList[i].gprscode}</li><li>{data.dataList[i].simcode}</li><li>{modelNameArr[data.dataList[i].model]+"/"+typeArr[data.dataList[i].type]}</li></ul></div>),
						device_status: (<div><ul><li>{isBindStr}</li><li><a>{eStatusArr[data.dataList[i].eStatus]}</a></li><li>{data.dataList[i].bindTimes }</li></ul></div>),
						organization: (<span>{data.dataList[i].clientName}<br/>{payWayArr[data.dataList[i].payWay]}</span>),
						add_date: this.timeToDate(data.dataList[i].addtime),
						activation_date: (<div><ul><li>{this.timeToDate(data.dataList[i].activatetime)}</li><li>{this.timeToDate(data.dataList[i].endtime)}</li></ul></div>),
						position_time: (<div><ul><li>{W.dateToString(new Date(parseInt(data.dataList[i].lastgpstime)))}</li><li>{W.dateToString(new Date(parseInt(data.dataList[i].gpsUpdateTime)))}</li></ul></div>),
						current_status: statusArr[data.dataList[i].status],
						current_position: data.dataList[i].posinfo
					}	
				};
				console.log(obj)
				_this.setState({
					data: obj
				})
				// console.log(data)
			}),
			error:function(xhr,type,errorThrown){
				//异常处理；
				console.log(type);
			}
		});
	}
	render(){
		const { data } = this.state;
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
							<Button type="primary" onClick={this.fetch}><span><Icon type="reload" /></span>刷新</Button>
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
						<Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={pagination}/>
					</div>
				</div>
			</div>	
		)
	}
}

