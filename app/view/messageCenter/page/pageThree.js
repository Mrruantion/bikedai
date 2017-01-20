import React, { Component } from 'react'
import { Button, Icon, Row, Col, Input, Table, Tabs } from 'antd'
const TabPane = Tabs.TabPane;


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

export default class PageThree extends React.Component {
	constructor(props){
		super(props)
		this.columns = [{
			title: '标题内容',
			dataIndex: 'title_content',
			width: '67%',
		}, {
			title: '提交时间',
			dataIndex: 'submit_time',
			width: '20%',
		}, {
			title: '类型',
			dataIndex: 'type',
			width: '10%',
		}];
	}
	
	render(){
		const columns = this.columns;
		return(
			<div>
				<div className="topbar"> 
					<div className="topbar-cell">
						<b className="topbar-tit"><span id="title">已读通知</span></b>
					</div>
					<div className="topbar-cell">
						<span className="fr">
							<Button>导出</Button>
						</span>
					</div>
				</div>
				<div style={{ marginTop: 20 }} className="dataPick">
					<Tabs  type="card">
						<TabPane tab="全部" key="1"></TabPane>
						<TabPane tab="公告" key="2"></TabPane>	
						<TabPane tab="通知" key="3"></TabPane>
					</Tabs>
					<Table rowSelection={rowSelection} columns={columns} />
				</div>
			</div>	
		)
	}
}

