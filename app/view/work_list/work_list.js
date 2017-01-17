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
				  <Col span={12}>
					起至时间 <RangePicker />
				  </Col>
				  <Col span={5}>
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
			dataIndex: 'customer',
			width: '10%',
		}, {
			title: '会员名称',
			dataIndex: 'adddate',
			width: '15%',
		}, {
			title: '工单主题',
			dataIndex: 'carnumber',
			width: '15%',
		}, {
			title: '工单分类',
			dataIndex: 'cartype',
			width: '10%',
		},{
			title: '提交时间',
			dataIndex: 'organization',
			width: '15%',
		},{
			title: '状态(全部)',
			dataIndex: 'loantype',
			width: '15%',
		},{
			width: '15%',
			title: '操作',
			dataIndex: 'operation',
			render: () => {
				return (<div className="editable-row-operation">
							<span>
								<a>删除</a>
							</span>
						</div>)
			},
		}];
		
	}
	render(){
		const columns = this.columns;
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
						 <div style={{ marginTop: 30 }}>
							<ListSearch />
							<Table  columns={columns} />
						 </div>
					</div>
				</div>	
			</div>
		)
	}
}

export default WorkList