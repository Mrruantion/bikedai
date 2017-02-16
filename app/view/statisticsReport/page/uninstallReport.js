import React, {Component} from 'react'

import { Button, Icon, DatePicker, Row, Col, Input, Table } from 'antd'
import moment from 'moment';
const RangePicker = DatePicker.RangePicker;


export default class UninstallReport extends React.Component {
    constructor(props){
		super(props)
		this.columns = [{
			title: '车牌',
			dataIndex: 'vehicleno',
			width: '8%',
		}, {
			title: '车型',
			dataIndex: 'vehicletype',
			width: '8%',
		}, {
			title: '客户姓名',
			dataIndex: 'customername',
			width: '8%',
		}, {
			title: '所属组织',
			dataIndex: 'clientName',
			width: '12%',
		},{
			title: '设备种类',
			dataIndex: ' gpsTypeStr',
			width: '8%',
		},{
			title: '设备型号',
			dataIndex: ' gpsModelStr',
			width: '8%',
		},{
			title: '设备编号',
			dataIndex: 'gprscode',
			width: '12%',
		},{
			title: '物联网卡号',
			dataIndex: 'simcode',
			width: '10%',
		},{
			title: '拆卸时间',
			dataIndex: 'updatetime',
			width: '8%',
		},{
			title: 'gps位置',
			dataIndex: 'location',
			width: '8%',
		}];
	}
	
	render(){
		const columns = this.columns;
		return(
			<div>
				<div className="topbar"> 
					<div className="topbar-cell">
						<b className="topbar-tit"><span id="title">安装报表</span></b>
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
						车牌 <Input />
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