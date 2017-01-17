import React, { Component } from 'react'
import { Card, Col, Row, Collapse } from 'antd';
const Panel = Collapse.Panel;

import './index.css'

class MainRight extends React.Component {
	
	render(){
		return (
			<div className="main-box">
				<div className="content-wrap bg-gray">
					<div className="content-layout pl20 pr20">
						<p className="mem-tips f12 mt20 mb20 tc pl100 pr100">车贷管家云风控平台已累计帮助会员监管367890辆汽车资产，并已经构建收入5872条敏感区域数据的地理信息库，89080条事件的风险数据库</p>
						<div className="ind-left fl">
							<div className="mem-top clearfix">
								<div className="fl">
									<div className="mem-info-left fl"><img id="userHeadPic" src="./images/tou_03.png" /></div>
									<div className="per-info">
										<h1 className="per-h1">Hi, <a id="userName" className="links" href="#">ceshihao</a></h1>
										<ul className="per-list">
											<li><span>所属组织:</span><span id="clientname">测试专用111</span></li>
											<li><span>账号角色:</span><span id="rolename">公司领导</span></li>
										</ul>
										<div className="last-time">上一次登录时间:<span id="lastLoginTime">2017-01-09 12:36</span></div>
									</div>
								</div>
								<div className="fr">
									<div className="mem-info-left fl"><img src="./images/moneys.png" /></div>
									<div className="mem-fenkon">
										<h1><span className="list-image"><img src="./images/cir.png" /></span></h1>
										<p id="content1"></p>
										<h1><span className="list-image"><img src="./images/cir.png" /></span><span id="title2"></span></h1>
										<p id="content2"></p>
									</div>
								</div>
							</div>
							<ul className="datas-show clearfix">
								<li>
									<div className="datas-num" id="totalCustomer">0</div>
									<div className="datas-name">历史累计客户</div>
								</li>
								<li>
									<div className="datas-num" id="todayCustomer">0</div>
									<div className="datas-name">今日新增客户</div>
								</li>
								<li>
									<div className="datas-num" id="carCount">1</div>
									<div className="datas-name">现汽车在押</div>
								</li>
								<li>
									<div className="datas-num" id="bindEquipCount">2</div>
									<div className="datas-name">现设备绑定</div>
								</li>
								<li>
									<div className="datas-num" id="unBindEquipCount">0</div>
									<div className="datas-name">现可用设备库存</div>
								</li>
								<li>
									<div className="datas-num" id="simCardCount">0</div>
									<div className="datas-name">现可用流量卡库存</div>
								</li>
							</ul>
							<div className="record-list" style={{height: 280}}>
								<div className="record-tit">客户数据走势</div>
								<div className="ind-chart">
								</div>
							</div>
							<div className="record-list mb20">
								<div className="record-tit">下属组织客户统计</div>
								<div className="nums-show-wrap">
									<ul className="nums-show clearfix" id="subClientTodayTotal">
										<li>  
											<div className="nums-wrap">     
												<div className="big-num">1</div> 
											</div>     
											<p className="nums-name">测试专用111</p>
										</li>
										<li>  
											<div className="nums-wrap">     
												<div className="big-num">0</div> 
											</div>     
										<p className="nums-name">aaa</p>
										</li>
									</ul>
									
									<div className="numPage">
										<a href="/?page=1" className="first previous disabled" data-action="previous">‹</a>
										<a href="/?page=3" className="last next disabled" data-action="next" id="next">›</a>
									</div>
									
								</div>
							</div>
						</div>
						<div className="ind-right fr">
							<div className="record-list remove-top">
								<div className="record-tit">客户数据走势</div>
								<Collapse accordion>
									<Panel header={'测试客户|闽A00000-2停车测试专用111 1234当前状态:GPS定位 上传时间间隔:10'} key="1">
									  <div className="focus-detail">   
											<ul className="clearfix">    
												<li>设备类型:  有线</li>     
												<li>设备型号:  WY200</li>     
												<li>上传时间:  2017年01月09日 07时20分</li>     
												<li>详细地址:  江苏省盐城市大丰市大丰海堤</li>    
											</ul> 
										</div>
									</Panel>
									<Panel header={'测试客户|闽A00000-2停车测试专用111 1234当前状态:GPS定位 上传时间间隔:10'} key="2">
									  <div className="focus-detail">   
											<ul className="clearfix">     
												<li>设备类型:  无线</li>     
												<li>设备型号:  WY900S</li>     
												<li>上传时间:  2017年01月08日 18时01分</li>     
												<li>详细地址:  江苏省盐城市东台市华美路华美村东321米</li>    
											</ul> 
										</div>
									</Panel>
								</Collapse>
							</div>
						</div> 
					</div>
				</div>
			</div>
		)
	}
}
export default MainRight



