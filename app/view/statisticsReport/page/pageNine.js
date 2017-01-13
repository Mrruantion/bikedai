import React, { Component } from 'react'
import { Button, Icon, DatePicker, Row, Col, Input, Table } from 'antd'
import moment from 'moment';
const RangePicker = DatePicker.RangePicker;


export default class PageNine extends React.Component {
	constructor(props){
		super(props)
		this.columns = [{
			title: '设备名称',
			dataIndex: 'devicename',
			width: '8%',
		}, {
			title: '车型',
			dataIndex: 'cartype',
			width: '8%',
		}, {
			title: '客户姓名',
			dataIndex: 'customer',
			width: '8%',
		}, {
			title: '所属组织',
			dataIndex: 'organization',
			width: '8%',
		},{
			title: '报警类型',
			dataIndex: 'alarmtype',
			width: '8%',
		},{
			title: '报警时间',
			dataIndex: 'alarmtime',
			width: '12%',
		},{
			title: '开始时间',
			dataIndex: 'start',
			width: '12%',
		},{
			title: '持续时间',
			dataIndex: 'continuous',
			width: '12%',
		},{
			width: '12%',
			title: '区域名称',
			dataIndex: 'area',
		},{
			width: '12%',
			title: '报警地点',
			dataIndex: 'alarmplace',
		}];
	}
	
	render(){
		const columns = this.columns;
		return(
			<div>
				<div className="topbar"> 
					<div className="topbar-cell">
						<b className="topbar-tit"><span id="title">功能设备报警</span></b>
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
						所属组织 <Input style={{ width: "70%"}}/>
					</Col>
					<Col span={6}>
						<Button type="primary">查询</Button>
					</Col>
				</Row>
				<div style={{ marginTop: 20 }}>
					<Table  columns={columns} />;
				</div>
			</div>
		)
	}
}

