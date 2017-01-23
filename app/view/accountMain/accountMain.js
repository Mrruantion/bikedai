import React, { Component } from 'react'
import { Menu } from 'antd'
const SubMenu = Menu.SubMenu;

import { Link } from 'react-router'



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
			<div>
				<div className={collapse ? "menu-third-collapse" : "menu-third"}>
					<div className="menu-third-head">
						账号管理
					</div>
					<aside>
						<Menu mode="inline" theme="light">
							<Menu.Item key="1"><Link to="/accountMain/account_organization">组织管理</Link></Menu.Item>
							<Menu.Item key="2"><Link to="/accountMain/account_role">角色管理</Link></Menu.Item>
							<Menu.Item key="3"><Link to="/accountMain/account_user">用户管理</Link></Menu.Item>
						</Menu>
					</aside>
					<div className={collapse ? "menu-third-btn  menu-third-btn-collapse" : "menu-third-btn"} onClick={this.onCollapseChange}></div>  
				</div>
				<div className={ collapse ? 'main-box': "main-box main-box-collapse"}>
					{this.props.children}
				</div>
			</div>
		)
	}
}


export default AccountMain