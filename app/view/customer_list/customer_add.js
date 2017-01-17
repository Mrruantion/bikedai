import React, { Component } from 'react'
/*import { Link } from 'react-router'*/
import { Form, Select, Button, Icon, DatePicker, Row, Col, Input, Table, Tabs, Radio, Upload, Modal } from 'antd'


const FormItem = Form.Item;
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;


const CustomerForm = Form.create()(React.createClass({
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
		<div className="customer">
		    <Form onSubmit={this.handleSubmit}>
				<div className="record-list remove-top">
				  <div className="record-tit">客户信息填写</div>
				  <div className="record-edit">
					   <Row>
							<Col span={12}>
								<FormItem
								  label="车牌号码"
								  labelCol={{ span: 6 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('note', {
									rules: [{ required: true, message: '请输入车牌号码' }],
								  })(
									<Input />
								  )}
								</FormItem>
							</Col>
							<Col span={12}>
								<FormItem
								  label="暗访时间"
								  labelCol={{ span: 6 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('gender11', {
									rules: [{ required: true, message: '请输入暗访时间' }],
								  })(
									<DatePicker />
								  )}
								</FormItem>
							</Col>
					  </Row>
				  </div>
			   </div>
		    </Form>
		</div>
    );
  },
}));
/*客户信息修改*/
/*汽车基本信息*/
/*货款基本信息*/


export default class CustomerAdd extends React.Component {
	constructor(props) {
		super(props)
	}
	
	render(){
		return (
			<div className="main-box">
				<div className="content-wrap">
					<div className="content-layout pl20 pr20">
						<div className="topbar"> 
							<div className="topbar-cell">
								<b className="topbar-tit"><span id="title">基本信息修改</span></b>
							</div>
							<div className="topbar-cell" style={{position:'absolute',left:'120px',top:'20px'}}>
								<span >
									<Button  onClick={() => window.history.back()}><span><Icon type="rollback" /></span>返回上一级</Button>
								</span>
							</div>
						</div>
						<div>
							<CustomerForm />
						</div>
					</div>
				</div>	
			</div>
		)
	}
} 

