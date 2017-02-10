import React, { Component } from 'react'
import { Form, Select, Button, Icon, DatePicker, Row, Col, Input, Table, Tabs, Radio, Upload, Modal } from 'antd'
import moment from 'moment';


const FormItem = Form.Item;
const Option = Select.Option;
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;
const RangePicker = DatePicker.RangePicker;

import { Link } from 'react-router'


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


/*列表*/
class TableList extends React.Component {
	constructor(props){
		super(props)
		this.columns = [{
			title: '车牌号码',
			dataIndex: 'devicename',
			width: '10%',
		}, {
			title: '车型',
			dataIndex: 'cartype',
			width: '10%',
		}, {
			title: '所属组织',
			dataIndex: 'organization',
			width: '17%',
		}, {
			title: '客户姓名',
			dataIndex: 'customer',
			width: '10%',
		},{
			title: '追车负责人',
			dataIndex: 'chaseheader',
			width: '10%',
		},{
			title: '追车时间',
			dataIndex: 'chasetime',
			width: '16%',
		},{
			title: '追车结果',
			dataIndex: 'chaseresult',
			width: '10%',
		},{
			title: '操作',
			dataIndex: 'operation',
			width: '16%',
		}];
	}
	
	render(){
		const columns = this.columns;
		return(
		<div>
			<div className="risk" id="loglist">
				<div className="topbar"> 
					<div className="topbar-cell">
						<b className="topbar-tit"><span id="title">追车日志</span></b>
					</div>
					<div className="topbar-cell">
						<span className="fr">
							<Button type="primary" ><Link to="/riskMain/hunt_add" style={{ color: '#fff'}}><span><Icon type="plus-circle-o" /></span>添加</Link></Button>
							<Button type="primary"><span><Icon type="minus-circle-o" /></span>删除</Button>
							<Button type="primary"><span><Icon type="export" /></span>导出</Button>
						</span>
					</div>
				</div>
				<Row style={{ marginTop: 20 }}>
					<Col span={6}>
						车牌号码 <Input />
					</Col>
					<Col span={6}>
						客户姓名 <Input />
					</Col>
					<Col span={7}>
						所属组织 <Input style={{ width: "70%"}}/>
					</Col>
					<Col span={4}>
						<Button type="primary">查询</Button>
					</Col>
				</Row>
				<Row gutter={16} style={{ marginTop: 20}} >
					<Col span={14}>
						选择时间 
						<RangePicker
							ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
                         />
					</Col>
				</Row>
				<div style={{ marginTop: 20 }}>
					<Table rowSelection={rowSelection} columns={columns} />
				</div>
			</div>
		</div>
		)
	}
}





export default class HuntList extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		const columns = this.columns;
		return(
			<div>
				<TableList />
			</div>	
		)
	}
}
