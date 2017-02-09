import React, { Component } from 'react'
import { Button, Icon, Tabs } from 'antd'
const TabPane = Tabs.TabPane;

import './index.css'

export default class Position extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			collapse: false,
			updown: false,
		}
		this.onCollapseChange = this.onCollapseChange.bind(this);
		this.onUpdown = this.onUpdown.bind(this);
		this.mapinit = this.mapinit.bind(this);
		this.ranging = this.ranging.bind(this);
	}
	 componentDidMount() {
		if(typeof WMap!='undefined'&&WMap.ready){//已经加载好
            this.mapinit();
        }else{
            window.addEventListener('W.mapready',this.mapinit);
        }              //启用滚轮放大缩小
    }
	componentWillReceiveProps   (){
        this.mapinit(); 
    }
	mapinit(){
       	this.map = new BMap.Map("allmap");            // 创建Map实例
		this.map.addControl(new BMap.NavigationControl());
        this.map.addControl(new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]}));
		this.map.centerAndZoom("杭州",0);      // 初始化地图,用城市名设置地图中心点                
		this.map.enableScrollWheelZoom();        
    }
	ranging(){
		var myDis = new BMapLib.DistanceTool(this.map);
		myDis.open();
	}
	onCollapseChange() {
		this.setState({
			collapse: !this.state.collapse
		})
	}
	onUpdown() {
		this.setState({
			updown: !this.state.updown
		})
	}
	render(){
		const collapse =  this.state.collapse;
		const updown = this.state.updown;
		return(
			<div className="positionMap">
				<div className={ !collapse ? "positionHeader" : "positionHeader hlf" }>
					
				</div>
				<div className={ !collapse? "left-direct" : "left-direct lf" } >
					<div className="direct-top">
						<div className="direct-top-tit">
							<span className="icon icon-refresh fl ml5" ></span>
							<span id="treeTitle" className="fl ht">测试专用111(2/2)</span>
							<span id="updown" className={updown ? "icon icon-upblack fr rotate180":"icon icon-upblack fr rotate0"} onClick={this.onUpdown}></span>
						</div>
						<div className={updown ? "wrapper1 hide":"show wrapper1"} >
						</div>
					</div>
					
					<div className="direct-bottom">
						<div className="direct-head">
							<Tabs type="card">
								<TabPane tab="全部" key="1">Content of Tab Pane 1</TabPane>
								<TabPane tab="离线" key="2">Content of Tab Pane 2</TabPane>
								<TabPane tab="关注" key="3">Content of Tab Pane 3</TabPane>
								<TabPane tab="搜索" key="4">Content of Tab Pane 4</TabPane>
							</Tabs>
						</div>
					</div>
					<div className={ !collapse ? "row-btn" : "row-btn on"} onClick={this.onCollapseChange}></div>  
				</div>
				<div className="positionContent" id="allmap"></div>
				<div id="ranging" className="ranging" onClick={this.ranging}>测距</div>
			</div>
		)
	}

}