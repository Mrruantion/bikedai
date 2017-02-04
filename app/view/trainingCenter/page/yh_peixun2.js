import React, { Component } from 'react'
import { Button, Row, Col } from 'antd'



export default class YhPeixunTwo extends React.Component {
	constructor(props){
		super(props)
	}
	
	render(){
		const columns = this.columns;
		return(
			<div>
				<div className="topbar"> 
					<div className="topbar-cell">
						<b className="topbar-tit"><span id="title">WEB版使用说明</span></b>
					</div>
				</div>
				<div style={{ marginTop: 20 }}>
					<div className="w mt15 mb20 intru">
                    	<div className="t1">车贷管家云端版(WEB)使用说明</div>
                        <div className="intru-box">
                            <div className="h_wrap"><h1><img src="./images/img/intru1.png" />建立公司组织、角色、用户架构</h1></div>
                                <h2>一、建立公司组织架构</h2>
                                    <h3>（1）如下图所示，打开车贷管家官网，在左边导航找到“用户中心”，选择“账户管理”项，再点击“组织管理”，在组织管理
            界面找到“新增”建立总公司与分公司的框架。</h3>
                                    <img src="./images/img/in1.jpg" alt="示例1" />
                                    <h3>（2）如下图所示，在“新增”组织界面添加总公司。</h3>	
                                    <img src="./images/img/in2.jpg" alt="示例2" />
                                    <h3>（3）在“新增”组织界面继续添加分公司，在上级组织栏选择所新增的总公司。</h3>
                                    <h3>（4）组织框架请注意如下项。</h3>
                                    <ul>
                                        <li>上级组织十分重要，请填写好直系上级，方便之后管理。</li>
                                        <li>上级组织能对下级组织进行操作。</li>
                                    </ul>
                                <h2>二、建立角色并为角色授权</h2>
                                    <h3>（1）在“账户管理”找到“角色管理”界面的新增（图一）建立公司角色（图二）。如建立一个角色“风控专员”选择所属角色组里的“普通管理员”，这样“风控专员”就可以以普通管理员的身份进入系统进行查看与管理了。</h3>
                                    <img src="./images/img/in3.jpg" alt="示例3" />
                                    <img src="./images/img/in4.jpg" alt="示例4" />
                                    <h3>（2）为新增的角色授权，不同的公司角色要对应设置不同的授权级别和类型。这样就可以管理该角色能在系统里能查看或操作哪些内容了。如下图，可以授权某角色对“风控服务”“数据中心”“用户中心”模块是否可以查看与操作。</h3>
                                    <img src="./images/img/in5.jpg" alt="示例5" />
                                <h2>三、建立用户并为用户授权</h2>
                                <h3>（1）在“账户管理”界面找到“用户管理”界面的“新增”，建立公司内部管理人员。建立的用户就可以通过用户名及密码进行登录查看与操作了。注意选择角色，不同的角色可以对应不用的模块查看与操作。</h3>
                                <img src="./images/img/in6.jpg" alt="示例6" />
                                <img src="./images/img/in7.jpg" alt="示例7" />
                            <div className="h_wrap"><h1><span><img src="./images/img/intru2.png" />建立设备、客户数据</span></h1></div>
                                <h2>一、录入设备信息</h2>
                                    <h3>（1）请联系车贷管家工作人员进行GPS设备和物联网卡的录入。</h3>
                                    <h3>（2）一对一绑定流量卡。一台设备对应绑定一张流量卡，并将绑定好的流量卡插入该设备，若流量卡与设备有变更，需要重新绑定。在“备管理-我的设备-修改”中，输入流量卡号卡绑定对应流量卡，空白则设备不绑定流量卡。正确绑定了设备和物联网卡后即可安装在车辆上。</h3>
                                    <img src="./images/img/in8.jpg" alt="示例8" />
                                    <img src="./images/img/in9.jpg" alt="示例9" />
                                    <img src="./images/img/in10.jpg" alt="示例10" />
                                <h2>二、录入客户信息、贷款信息</h2>
                                    <h3>（1）在“数据中心”，选择“客户管理”界面的“新增”录入客户信息及贷款信息。</h3>
                                    <h3>（2）录入客户请注意如下项。</h3>
                                    <img src="./images/img/in11.jpg" alt="示例11" />
                                    <img src="./images/img/in12.jpg" alt="示例12" />
                                    <img src="./images/img/in13.jpg" alt="示例13" />
                                    
                                <h2>三、绑定客户与设备</h2>
                                    <h3>（1）在“客户信息”界面绑定已录入好的设备(选择录入好的设备－设置设备报警）。</h3>
                                    <img src="./images/img/in14.jpg" alt="示例14" />
                                    <h3>（2）把绑定好的设备安装到需要监控的客户汽车里就可以随时监控该车辆了。</h3>
                             <div className="h_wrap"><h1><span><img src="./images/img/intru3.png" />监控车辆、查看报表</span></h1></div>
                                <h2>一、监控车辆</h2>
                                    <h3>（1）在左边导航找到“风控服务”，选择“位置跟踪”，在侧边组织列表里选择并查看需要监控车辆。在地图上点击具体车辆，对车辆进行“轨迹回放”“资料修改”“实时跟踪”“指令下发”等操作。</h3>
                                    <img src="./images/img/in15.jpg" alt="示例15" />
                                    <h3>（2）在组织列表栏还可以通过“搜索”“关注”的方式对车辆进行“正常”“可疑”“高危”状态的监管。</h3>
                                <h2>二、查看报表</h2>
                                    <h3>（1）在左边导航找到“风控服务”，选择“报表统计”快速排查车辆危险信息。</h3>
                                    <img src="./images/img/in16.jpg" alt="示例16" />
                            </div>
                    </div>
				</div>
			</div>	
		)
	}
}

