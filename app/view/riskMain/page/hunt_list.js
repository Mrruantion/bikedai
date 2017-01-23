import React, { Component } from 'react'
import { Form, Select, Button, Icon, DatePicker, Row, Col, Input, Table, Tabs, Radio, Upload, Modal } from 'antd'
import moment from 'moment';


const FormItem = Form.Item;
const Option = Select.Option;
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;
const RangePicker = DatePicker.RangePicker;


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
			title: '车牌号码',
			dataIndex: 'devicename',
			width: '10%',
		}, {
			title: '车型',
			dataIndex: 'cartype',
			width: '10%',
		}, {
			title: '所属组织',
			dataIndex: 'organization',
			width: '17%',
		}, {
			title: '客户姓名',
			dataIndex: 'customer',
			width: '10%',
		},{
			title: '追车负责人',
			dataIndex: 'chaseheader',
			width: '10%',
		},{
			title: '追车时间',
			dataIndex: 'chasetime',
			width: '16%',
		},{
			title: '追车结果',
			dataIndex: 'chaseresult',
			width: '10%',
		},{
			title: '操作',
			dataIndex: 'operation',
			width: '16%',
		}];
	}
	
	handleClick(){
		const loglist = document.querySelector("#loglist");
		const logadd = document.querySelector("#logadd");
		loglist.style.display = "none";
		logadd.style.display = "block";
	}
	render(){
		const columns = this.columns;
		return(
		<div>
			<div className="risk" id="loglist">
				<div className="topbar"> 
					<div className="topbar-cell">
						<b className="topbar-tit"><span id="title">追车日志</span></b>
					</div>
					<div className="topbar-cell">
						<span className="fr">
							<Button type="primary" onClick={this.handleClick}><span><Icon type="plus-circle-o" /></span>添加</Button>
							<Button type="primary"><span><Icon type="minus-circle-o" /></span>删除</Button>
							<Button type="primary"><span><Icon type="export" /></span>导出</Button>
						</span>
					</div>
				</div>
				<Row style={{ marginTop: 20 }}>
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
				<Row gutter={16} style={{ marginTop: 20}} >
					<Col span={14}>
						选择时间 
						<RangePicker
							ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
                         />
					</Col>
				</Row>
				<div style={{ marginTop: 20 }}>
					<Table rowSelection={rowSelection} columns={columns} />
				</div>
			</div>
			<div id="logadd" style={{ display: "none" }}>
				<InvestigationAdd />
			</div>
		</div>
		)
	}
}

/*表单提交*/
const InvestigationForm = Form.create()(React.createClass({
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
					<Input />
				  )}
				</FormItem>
			</Col>
			<Col span={12}>
				<FormItem
				  label="追车时间"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('gender11', {
					rules: [{ required: true, message: '请输入追车时间' }],
				  })(
					<DatePicker />
				  )}
				</FormItem>
			</Col>
		</Row>
		<Row>
			<Col span={12}>
				<FormItem
				  label="追车负责人"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('gender', {
					rules: [{ required: true, message: '输入追车负责人(至少2个字符)' }],
					onChange: this.handleSelectChange,
				  })(
					<Input placeholder="输入追车负责人(至少2个字符)"/>
				  )}
				</FormItem>
			</Col>
			<Col span={12}>
				<FormItem
				  label="其他成员"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('gender1', {
					rules: [{ required: true}]
				  })(
					<Input placeholder="输入其他成员"/>
				  )}
				</FormItem>
			</Col>
		</Row>
		<Row>
			<Col span={12}>
				<FormItem
				  label="追车费用"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('gender2', {
					rules: [{ required: true}], initialValue: "真实"
				  })(
					<Input placeholder="输入追车费用(最多保留两位数)"/>
				  )}
				</FormItem>
			</Col>
			<Col span={12}>
				<FormItem
				  label="追车结果"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('gender3', {
					rules: [{ required: true}], initialValue: "成功"
				  })(
					<RadioGroup>
						<Radio value="成功">成功</Radio>
						<Radio value="失败">失败</Radio>
					</RadioGroup>
				  )}
				</FormItem>
			</Col>
		</Row>
        <FormItem
			label="事件描述"
			labelCol={{ span: 3 }}
			wrapperCol={{ span: 7 }}
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

/*表单组件*/
class InvestigationAdd extends React.Component {
	constructor(props) {
		super(props)
	}
	handleClick(){
		console.log("kk");
		const loglist = document.querySelector("#loglist");
		const logadd = document.querySelector("#logadd");
		loglist.style.display = "block";
		logadd.style.display = "none";
	}
	render(){
		return (
			<div>
				<div className="topbar"> 
					<div className="topbar-cell">
						<b className="topbar-tit"><span id="title">添加暗访记录</span></b>
					</div>
					<div className="topbar-cell" style={{position:'absolute',left:'120px',top:'20px'}}>
						<span >
							<Button  onClick={this.handleClick}><span><Icon type="rollback" /></span>返回上一级</Button>
						</span>
					</div>
				</div>
				<div className='record'>
					<InvestigationForm />
				</div>
			</div>
		)
	}
} 


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


export default class HuntList extends React.Component {
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
