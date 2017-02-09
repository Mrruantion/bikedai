import React, { Component } from 'react'
import { render } from 'react-dom'
import { Menu, Button, Icon, DatePicker, Row, Col, Input } from 'antd'
const SubMenu = Menu.SubMenu;
import moment from 'moment';
const RangePicker = DatePicker.RangePicker;
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

import './index.css'

class Area extends React.Component {
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
						区域管理
					</div>
					<aside>
						<Menu mode="inline" theme="light">
							<Menu.Item key="1"><Link to="/area/areaOne">常用区域</Link></Menu.Item>
							<Menu.Item key="2"><Link to="/area/areaTwo">敏感区域（公有）</Link></Menu.Item>
							<Menu.Item key="3"><Link to="/area/areaThree">敏感区域（私有）</Link></Menu.Item>
						</Menu>
					</aside>
					<div className={collapse ? "menu-third-btn  menu-third-btn-collapse" : "menu-third-btn"} onClick={this.onCollapseChange}></div>  
				</div>
				<div className={ collapse ? 'main-box1': "main-box1 main-box-collapse"}>
					{this.props.children}
				</div>
			</div>
		)
	}
}


export default Area