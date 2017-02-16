import React, { Component } from 'react'
import { Button, Icon, DatePicker, Row, Col, Input, Table } from 'antd'
import moment from 'moment';
const RangePicker = DatePicker.RangePicker;


export default class AlarmType1 extends React.Component {
	constructor(props){
		super(props)
		this.columns = [{
			title: '设备名称',
			dataIndex: 'gpsName',
			width: '8%',
		}, {
			title: '车型',
			dataIndex: 'vehicleType',
			width: '8%',
		}, {
			title: '客户姓名',
			dataIndex: 'customerName',
			width: '8%',
		}, {
			title: '所属组织',
			dataIndex: 'clientName',
			width: '8%',
		},{
			title: '报警时间',
			dataIndex: 'alarmTime',
			width: '12%',
		},{
			title: '开始时间',
			dataIndex: 'gpsTime',
			width: '12%',
		},{
			title: '持续时间',
			dataIndex: 'continueTime',
			width: '12%',
		},{
			width: '12%',
			title: '报警地点',
			dataIndex: 'posinfo',
		}];
	}
	
	render(){
		const columns = this.columns;
		return(
			<div>
				<div className="topbar"> 
					<div className="topbar-cell">
						<b className="topbar-tit"><span id="title">离线超时报警</span></b>
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
					<Table  columns={columns} />
				</div>
			</div>
		)
	}
}

