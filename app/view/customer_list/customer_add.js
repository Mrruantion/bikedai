import React, { Component } from 'react'
/*import { Link } from 'react-router'*/
import { Checkbox, Cascader, Form, Select, Button, Icon, DatePicker, Row, Col, Input, Table, Tabs, Radio, Upload, Modal } from 'antd'


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
				  <div className="record-edit customermsg" style={{ height: 390 }}>
					   <Row>
							<Col span={12}>
								<FormItem
								  label="客户姓名"
								  labelCol={{ span: 6 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('name', {
									rules: [{ required: true, message: '请输入姓名' }],
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
								  {getFieldDecorator('peraddress', {})(
									<Cascader size="large" options={options} style={{ width: '96%' }} onChange={(value) => console.log(value)}/>
								  )}
								</FormItem>
								<FormItem
								  wrapperCol={{ span: 14, offset: 6 }}
								>
								  {getFieldDecorator('peraddress1', {})(<div>
									<Input style={{ width: '79%', marginTop: 10 }} /><Button><Icon type="environment" /></Button>
									</div>
								 )}
								</FormItem>
							</Col>
					  </Row>
					   <Row>
							<Col span={12} style={{ top: -20 }}> 
								<FormItem
								  label="手机号码"
								  labelCol={{ span: 6 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('tel', {})(
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
								  {getFieldDecorator('idType', { initialValue: "1" })(
									 <Select>
										<Option value="1">身份证</Option>
										<Option value="2">护照</Option>
									  </Select>
								  )}
								</FormItem>
							</Col>
							<Col span={12} className="position" >
								<FormItem
								  label="工作单位地址"
								  labelCol={{ span: 6 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('jobaddress', {})(
									<Cascader size="large" options={options} style={{ width: '98%' }} />
								  )}
								</FormItem>
								<FormItem
								  wrapperCol={{ span: 14, offset: 6 }}
								>
								  {getFieldDecorator('jobaddress1', {})(<div>
									<Input style={{ width: '79%', marginTop: 10 }} /><Button><Icon type="environment" /></Button>
									</div>
								  )}
								</FormItem>
							</Col>
					  </Row>
					  <Row>
							<Col span={12} style={{ top: -20 }}>
								<FormItem
								  label="证件号码"
								  labelCol={{ span: 6 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('idNo', {})(
									<Input placeholder="输入证件号码"/>
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
								  {getFieldDecorator('age', {})(
									<Input placeholder="输入年龄"/>
								  )}
								</FormItem>
							</Col>
							<Col span={12}>
								<FormItem
									label="身份证照片"
									labelCol={{ span: 6 }}
									wrapperCol={{ span: 16 }}
								>
								  {getFieldDecorator('idphotopath', {})(
									<UploadPicture />
									)}
								</FormItem>
							</Col>
					  </Row>
					  <Row>
							<Col span={12} style={{ top: -60 }}>
								<FormItem
								  label="性别"
								  labelCol={{ span: 6 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('sex', { initialValue: "0" })(
									<Select>
										<Option value="0">男</Option>
										<Option value="1">女</Option>
									  </Select> 
								  )}
								</FormItem>
							</Col>
					  </Row>
					  <Row>
							<Col span={12} style={{ top: -40 }}>
								<FormItem
								  label="所属组织"
								  labelCol={{ span: 6 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('client', {
									rules: [{ required: true, message: '请输入组织' },], initialValue: "测试专用111" 
								  })(
									<Input />
								  )}
								</FormItem>
							</Col>
					  </Row>
				  </div>
			   </div>
			   
			   <div className="record-list remove-top carmsg">
				  <div className="record-tit">汽车基本信息</div>
				  <div className="record-edit" >
					   <Row>
							<Col span={12}>
								<FormItem
								  label="车牌号码"
								  labelCol={{ span: 6 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('vehicleno', {
									rules: [{ required: true, message: '请输入车牌号码' }],
								  })(
									<Input placeholder="输入车牌号码"/>
								  )}
								</FormItem>
							</Col>
							<Col span={12}>
								<FormItem
								  label="行驶证号"
								  labelCol={{ span: 6 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('dlicenseno', {})(
									<Input placeholder="输入行驶证号"/>
								  )}
								</FormItem>
							</Col>
					  </Row>
					  <Row>
							<Col span={12}>
								<FormItem
								  label="车型"
								  labelCol={{ span: 6 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('vehicletype', {
									rules: [{ required: true, message: '请输入车型' }],
								  })(
									<Input placeholder="输入车型(至少两个字符)"/>
								  )}
								</FormItem>
							</Col>
							<Col span={12}>
								<FormItem
								  label="车架号"
								  labelCol={{ span: 6 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('vehiclevin', {})(
									<Input placeholder="填写车架后六位"/>
								  )}
								</FormItem>
							</Col>
					  </Row>
					  <Row>
							<Col span={12}>
								<FormItem
								  label="行驶里程"
								  labelCol={{ span: 6 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('mileage', {})(
								  <Input placeholder="输入行驶里程(最多保留2位小数)" suffix={'公里'} />
								  )}
								</FormItem>
							</Col>
							<Col span={12}>
								<FormItem
									label="汽车照片"
									labelCol={{ span: 6 }}
									wrapperCol={{ span: 16 }}
								>
								  {getFieldDecorator('img1', {})(
									<UploadPicture />
									)}
								</FormItem>
							</Col>
					  </Row>
					  <Row>
							<Col span={12} style={{ top: -80 }}>
								<FormItem
								  label="所在城市"
								  labelCol={{ span: 6 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('loc_city', {})(
									<Cascader size="large" options={options} />
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
								  label="贷款类型"
								  labelCol={{ span: 6 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('loantype', { initialValue: "抵押贷款" })
								  (
									<Select>
										<Option value="抵押贷款">抵押贷款</Option>
										<Option value="按揭分期">按揭分期</Option>
										<Option value="融资租赁">融资租赁</Option>
										<Option value="以租代购">以租代购</Option>
									</Select>
								  )}
								</FormItem>
							</Col>
							<Col span={12}>
								<FormItem
								  label="评估金额"
								  labelCol={{ span: 6 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('assessamount', {})(
									<Input placeholder="输入评估金额(最多保留两位数)" suffix={"万元"} />
								  )}
								</FormItem>
							</Col>
					  </Row>
					  <Row>
							<Col span={12}>
								<FormItem
								  label="放款金额"
								  labelCol={{ span: 6 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('loanamount', {})(
									<Input placeholder="输入评估金额(最多保留两位数)" suffix={"万元"} />
								  )}
								</FormItem>
							</Col>
							<Col span={12}>
								<FormItem
								  label="放款日期"
								  labelCol={{ span: 6 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('loandate', {})(
									<DatePicker/>
								  )}
								</FormItem>
							</Col>
					  </Row>
					   <Row>
							<Col span={12}>
								<FormItem
								  label="还款期数"
								  labelCol={{ span: 6 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('repaytimes', {})(
									<Input placeholder="输入还款期数(最多36期)" suffix={"期"} />
								  )}
								</FormItem>
							</Col>
							<Col span={12}>
								<FormItem
								  label="还款周期"
								  labelCol={{ span: 6 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('repaydate', {})(
									 <RangePicker />
								  )}
								</FormItem>
							</Col>
							<Col span={12}>
								<FormItem
								  label="贷款用途"
								  labelCol={{ span: 6 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('purpose', {})(
									 <Input placeholder="贷款用途(不大于100个字符)" />
								  )}
								</FormItem>
							</Col>
					  </Row>  
					  <Row>
							<Col span={10}>
								<FormItem
								  label="业务专员"
								  labelCol={{ span: 7 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('busmanager', {})(
									<Input placeholder="输入业务专员(至少两个字符)" />
								  )}
								</FormItem>
							</Col>
							<Col span={10}>
								<FormItem
								  label="联系电话"
								  labelCol={{ span: 7 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('bphone', {})(
									 <Input placeholder="输入手机号码(11位)" />
								  )}
								</FormItem>
							</Col>
							<Col span={4}>
								<FormItem
								  labelCol={{ span: 8 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('i1', {})(
									 <Checkbox defaultChecked={false}>报警短信</Checkbox>
								  )}
								</FormItem>
							</Col>
					  </Row>
					  <Row>
							<Col span={10}>
								<FormItem
								  label="风控专员"
								  labelCol={{ span: 7 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('analyst', {})(
									<Input placeholder="输入风控专员(至少两个字符)" />
								  )}
								</FormItem>
							</Col>
							<Col span={10}>
								<FormItem
								  label="联系电话"
								  labelCol={{ span: 7 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('rphone', {})(
									 <Input placeholder="输入手机号码(11位)" />
								  )}
								</FormItem>
							</Col>
							<Col span={4}>
								<FormItem
								  labelCol={{ span: 8 }}
								  wrapperCol={{ span: 14 }}
								>
								  {getFieldDecorator('i2', {})(
									 <Checkbox defaultChecked={true}>报警短信</Checkbox>
								  )}
								</FormItem>
							</Col>
					  </Row>
				  </div>
			   </div>
			   <FormItem wrapperCol={{ span: 8, offset: 12 }} style={{ marginTop: 20 }}>
				  <Button type="primary" htmlType="submit">
					保存
				  </Button>
				</FormItem>
		    </Form>
		</div>
    );
  },
}));


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
