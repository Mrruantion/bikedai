import React, { Component } from 'react'
import { render } from 'react-dom'
import { Menu, Button, Icon, DatePicker, Row, Col, Input } from 'antd'
const SubMenu = Menu.SubMenu;
import moment from 'moment';
const RangePicker = DatePicker.RangePicker;
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

import './index.css'

class AccountMain extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			collapse: false
		}
		this.onCollapseChange = this.onCollapseChange.bind(this);
	}
	onCollapseChange(){
		this.setState ({
			collapse: !this.state.collapse
		})
	}
	render(){
		const collapse = this.state.collapse;
		const { routes, params, children } = this.props;
		return (
			<div id="otherroot">
				<div className={collapse ? "menu-third-collapse" : "menu-third"}>
					<div className="menu-third-head">
						账号管理
					</div>
					<aside>
						<Menu mode="inline" theme="light">
							<Menu.Item key="1"><Link to="/">组织管理</Link></Menu.Item>
							<Menu.Item key="2"><Link to="/">角色管理</Link></Menu.Item>
							<Menu.Item key="3"><Link to="/">用户管理</Link></Menu.Item>
						</Menu>
					</aside>
					<div className={collapse ? "menu-third-btn  menu-third-btn-collapse" : "menu-third-btn"} onClick={this.onCollapseChange}></div>  
				</div>
				<div className={ collapse ? 'main-box': "main-box main-box-collapse"}>
					<div className="topbar"> 
						<div className="topbar-cell">
								<b className="topbar-tit"><span id="title">组织管理</span></b>
						</div>
						<div className="topbar-cell">
							<span className="fr">
								<Button type="primary"><span><Icon type="plus-circle-o" /></span>添加</Button>
								<Button type="primary"><span><Icon type="reload" /></span>刷新</Button>
								<Button type="primary"><span><Icon type="export" /></span>导出</Button>
							</span>
						</div>
					</div>
					<Row gutter={16} style={{ marginTop: 20}} >
					  <Col span={9}>
						所属组织 <Input style={{ width: "70%"}}/>
					  </Col>
					  <Col span={6}>
						<Button type="primary">查询</Button>
					  </Col>
					</Row>
				</div>
			</div>
		)
	}
}


export default AccountMain