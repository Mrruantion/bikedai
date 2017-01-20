import React, { Component } from 'react'
import { Form, Select, Button, Icon, DatePicker, Row, Col, Input, Table, Tabs, Radio, Upload, Modal  } from 'antd'

import moment from 'moment';

const FormItem = Form.Item;
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;




/*图片上传控件*/
class UploadPicture extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			previewVisible: false,
			previewImage: '',
			fileList: [{
			  uid: -1,
			  name: 'xxx.png',
			  status: 'done',
			  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
			}],
		  };
		  this.handleCancel = this.handleCancel.bind(this);
		  this.handlePreview = this.handlePreview.bind(this);
		  this.handleChange = this.handleChange.bind(this);
	}
 

  handleCancel(){
	  this.setState({ previewVisible: false })
  }

  handlePreview(file){
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange({ fileList }){
	  this.setState({ fileList })
  }

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          action="/upload.do"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}




/*表单提交*/
const EventForm = Form.create()(React.createClass({
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
				  label="车牌号码"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('note', {
					rules: [{ required: true, message: '请输入车牌号码' }],
				  })(
					<Input placeholder="输入车牌号码"/>
				  )}
				</FormItem>
			</Col>
			<Col span={12}>
				<FormItem
				  label="车型"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('cartyoe', {
					rules: [{ required: true, message: '请输入车型' }],
				  })(
					<Input placeholder=""/>
					/*<DatePicker />*/
				  )}
				</FormItem>
			</Col>
		</Row>
		<Row>
			<Col span={12}>
				<FormItem
				  label="车主姓名"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('gender', {
					rules: [{ required: true, message: '输入车主姓名' }],
					onChange: this.handleSelectChange,
				  })(
					<Input placeholder="输入车主姓名(至少2个字符)"/>
				  )}
				</FormItem>
			</Col>
			<Col span={12}>
				<FormItem
				  label="身份证号码"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('gender1', {
					rules: [{ required: true}]
				  })(
					<Input placeholder="输入身份证号码(18位)" />
				  )}
				</FormItem>
			</Col>
		</Row>
		<Row>
			<Col span={12}>
				<FormItem
				  label="发生时间"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('gender2', {
					rules: [{ required: true}]
				  })(
					<DatePicker />
				  )}
				</FormItem>
			</Col>
			<Col span={12}>
				<FormItem
				  label="事件性质"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('gender3', {
					rules: [{ required: true}], initialValue: "资料欺诈"
				  })(
					<Select>
						<Option value="资料欺诈">资料欺诈</Option>
						<Option value="征信不良">征信不良</Option>
						<Option value="还款逾期">还款逾期</Option>
						<Option value="二抵骗贷">二抵骗贷</Option>
					</Select>
				  )}
				</FormItem>
			</Col>
		</Row>
		<Row>
			<Col span={12}>
				<FormItem
				  label="举报人员"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('gender4', {
					rules: [{ required: true}]
				  })(
					<Input placeholder="输入举报人员(至少2个字符)"/>
				  )}
				</FormItem>
			</Col>
			<Col span={12}>
				<FormItem
				  label="联系方式"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('gender5', {
					rules: [{ required: true}], initialValue: "否"
				  })(
					<Input placeholder="输入联系方式"/>
				  )}
				</FormItem>
			</Col>
		</Row>
		
        <FormItem
			label="事件描述"
			labelCol={{ span: 3 }}
			wrapperCol={{ span: 16 }}
		>
          {getFieldDecorator('gender6', {})(
			<Input type="textarea" placeholder="输入事件描述(不大于200个字符)" autosize={{ minRows: 4, maxRows: 4 }} />
			)}
        </FormItem>
		<FormItem
			label="添加图片"
			labelCol={{ span: 3 }}
			wrapperCol={{ span: 16 }}
		>
          {getFieldDecorator('gender7', {})(
			<UploadPicture />
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


export default class EventAdd extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		const columns = this.columns;
		return(
			<div className="main-box">
				<div className="content-wrap">
					<div className="content-layout pl20 pr20">
						<div className="topbar"> 
							<div className="topbar-cell">
								<b className="topbar-tit"><span id="title">事件中心详情</span></b>
							</div>
							<div className="topbar-cell" style={{position:'absolute',left:'120px',top:'20px'}}>
								<span >
									<Button  onClick={() => {window.history.back()}}><span><Icon type="rollback" /></span>返回上一级</Button>
								</span>
							</div>
						</div>
						<div className='record'>
							<EventForm />
						</div>
					</div>
				</div>	
			</div>
		)
	}
}
