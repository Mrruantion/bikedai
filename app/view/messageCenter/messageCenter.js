import React, { Component } from 'react'
import { Menu, Badge } from 'antd'
const SubMenu = Menu.SubMenu;


import { Link } from 'react-router';

import './index.css'

class MessageCenter extends React.Component {
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
						公告通知
					</div>
					<aside>
						<Menu mode="inline" theme="light" defaultOpenKeys={['sub1']}>
							<SubMenu key="sub1" title="公告通知">
								<Menu.Item key="1"><Link to="/messageCenter/notify_all">全部通知</Link></Menu.Item>
								<Menu.Item key="2"><Link to="/messageCenter/notify_unread"><Badge count={1}>未读通知</Badge></Link></Menu.Item>
								<Menu.Item key="3"><Link to="/messageCenter/notify_read">已读通知</Link></Menu.Item>
							</SubMenu>
						</Menu>
					</aside>
					<div className={collapse ? "menu-third-btn  menu-third-btn-collapse" : "menu-third-btn"} onClick={this.onCollapseChange}></div>  
				</div>
				<div className={ collapse ? 'main-box': "main-box main-box-collapse"} id="combox">
					{this.props.children}
				</div>
			</div>
		)
	}
}


export default MessageCenter