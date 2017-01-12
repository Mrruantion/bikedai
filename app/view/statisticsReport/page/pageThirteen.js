import React, { Component } from 'react'
import { Button, Icon, DatePicker, Row, Col, Input, Table } from 'antd'
import moment from 'moment';
const RangePicker = DatePicker.RangePicker;


export default class PageThirteen extends React.Component {
	constructor(props){
		super(props)
		this.columns = [{
			title: '设备名称',
			dataIndex: 'devicename',
			width: '12%',
		}, {
			title: '客户姓名',
			dataIndex: 'customer',
			width: '12%',
		}, {
			title: '车型',
			dataIndex: 'cartype',
			width: '12%',
		}, {
			title: '所属组织',
			dataIndex: 'organization',
			width: '15%',
		},{
			title: '停车时间段',
			dataIndex: ' stopperiod',
			width: '12%',
		},{
			title: '停车时长',
			dataIndex: ' stoptime',
			width: '15%',
		},{
			title: '地理位置信息',
			dataIndex: 'locationmessage',
			width: '15%',
		}];
	}
	
	render(){
		const columns = this.columns;
		return(
			<div>
				<div className="topbar"> 
					<div className="topbar-cell">
						<b className="topbar-tit"><span id="title">里程报表</span></b>
					</div>
					<div className="topbar-cell">
						<span className="fr">
							<Button type="primary"><span><Icon type="export" /></span>导出</Button>
						</span>
					</div>
				</div>
				<Row>
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

