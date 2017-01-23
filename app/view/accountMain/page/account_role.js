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
			title: '角色名称',
			dataIndex: 'type',
			width: '20%',
		}, {
			title: '所属角色组',
			dataIndex: 'device_status',
			width: '20%',
		}, {
			title: '角色状态',
			dataIndex: 'organization',
			width: '20%',
		}, {
			title: '权限状态',
			dataIndex: 'add_date',
			width: '25%',
		},{
			title: '操作',
			dataIndex: 'operation',
			width: '15%',
		}];
	}
	handleClick(){
		const rolelist = document.querySelector("#rolelist");
		const roleMlist = document.querySelector("#roleMlist");
		rolelist.style.display = "none";
		roleMlist.style.display = "block";
	}
	render(){
		const columns = this.columns;
		return(
			<div>
			<div id="rolelist">
				<div className="topbar"> 
					<div className="topbar-cell">
						<b className="topbar-tit"><span id="title">角色管理</span></b>
					</div>
					<div className="topbar-cell">
						<span className="fr">
							<Button type="primary" onClick={this.handleClick.bind(this)}><span><Icon type="plus-circle-o" /></span>添加</Button>
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
							所属角色组 
							<Select defaultValue="全部" style={{ width: 120 }}>
								<Option value="全部">全部</Option>
								<Option value="系统管理员">系统管理员</Option>
								<Option value="普通管理员">普通管理员</Option>
								<Option value="一般监控员">一般监控员</Option>
							</Select>
						</Col>
						<Col span={6}>
							<Button type="primary">查询</Button>
						</Col>
					</Row>
					<div style={{ marginTop: 20 }}>
						<Table columns={columns} />
					</div>
				</div>
			</div>	
			<div id="roleMlist" style={{ display: "none" }}>
				<RoleMAdd />
			</div>
		</div>
		)
	}
}







/*表单提交*/
const RoleMForm = Form.create()(React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
		<Row>
			<Col span={16}>
				<FormItem
					label="角色名称"
					labelCol={{ span: 6 }}
					wrapperCol={{ span: 16 }}
				>
				{getFieldDecorator('lifeaddress', {rules: [{ required: true}]})(
					<Input placeholder="输入角色名称(至少3个字符)"/>
				)}
				</FormItem>
			</Col>
		</Row>
		<Row>
			<Col span={16}>
				<FormItem
				   label="所属角色组"
				   labelCol={{ span: 6 }}
				   wrapperCol={{ span: 16 }}
				>
				   {getFieldDecorator('gender3', {
					rules: [{ required: true}]
				  })(
					<Select>
						<Option value="系统管理员">系统管理员</Option>
						<Option value="普通管理员">普通管理员</Option>
						<Option value="一般监控员">一般监控员</Option>
					</Select>
				  )}
				</FormItem>
			</Col>
		</Row>
		<FormItem
			label="描述"
			labelCol={{ span: 4 }}
			wrapperCol={{ span: 16 }}
		>
          {getFieldDecorator('gender6', {})(
			<Input type="textarea" autosize={{ minRows: 4, maxRows: 4 }} />
			)}
        </FormItem>
		<FormItem
			label="用户状态"
			labelCol={{ span: 4 }}
			wrapperCol={{ span: 16 }}
		>
          {getFieldDecorator('gender6', {})(
			<RadioGroup>
				<Radio value="正常">正常</Radio>
				<Radio value="禁用">禁用</Radio>
			</RadioGroup>
			
			)}
        </FormItem>
		<FormItem wrapperCol={{ span: 8, offset: 4 }}>
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </FormItem>
      </Form>
    );
  },
}));

/*表单组件*/
class RoleMAdd extends React.Component {
	constructor(props) {
		super(props)
	}
	handleClick(){
		console.log("kk");
		const rolelist = document.querySelector("#rolelist");
		const roleMlist = document.querySelector("#roleMlist");
		rolelist.style.display = "block";
		roleMlist.style.display = "none";
	}
	render(){
		return (
			<div>
				<div className="topbar"> 
					<div className="topbar-cell">
						<b className="topbar-tit"><span id="title">用户管理</span></b>
					</div>
					<div className="topbar-cell" style={{position:'absolute',left:'120px',top:'20px'}}>
						<span >
							<Button  onClick={this.handleClick}><span><Icon type="rollback" /></span>返回上一级</Button>
						</span>
					</div>
				</div>
				<div className='record'>
					<RoleMForm />
				</div>
			</div>
		)
	}
} 


export default class AccountRole extends React.Component {
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


