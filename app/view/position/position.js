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
		this.map.centerAndZoom("福州",0);      // 初始化地图,用城市名设置地图中心点                
		this.map.enableScrollWheelZoom();        
    }
	//测距
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
							<span className="icon icon-refresh fl ml5" onClick={() => {location.reload()}}></span>
							<span id="treeTitle" className="fl ht">测试专用111(2/2)</span>
							<span id="updown" className={updown ? "icon icon-upblack fr rotate180":"icon icon-upblack fr rotate0"} onClick={this.onUpdown}></span>
						</div>
						<div className={updown ? "wrapper1 hide wrapper-common":"show wrapper1 wrapper-common"} >
						</div>
					</div>
					
					<div className="direct-bottom">
						<div className="direct-head">
							<ul className="noname clearfix">
								<li className="on" >全部<span id="all11"></span></li>
								<li>离线<span id="all12"></span></li>
								<li>关注<span id="all13"></span></li>
								<li>搜索</li>
							</ul>
							<div className="noname-text">
								<div>
									<ul className="direct-tit switch clearfix">
										<li className="on"><i>全部<span id="all21"></span></i></li>
										<li><i>正常<span id="all22"></span></i></li>
										<li><i>可疑<span id="all23"></span></i></li>
										<li><i>高危<span id="all24"></span></i></li>
									</ul>
								</div>
								<div className="none">
									<p className="gz-tips">显示当前与服务器没有通讯的设备</p>
								</div>
								<div className="none">
									<p className="gz-tips">注: 关注数目不得超过200</p>
								</div>
								<div className="none">
									<span className="bind-search">
										<input id="searchText"  type="text" className="text" value="" placeholder="请输入客户姓名/车牌号码/IMEI" />
										<input id="sbt" className="btn" type="button"/>
									</span>
								</div>
							</div>
							<div className="gp-tit">
								<span className="qxChk ml10 crp">全选</span>
								<span className="ml10">设备名称</span>
								<span className="crp ml10">刷新</span>
								<span className="crp ml10">库存</span>
								<i className="fr mr10">状态</i>
							</div>
						</div>
						<div className="wrapper-wrap">
							<div className="addzuname none">
								<input id="groupName" type="text" className="text" value="" placeholder="设备名称" />
								<span className="addyes">确定</span>
								<span className="addcancel crp">取消</span>
							</div>
							<div id="wrapper2" className="wrapper2 wrapper-common">
								<div  className="direct-table-wrap direct-fir">		
									<div className="paixu none">
										<div className="paixus fl">
											<div><span className="icon icon-rowdown"></span>排序</div>
											<ul className="paixu-list clearfix">
												<li>客户名称</li>
												<li>设备类型</li>
												<li>离线时长</li>
											</ul>
										</div>
										<div className="fl addZu"><span className="icon icon-rowadd"></span>添加组</div>
									</div>		
									<div id="gps_in_tree" ></div>					
								</div>
								<div className="direct-table-wrap  direct-sec">
									<div id="offline_in_tree" className="gp-wrap"></div>
								</div>
								<div className="direct-table-wrap  direct-sec">
									<div id="gps_in_keyPoint" className="gp-wrap"></div>
								</div>
								<div className="direct-table-wrap  direct-sec">
									<div id="gps_in_search" className="gp-wrap"></div>
								</div>
							</div>
						</div>		
					</div>
					<div className={ !collapse ? "row-btn" : "row-btn on"} onClick={this.onCollapseChange}></div>  
				</div>
				<div className="positionContent" id="allmap"></div>
				<div id="ranging" className="ranging" onClick={this.ranging}>测距</div>
				<ul className="label-car label-carpo">
					<li className="gre">行驶</li>
					<li className="red">停车</li>
					<li className="yel">报警</li>  
					<li className="und">参考定位</li>
					<li className="pur">基站定位</li>
					<li className="bla">有线离线</li>
					<li className="blu">无线离线</li>
					<li className="wifi">WIFI定位</li>                    
				</ul>
			</div>
		)
	}

}