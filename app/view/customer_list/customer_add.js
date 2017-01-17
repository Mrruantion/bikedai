import React, { Component } from 'react'
/*import { Link } from 'react-router'*/
import { Cascader, Form, Select, Button, Icon, DatePicker, Row, Col, Input, Table, Tabs, Radio, Upload, Modal } from 'antd'


const FormItem = Form.Item;
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;
const InputGroup = Input.Group;


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
									<Input placeholder="输入客户姓名(至少两个字符)"/>
								  )}
								</FormItem>
							</Col>
							<Col span={12} className="position">
								<FormItem
								  label="常住地址"
								  labelCol={{ span: 6 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('gender1', {
									rules: [{ required: true, message: '常住地址' }],
								  })(<div>
									<Cascader size="large" options={options} style={{ width: '96%' }} />
									<Input style={{ width: '79%', marginTop: 10 }} /><Button><Icon type="environment" /></Button>
									</div>
								  )}
								</FormItem>
							</Col>
					  </Row>
					   <Row>
							<Col span={12}>
								<FormItem
								  label="手机号码"
								  labelCol={{ span: 6 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('phone', {
									rules: [{ required: true, message: '请输入手机号码' }],
								  })(
									<Input placeholder="输入手机号码(11位)"/>
								  )}
								</FormItem>
							</Col>
					  </Row>
					   <Row>
							<Col span={12}>
								<FormItem
								  label="证件类型"
								  labelCol={{ span: 6 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('carnumber', {
									rules: [{ required: true }], initialValue: "身份证"
								  })(
									 <Select>
										<Option value="身份证">身份证</Option>
										<Option value="护照">护照</Option>
									  </Select>
								  )}
								</FormItem>
							</Col>
							<Col span={12} className="position"  style={{ top: -12 }}>
								<FormItem
								  label="常住地址"
								  labelCol={{ span: 6 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('gender1', {
									rules: [{ required: true, message: '常住地址' }],
								  })(<div>
									<Cascader size="large" options={options} style={{ width: '98%' }} />
									<Input style={{ width: '79%', marginTop: 10 }} /><Button><Icon type="environment" /></Button>
									</div>
								  )}
								</FormItem>
							</Col>
					  </Row>
					  <Row>
							<Col span={12}>
								<FormItem
								  label="证件号码"
								  labelCol={{ span: 6 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('IDcardnumber', {
									rules: [{ required: true, message: '请输入证件号码' }],
								  })(
									<Input placeholder="输入手证件号码"/>
								  )}
								</FormItem>
							</Col>
					  </Row>
					  <Row>
							<Col span={12}>
								<FormItem
								  label="年龄"
								  labelCol={{ span: 6 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('IDcardnumber', {
									rules: [{ required: true, message: '请输入年龄' }],
								  })(
									<Input placeholder="输入手证件号码"/>
								  )}
								</FormItem>
							</Col>
							<Col span={12}>
								<FormItem
									label="身份证照片"
									labelCol={{ span: 6 }}
									wrapperCol={{ span: 16 }}
								>
								  {getFieldDecorator('gender7', {})(
									<UploadPicture />
									)}
								</FormItem>
							</Col>
					  </Row>
					  <Row>
							<Col span={12}>
								<FormItem
								  label="性别"
								  labelCol={{ span: 6 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('gender', {
									rules: [{ required: true, message: '请输入证件号码' }], initialValue: "男"
								  })(
									
									<Select>
										<Option value="男">男</Option>
										<Option value="女">女</Option>
									  </Select> 
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
								  {getFieldDecorator('orgenation', {
									rules: [{ required: true, message: '请输入组织' }],
								  })(
									<Input />
								  )}
								</FormItem>
							</Col>
					  </Row>
				  </div>
			   </div>
			   <div className="record-list remove-top">
				  <div className="record-tit">汽车基本信息</div>
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
			   <div className="record-list remove-top">
				  <div className="record-tit">贷款基本信息</div>
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

/*图片预览*/
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
