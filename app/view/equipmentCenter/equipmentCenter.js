import React, { Component } from 'react'
import { Menu } from 'antd'
const SubMenu = Menu.SubMenu;



import PageOne from './page/pageOne.js'
import PageTwo from './page/pageTwo.js'

import './index.css'

class EquipmentCenter extends React.Component {
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
	
	handleClick(e) {
		const item = e.key-1;
		const hh = document.getElementById("combox").children;
		for(var i = 0; i<hh.length; i++){
			hh[i].className="hide";
		}
		hh[item].className="show";
		console.log(e);
	}
	
	render(){
		const collapse = this.state.collapse;
		const { routes, params, children } = this.props;
		return (
			<div id="otherroot">
				<div className={collapse ? "menu-third-collapse" : "menu-third"}>
					<div className="menu-third-head">
						设备中心
					</div>
					<aside>
						<Menu mode="inline" theme="light" onClick={this.handleClick.bind(this)}>
							<Menu.Item key="1">我的设备</Menu.Item>
							<Menu.Item key="2">我的流量卡</Menu.Item>
						</Menu>
					</aside>
					<div className={collapse ? "menu-third-btn  menu-third-btn-collapse" : "menu-third-btn"} onClick={this.onCollapseChange}></div>  
				</div>
				<div className={ collapse ? 'main-box': "main-box main-box-collapse"} id="combox">
					<div className="show"><PageOne /></div> 
					<div className="hide"><PageTwo /></div>
				</div>
			</div>
		)
	}
}


export default EquipmentCenter