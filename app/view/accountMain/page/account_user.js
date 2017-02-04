import React, { Component } from 'react'
import { Form, Select, Button, Icon, DatePicker, Row, Col, Input, Table, Tabs, Radio, Upload, Modal  } from 'antd'

import moment from 'moment';

const FormItem = Form.Item;
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;

import { Link } from 'react-router'


/*查询组件*/
const ListSearch = React.createClass({
	render(){
		return (
			<div style={{ marginBottom: 20, marginTop: 20 }} className="risk">
				<Row>
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
				<Row style={{ marginTop: 20}} >
					<Col span={18}>
						选择时间 
						<RangePicker
							ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
                         />
					</Col>
				</Row>
			</div>
		)
	}
})


/*Table列表项是否可选择*/
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
			title: '用户名称',
			dataIndex: 'type',
			width: '20%',
		}, {
			title: '登录账号',
			dataIndex: 'device_status',
			width: '20%',
		}, {
			title: '状态',
			dataIndex: 'status',
			width: '10%',
		}, {
			title: '所属组织',
			dataIndex: 'organization',
			width: '20%',
		}, {
			title: '已授权角色',
			dataIndex: 'add_date',
			width: '15%',
		}, {
			title: '操作',
			dataIndex: 'operation',
			width: '15%',
		}];
	}
	render(){
		const columns = this.columns;
		return(
			<div>
			<div id="tablelist">
				<div className="topbar"> 
					<div className="topbar-cell">
						<b className="topbar-tit"><span id="title">用户管理</span></b>
					</div>
					<div className="topbar-cell">
						<span className="fr">
							<Button type="primary"><Link to="accountMain/account_user_add"><span><Icon type="plus-circle-o" /></span>添加</Link></Button>
							<Button type="primary"><span><Icon type="reload" /></span>刷新</Button>
							<Button type="primary"><span><Icon type="export" /></span>导出</Button>
						</span>
					</div>
				</div>
				<div style={{ marginTop: 20 }}>
					<Row>
						<Col span={6}>
							角色名称 <Input />
						</Col>
						<Col span={6}>
							登录账号 <Input />
						</Col>
						<Col span={6}>
							所属组织 <Input />
						</Col>
						<Col span={6}>
							<Button type="primary">查询</Button>
						</Col>
					</Row>
					<div style={{ marginTop: 20 }}>
						<Table columns={columns} rowSelection={rowSelection}/>
					</div>
				</div>
			</div>
		</div>
		)
	}
}






export default class AccountUser extends React.Component {
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


