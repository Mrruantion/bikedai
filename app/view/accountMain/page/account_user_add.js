import React, { Component } from 'react'
import { Form, Select, Button, Icon, DatePicker, Row, Col, Input, Table, Tabs, Radio, Upload, Modal  } from 'antd'

import moment from 'moment';

const FormItem = Form.Item;
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;

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


export default class AccountUserAdd extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<div className="topbar"> 
					<div className="topbar-cell">
						<b className="topbar-tit"><span id="title">用户管理</span></b>
					</div>
					<div className="topbar-cell" style={{position:'absolute',left:'120px',top:'20px'}}>
						<span >
							<Button onClick={() => window.history.back()}><span><Icon type="rollback" /></span>返回上一级</Button>
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