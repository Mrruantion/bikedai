import React, { Component } from 'react'
import { Cascader, Form, Select, Button, Icon, DatePicker, Row, Col, Input, Table, Tabs, Radio, Upload, Modal  } from 'antd'

import moment from 'moment';

const FormItem = Form.Item;
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;

/*表单提交*/
const OrganizationForm = Form.create()(React.createClass({
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
				  {getFieldDecorator('name', {
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
				  {getFieldDecorator('fullname', {
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
				  {getFieldDecorator('monitor', {
					rules: [{ required: true, message: '请输入组织类型' }],initialValue: "0"
				  })(
					<Select>
						<Option value="0">公司</Option>
						<Option value="1">分公司</Option>
						<Option value="2">部门</Option>
						<Option value="3">小组</Option>
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
				  {getFieldDecorator('parentClient', {
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
				  {getFieldDecorator('contacts', {
					rules: [{ required: true}]
				  })(
					<Input placeholder="输入联系人(至少2个字符)"/>
				  )}
				</FormItem>
			</Col>
			<Col span={12}>
				<FormItem
				  label="联系电话"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('phone', {
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
				{getFieldDecorator('address', {rules: [{ required: true}]})(
					<Cascader options={options} onChange={(value) => console.log(value)}/>
				)}
				</FormItem>
			</Col>
			<Col span={12}>
				<FormItem
				   label=""
				   wrapperCol={{ span: 14, offset: -5 }}
				>
				  {getFieldDecorator('address1', {rules: [{ required: true}]})(<div>
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
          {getFieldDecorator('remark', {})(
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

export default class AccountOrganizationAdd extends React.Component {
	render() {
		return (
			<div>
				<div className="topbar"> 
					<div className="topbar-cell">
						<b className="topbar-tit"><span id="title">组织管理</span></b>
					</div>
					<div className="topbar-cell" style={{position:'absolute',left:'120px',top:'20px'}}>
						<span >
							<Button  onClick={() => window.history.back()}><span><Icon type="rollback" /></span>返回上一级</Button>
						</span>
					</div>
				</div>
				<div className='record'>
					<OrganizationForm />
				</div>
			</div>
		)
	}
}
