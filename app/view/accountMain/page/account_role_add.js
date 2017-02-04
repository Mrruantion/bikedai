import React, { Component } from 'react'
import { Form, Select, Button, Icon, Row, Col, Input, Table, Radio  } from 'antd'

import moment from 'moment';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

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

export default class AccountRoleAdd extends React.Component {
	render(){
		return (
			<div>
				<div className="topbar"> 
					<div className="topbar-cell">
						<b className="topbar-tit"><span id="title">用户管理</span></b>
					</div>
					<div className="topbar-cell" style={{position:'absolute',left:'120px',top:'20px'}}>
						<span >
							<Button  onClick={() => window.history.back()}><span><Icon type="rollback" /></span>返回上一级</Button>
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