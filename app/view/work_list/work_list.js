import React, { Component } from 'react'
import { Button, Icon, Tabs, Input, Row, Col, Select, Table, DatePicker  } from 'antd'
const { RangePicker } = DatePicker;
const TabPane = Tabs.TabPane;
const Option = Select.Option;

import './index.css'

const ListSearch = React.createClass({
	render(){
		return (
			<div style={{ marginBottom: 20 }} className="changedata">
				<Row >
				  <Col span={5}>
					工单编号 <Input />
				  </Col>
				  <Col span={12} style={{ width: 400 }}>
					起至时间 <RangePicker />
				  </Col>
				  <Col span={5} >
					关键字 <Input />
				  </Col>
				   <Col span={2}>
					<Button type="primary">查询</Button>
				  </Col>
				</Row>
			</div>
		)
	}
})


class WorkList extends React.Component {
	constructor(props) {
		super(props);
		this.columns = [{
			title: '工单编号',
			dataIndex: 'id',
			width: '10%',
		}, {
			title: '会员名称',
			dataIndex: 'userName',
			width: '15%',
		}, {
			title: '工单主题',
			dataIndex: 'title',
			width: '15%',
		}, {
			title: '工单分类',
			dataIndex: 'sheetType',
			width: '10%',
		},{
			title: '提交时间',
			dataIndex: 'crtDate',
			width: '15%',
		},{
			title: '状态(全部)',
			dataIndex: 'sheetStatus',
			width: '15%',
		},{
			width: '15%',
			title: '操作',
			dataIndex: 'operation',
			render: () => {
				return (<div className="editable-row-operation">
							<span>
								<a>查看</a>&nbsp;&nbsp;&nbsp;&nbsp;<a>删除</a>
							</span>
						</div>)
			},
		}];
		this.state = {
			data: [],
		}
		this.fetch = this.fetch.bind(this);
		this.pagination = {
			total: this.state.data.length,
			showSizeChanger: true,
			showQuickJumper: true,
		};
	}
	componentDidMount(){
		this.fetch();
	}
	//将秒转换为YYYY年MM月DD日 格式的日期
	timeToShortDateFormat(timeTemp){
		var time = 0;
		if(typeof(timeTemp) != "number" && timeTemp != null && timeTemp != "null" && timeTemp != ""){
			time = parseInt(timeTemp);
		}else if(typeof(timeTemp) == "number"){
			time = timeTemp;
		}else{
			time = '';
		}
		if(time != null && time != ''){
			var timeBegin = new Date(time);
			var validDateBegin = timeBegin.getFullYear() + "年" + this.GetFullDate(timeBegin.getMonth()+1) + "月" + this.GetFullDate(timeBegin.getDate()) + "日 ";
			return validDateBegin;
		}else{
			return time;
		}
	}
	//返回日月 （修正为两位数） 
	GetFullDate(date){
		if(date <= 9){
			return "0" + date.toString();
		}else{
			return date;
		}
	}
	fetch(){
		let _this = this;
		W.ajax('http://localhost:4000/findList.json',{
			dataType:'json',//服务器返回json格式数据
			type:'get',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			headers:{'Content-Type':'application/json'},	              
			success: ((data) => {
				var obj=[];
				for(var i = 0; i<data.dataList.length; i++){
					obj[i] = {
						key: i,
						id: data.dataList[i].id,
						userName: data.dataList[i].userName,
						title: data.dataList[i].title,
						sheetType: data.dataList[i].sheetType,
						crtDate: this.timeToShortDateFormat(data.dataList[i].crtDate),
						sheetStatus: data.dataList[i].sheetStatus
					}	
				};
				console.log(obj)
				_this.setState({
					data: obj
				})
				// console.log(data)
			}),
			error:function(xhr,type,errorThrown){
				//异常处理；
				console.log(type);
			}
		});
	}
	render(){
		const {data} = this.state
		const columns = this.columns;
		const pagination = this.pagination;
		return (
			<div className="main-box">
				<div className="content-wrap">
					<div className="content-layout pl20 pr20">
						<div className="topbar"> 
							<div className="topbar-cell">
								<b className="topbar-tit">工单查询</b>
							</div>
							<div className="topbar-cell">
								<span className="fr">
									<Button type="primary">提交工单</Button>
									<Button type="primary">导出</Button>
								</span>
							</div>
						 </div>
						 <div style={{ marginTop: 20 }}>
							<ListSearch />
							<Table  columns={columns} dataSource={data} pagination={pagination}/>
						 </div>
					</div>
				</div>	
			</div>
		)
	}
}

export default WorkList