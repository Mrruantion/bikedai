import React, { Component } from 'react'
import { Cascader, Form, Select, Button, Icon, DatePicker, Row, Col, Input, Table, Tabs, Radio, Upload, Modal  } from 'antd'

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
			title: '组织名称',
			dataIndex: 'type',
			width: '20%',
		}, {
			title: '上级组织',
			dataIndex: 'device_status',
			width: '20%',
		}, {
			title: '联系人',
			dataIndex: 'organization',
			width: '8%',
		}, {
			title: '联系电话',
			dataIndex: 'add_date',
			width: '12%',
		},{
			title: '组织地址',
			dataIndex: 'activation_date',
			width: '25%',
		},{
			title: '操作',
			dataIndex: 'operation',
			width: '15%',
		}];
	}
	handleClick(){
		const orgnalist = document.querySelector("#orgnalist");
		const organization = document.querySelector("#organization");
		orgnalist.style.display = "none";
		organization.style.display = "block";
	}
	render(){
		const columns = this.columns;
		return(
			<div>
			<div id="orgnalist">
				<div className="topbar"> 
					<div className="topbar-cell">
						<b className="topbar-tit"><span id="title">组织管理</span></b>
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
			<div id="organization" style={{ display: "none" }}>
				<OrganaAdd />
			</div>
		</div>
		)
	}
}







/*表单提交*/
const OrganaForm = Form.create()(React.createClass({
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
	const options = [{
	  value: '浙江',
	  label: '浙江',
	  children: [{
		value: '杭州',
		label: '杭州',
		children: [{
		  value: '西湖',
		  label: '西湖',
		}],
	  }],
	}, {
	  value: '江苏',
	  label: '江苏',
	  children: [{
		value: '南京',
		label: '南京',
		children: [{
		  value: '中华门',
		  label: '中华门',
		}],
	  }],
	}];
    return (
      <Form onSubmit={this.handleSubmit}>
		<Row>
			<Col span={12}>
				<FormItem
				  label="组织名称"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('note', {
					rules: [{ required: true, message: '请输入组织名称' }],
				  })(
					<Input placeholder="输入组织名称(至少3个字符)"/>
				  )}
				</FormItem>
			</Col>
			<Col span={12}>
				<FormItem
				  label="组织全称"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('gender11', {
					rules: [{ required: true, message: '组织全称' }],
				  })(
					<Input placeholder="输入组织全称(至少4个字符)"/>
				  )}
				</FormItem>
			</Col>
		</Row>
		<Row>
			<Col span={12}>
				<FormItem
				  label="组织类型"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('gender', {
					rules: [{ required: true, message: '请输入组织类型' }],
					onChange: this.handleSelectChange,
				  })(
					<Select>
						<Option value="公司">公司</Option>
						<Option value="分公司">分公司</Option>
						<Option value="部门">部门</Option>
						<Option value="小组">小组</Option>
					</Select>
				  )}
				</FormItem>
			</Col>
			<Col span={12}>
				<FormItem
				  label="上级组织"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('gender1', {
					rules: [{ required: true}]
				  })(
					<Input placeholder="模糊查找上级组织" />
				  )}
				</FormItem>
			</Col>
		</Row>
		<Row>
			<Col span={12}>
				<FormItem
				  label="联系人"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('gender2', {
					rules: [{ required: true}]
				  })(
					<Input placeholder="输入联系人(至少2个字符)"/>
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
					<Input placeholder="输入联系电话"/>
				  )}
				</FormItem>
			</Col>
		</Row>
		<Row>
			<Col span={12}>
				<FormItem
					label="办公地址"
					labelCol={{ span: 6 }}
					wrapperCol={{ span: 16 }}
				>
				{getFieldDecorator('lifeaddress', {rules: [{ required: true}]})(
					<Cascader options={options} onChange={(value) => console.log(value)}/>
				)}
				</FormItem>
			</Col>
			<Col span={12}>
				<FormItem
				   label=""
				   wrapperCol={{ span: 14, offset: -5 }}
				>
				  {getFieldDecorator('lifeaddress1', {rules: [{ required: true}]})(<div>
					<Input  size="large" style={{ width: '70%'}} /><Button size="large"><Icon type="environment" /></Button>
					</div>
				 )}
				</FormItem>
			</Col>
		</Row>
		<FormItem
			label="描述"
			labelCol={{ span: 3 }}
			wrapperCol={{ span: 16 }}
		>
          {getFieldDecorator('gender6', {})(
			<Input type="textarea" placeholder="输入描述(不大于200个字符)" autosize={{ minRows: 4, maxRows: 4 }} />
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
class OrganaAdd extends React.Component {
	constructor(props) {
		super(props)
	}
	handleClick(){
		console.log("kk");
		const orgnalist = document.querySelector("#orgnalist");
		const organization = document.querySelector("#organization");
		orgnalist.style.display = "block";
		organization.style.display = "none";
	}
	render(){
		return (
			<div>
				<div className="topbar"> 
					<div className="topbar-cell">
						<b className="topbar-tit"><span id="title">组织管理</span></b>
					</div>
					<div className="topbar-cell" style={{position:'absolute',left:'120px',top:'20px'}}>
						<span >
							<Button  onClick={this.handleClick}><span><Icon type="rollback" /></span>返回上一级</Button>
						</span>
					</div>
				</div>
				<div className='record'>
					<OrganaForm />
				</div>
			</div>
		)
	}
} 


export default class AccountOrganization extends React.Component {
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


