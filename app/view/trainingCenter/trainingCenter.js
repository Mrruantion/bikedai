import React, { Component } from 'react'
import { Menu } from 'antd'
const SubMenu = Menu.SubMenu;

import { Link } from 'react-router'
import './index.css'

class TrainingCenter extends React.Component {
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
						培训中心
					</div>
					<aside>
						<Menu mode="inline" theme="light" onClick={this.handleClick}>
							<Menu.Item key="1"><Link to="/trainingCenter/yh_peixun">常见问题</Link></Menu.Item>
							<Menu.Item key="2"><Link to="/trainingCenter/yh_peixun2">WEB使用说明</Link></Menu.Item>
							<Menu.Item key="3"><Link to="/trainingCenter/yh_peixun3">APP使用说明</Link></Menu.Item>
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


export default TrainingCenter