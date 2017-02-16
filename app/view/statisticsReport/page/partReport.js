import React, { Component } from 'react'
import { Button, Icon, DatePicker, Row, Col, Input, Table } from 'antd'
import moment from 'moment';
const RangePicker = DatePicker.RangePicker;


export default class PartReport extends React.Component {
	constructor(props){
		super(props)
		this.columns = [{
			title: '设备名称',
			dataIndex: 'gpsName',
			width: '12%',
		}, {
			title: '客户姓名',
			dataIndex: 'customerName',
			width: '12%',
		}, {
			title: '车型',
			dataIndex: 'vehicleType',
			width: '12%',
		}, {
			title: '所属组织',
			dataIndex: 'clientName',
			width: '12%',
		},{
			title: '停车时间段',
			dataIndex: 'parkTime',
			width: '15%',
		},{
			title: '停车时长',
			dataIndex: 'parkTimes',
			width: '15%',
		},{
			title: '地理位置信息',
			dataIndex: 'posinfo',
			width: '15%',
		}];
		this.state = {
			data: []
		}
		this.pagination={
			total: this.state.data.length,
			showSizeChanger: true,
			showQuickJumper: true,
		}
		this.formatDuring = this.formatDuring.bind(this);
	}
	componentDidMount(){
		let _this = this
		W.ajax('http://localhost:4000/partQuery.json',{
			dataType: 'json',
			type: 'get',
			timeout: 10000,
			header: {'Content-Type':'application/jspm'},
			success:((data) =>{
				var obj=[];
				
				for(var i = 0; i<data.dataList.length; i++){
					obj[i] = {
						key: i,
						gpsName: data.dataList[i].gpsName,
						customerName: data.dataList[i].customerName,
						vehicleType: data.dataList[i].vehicleType,
						clientName: data.dataList[i].clientName,
						parkTime: (<span>{W.dateToString(new Date(parseInt(data.dataList[i].parkStartTime)))}<br />{W.dateToString(new Date(parseInt(data.dataList[i].parkEndTime)))}</span>),
						parkTimes: this.formatDuring(data.dataList[i].parkEndTime-data.dataList[i].parkStartTime),
						posinfo: data.dataList[i].posinfo
					}
					console.log(data.dataList[i].parkEndTime-data.dataList[i].parkStartTime);
				}
				_this.setState({
					data: obj
				})
			})
		})
	}
	//将秒转化为几天几小时几分钟
	formatDuring(timeTemp) {  
    var days = timeTemp / (1000 * 60 * 60 * 24);  
    var hours = (timeTemp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);  
    var minutes = (timeTemp % (1000 * 60 * 60)) / (1000 * 60);  
    var seconds = (timeTemp % (1000 * 60)) / 1000;  
    return parseInt(days) + "天" + parseInt(hours) + "小时" + parseInt(minutes) + "分钟";  
	}
	render(){
		const columns = this.columns;
		const data = this.state.data;
		return(
			<div>
				<div className="topbar"> 
					<div className="topbar-cell">
						<b className="topbar-tit"><span id="title">停留报表</span></b>
					</div>
					<div className="topbar-cell">
						<span className="fr">
							<Button type="primary"><span><Icon type="export" /></span>导出</Button>
						</span>
					</div>
				</div>
				<Row style={{ marginTop: 20}}>
					<Col span={9}>
						<RangePicker
							ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
						/>
					</Col>
					<Col span={7}>
						客户姓名 <Input />
					</Col>
					<Col span={7}>
						设备名称 <Input />
					</Col>
				</Row>
				<Row gutter={16} style={{ marginTop: 20}} >
					<Col span={9}>
						所属组织 <Input style={{ width: "80%"}}/>
					</Col>
					<Col span={6}>
						<Button type="primary">查询</Button>
					</Col>
				</Row>
				<div style={{ marginTop: 20 }}>
					<Table  columns={columns} dataSource={data} pagination={this.pagination}/>
				</div>
			</div>
		)
	}
}

