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
	handleClick(){
		const tablelist = document.querySelector("#tablelist");
		const addlist = document.querySelector("#addlist");
		tablelist.style.display = "none";
		addlist.style.display = "block";
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
						<Table columns={columns} />
					</div>
				</div>
			</div>	
			<div id="addlist" style={{ display: "none" }}>
				<UserManageAdd />
			</div>
		</div>
		)
	}
}







/*表单提交*/
const UserMForm = Form.create()(React.createClass({
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
			<Col span={12}>
				<FormItem
				  label="用户名称"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('note', {
					rules: [{ required: true, message: '请输入车牌号码' }],
				  })(
					<Input placeholder="输入用户姓名(至少2个字符)"/>
				  )}
				</FormItem>
			</Col>
			<Col span={12}>
				<FormItem
				  label="登录账号"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('gender11', {
					rules: [{ required: true, message: '请输入暗访时间' }],
				  })(
					<Input placeholder="输入登录账号(至少6个字符)"/>
				  )}
				</FormItem>
			</Col>
		</Row>
		<Row>
			<Col span={12}>
				<FormItem
				  label="登录密码"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('gender', {
					rules: [{ required: true, message: '输入暗访人员(至少2个字符)' }],
					onChange: this.handleSelectChange,
				  })(
					<Input placeholder="输入登录密码" type="password"/>
				  )}
				</FormItem>
			</Col>
			<Col span={12}>
				<FormItem
				  label="确认密码"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('gender1', {
					rules: [{ required: true}]
				  })(
					<Input placeholder="输入确认密码" type="password"/>
				  )}
				</FormItem>
			</Col>
		</Row>
		<Row>
			<Col span={12}>
				<FormItem
				  label="所属组织"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('gender2', {
					rules: [{ required: true}]
				  })(
					<Input />
				  )}
				</FormItem>
			</Col>
			<Col span={12}>
				<FormItem
				  label="角色选择"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('gender3', {
					rules: [{ required: true}]
				  })(
					<Select>
						<Option value="公司领导">公司领导</Option>
						<Option value="执行组">执行组</Option>
					</Select>
				  )}
				</FormItem>
			</Col>
		</Row>
		<Row>
			<Col span={12}>
				<FormItem
				  label="用户状态"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('gender4', {
					rules: [{ required: true}]
				  })(
					<RadioGroup>
						<Radio value="正常">正常</Radio>
						<Radio value="锁定">锁定</Radio>
					</RadioGroup>
				  )}
				</FormItem>
			</Col>
		</Row>
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
class UserManageAdd extends React.Component {
	constructor(props) {
		super(props)
	}
	handleClick(){
		console.log("kk");
		const tablelist = document.querySelector("#tablelist");
		const addlist = document.querySelector("#addlist");
		tablelist.style.display = "block";
		addlist.style.display = "none";
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
					<UserMForm />
				</div>
			</div>
		)
	}
} 


export default class PageOne extends React.Component {
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


