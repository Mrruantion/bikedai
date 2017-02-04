import React, { Component } from 'react'
import { Menu } from 'antd'

import { Link } from 'react-router';



import './index.css'

class Analysis extends React.Component {
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
						趋势分析
					</div>
					<aside>
						<Menu mode="inline" theme="light">
							<Menu.Item key="1"><Link to="/analysis/risk_map">风险地图</Link></Menu.Item>
							<Menu.Item key="2"><Link to="/analysis/risk_trend">风险趋势</Link></Menu.Item>
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


export default Analysis