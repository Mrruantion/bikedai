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
			width: '12%',
		}, {
			title: '客户姓名',
			dataIndex: 'customer',
			width: '10%',
		},{
			title: '暗访人员',
			dataIndex: 'researcher',
			width: '10%',
		},{
			title: '暗访时间',
			dataIndex: 'investigations_time',
			width: '16%',
		},{
			title: '暗访结果',
			dataIndex: 'investigations_results',
			width: '10%',
		},{
			title: '操作',
			dataIndex: 'operation',
			width: '12%',
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
						<b className="topbar-tit"><span id="title">暗访记录</span></b>
					</div>
					<div className="topbar-cell">
						<span className="fr">
							<Button type="primary" onClick={this.handleClick}><span><Icon type="plus-circle-o" /></span>添加</Button>
							<Button type="primary"><span><Icon type="minus-circle-o" /></span>删除</Button>
							<Button type="primary"><span><Icon type="export" /></span>导出</Button>
						</span>
					</div>
				</div>
				<div style={{ marginTop: 20 }}>
					<Tabs  type="card">
						<TabPane tab="全部状态" key="1">
						</TabPane>
						<TabPane tab="常住地址不真实(0)" key="2">
						</TabPane>	
						<TabPane tab="工作地址不真实(0)" key="3">
						</TabPane>
						<TabPane tab="3天以上未回家(0)" key="4">
						</TabPane>
						<TabPane tab="3天以上未上班(0)" key="5">
						</TabPane>
					</Tabs>
					<ListSearch />
					<Table rowSelection={rowSelection} columns={columns} />
				</div>
			</div>	
			<div id="addlist" style={{ display: "none" }}>
				<InvestigationAdd />
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
		<Row>
			<Col span={12}>
				<FormItem
				  label="暗访人员"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('gender', {
					rules: [{ required: true, message: '输入暗访人员(至少2个字符)' }],
					onChange: this.handleSelectChange,
				  })(
					<Input placeholder="输入暗访人员(至少2个字符)"/>
				  )}
				</FormItem>
			</Col>
			<Col span={12}>
				<FormItem
				  label="暗访人员"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('gender1', {
					rules: [{ required: true}], initialValue: "正常"
				  })(
					<RadioGroup>
						<Radio value="正常">正常</Radio>
						<Radio value="异常">异常</Radio>
					</RadioGroup>
				  )}
				</FormItem>
			</Col>
		</Row>
		<Row>
			<Col span={12}>
				<FormItem
				  label="常住地址"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('gender2', {
					rules: [{ required: true}], initialValue: "真实"
				  })(
					<RadioGroup>
						<Radio value="真实">真实</Radio>
						<Radio value="虚假">虚假</Radio>
					</RadioGroup>
				  )}
				</FormItem>
			</Col>
			<Col span={12}>
				<FormItem
				  label="3天以上未回家"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('gender3', {
					rules: [{ required: true}], initialValue: "否"
				  })(
					<RadioGroup>
						<Radio value="否">否</Radio>
						<Radio value="是">是</Radio>
					</RadioGroup>
				  )}
				</FormItem>
			</Col>
		</Row>
		<Row>
			<Col span={12}>
				<FormItem
				  label="工作地址"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('gender4', {
					rules: [{ required: true}], initialValue: "真实"
				  })(
					<RadioGroup>
						<Radio value="真实">真实</Radio>
						<Radio value="虚假">虚假</Radio>
					</RadioGroup>
				  )}
				</FormItem>
			</Col>
			<Col span={12}>
				<FormItem
				  label="3天以上未上班"
				  labelCol={{ span: 6 }}
				  wrapperCol={{ span: 14 }}
				>
				  {getFieldDecorator('gender5', {
					rules: [{ required: true}], initialValue: "否"
				  })(
					<RadioGroup>
						<Radio value="否">否</Radio>
						<Radio value="是">是</Radio>
					</RadioGroup>
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

/*表单组件*/
class InvestigationAdd extends React.Component {
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


export default class InvestigationList extends React.Component {
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
