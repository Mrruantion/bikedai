import React, { Component } from 'react'
import { Menu } from 'antd'
const SubMenu = Menu.SubMenu;



import PageOne from './page/pageOne.js'
import PageTwo from './page/pageTwo.js'
import PageThree from './page/pageThree.js'
import PageFour from './page/pageFour.js'
import PageFive from './page/pageFive.js'
import PageSix from './page/pageSix.js'
import PageSeven from './page/pageSeven.js'
import PageEight from './page/pageEight.js'
import PageNine from './page/pageNine.js'
import PageTen from './page/pageTen.js'
import PageEleven from './page/pageEleven.js'
import PageTwelve from './page/pageTwelve.js'
import PageThirteen from './page/pageThirteen.js'

import './index.css'

class StatisticsReport extends React.Component {
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
			<div>
				<div className={collapse ? "menu-third-collapse" : "menu-third"}>
					<div className="menu-third-head">
						报表统计
					</div>
					<aside>
						<Menu mode="inline" theme="light" onClick={this.handleClick.bind(this)} defaultOpenKeys={['sub1']}>
							<SubMenu key="sub1" title="报警报表" >
								<Menu.Item key="1"onClick={this.handleClick}>离线超时报警</Menu.Item>
								<Menu.Item key="2">停车超时报警</Menu.Item>
								<Menu.Item key="3">进敏感区域报警</Menu.Item>
								<Menu.Item key="4">出行政区域报警</Menu.Item>
								<Menu.Item key="5">敏感区域停车超时</Menu.Item>
								<Menu.Item key="6">未进常用区域超时</Menu.Item>
								<Menu.Item key="7">出围栏报警</Menu.Item>
								<Menu.Item key="8">有线无线分离报警</Menu.Item>
								<Menu.Item key="9">设备功能报警</Menu.Item>
								<Menu.Item key="10">单车报警明细</Menu.Item>
							</SubMenu>
							<Menu.Item key="11">里程报表</Menu.Item>
							<Menu.Item key="12">离线报表</Menu.Item>
							<Menu.Item key="13">停留报表</Menu.Item>
						</Menu>
					</aside>
					<div className={collapse ? "menu-third-btn  menu-third-btn-collapse" : "menu-third-btn"} onClick={this.onCollapseChange}></div>  
				</div>
				<div className={ collapse ? 'main-box': "main-box main-box-collapse"} id="combox">
					<div className="show"><PageOne /></div> 
					<div className="hide"><PageTwo /></div>
					<div className="hide"><PageThree /></div> 
					<div className="hide"><PageFour /></div>
					<div className="hide"><PageFive /></div> 
					<div className="hide"><PageSix /></div>
					<div className="hide"><PageSeven /></div> 
					<div className="hide"><PageEight /></div>
					<div className="hide"><PageNine /></div> 
					<div className="hide"><PageTen /></div>
					<div className="hide"><PageEleven /></div>				
					<div className="hide"><PageTwelve /></div>				
					<div className="hide"><PageThirteen /></div> 
				</div>
			</div>
		)
	}
}


export default StatisticsReport