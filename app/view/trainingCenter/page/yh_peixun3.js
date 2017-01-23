import React, { Component } from 'react'
import { Button } from 'antd'



export default class YhPeixunThree extends React.Component {
	constructor(props){
		super(props)
	}
	
	render(){
		const columns = this.columns;
		return(
			<div>
				<div className="topbar"> 
					<div className="topbar-cell">
						<b className="topbar-tit"><span id="title">手机APP使用说明</span></b>
					</div>
					<div className="topbar-cell">
						<span className="fr">
							<Button>导出</Button>
						</span>
					</div>
				</div>
				<div style={{ marginTop: 20 }} className="dataPick">
					<div className="w mt15 mb20 intru">
                    	<div className="t1">车贷管家移动端(APP)使用说明</div>
                        <div className="tlines"></div>
                        <div className="intru-box">
                            <h1><img src="./images/img/intru1.png" />增加或查看客户信息</h1>
                                <h2>一、增加客户信息、贷款信息、绑定设备</h2>
                                    <h3>（1）添加客户信息、贷款信息。如下图所示，打开“车贷管家APP”－“登录”－“客户”－“添加客户”完成客户信息及贷款
信息的添加，为方便手机操作，红色星号为必填，切记在后续补齐资料。</h3>
                                    <img src="./images/img/uc1.jpg" alt="示例1" />
                                    <h3>（2）为客户绑定设备。选择“绑定GPS”－“选择或搜索设备”－“设置设备报警”完成设备绑定。注意不同设备的功能性。
具体参考《设备使用说明》</h3>	
                                    <img src="./images/img/uc2.jpg" alt="示例2" />
                                <h2>二、查看客户信息</h2>
                                    <h3>（1）在“客户”界面，点击左上角“组织列表”选择公司或通过“搜索”来找到需要查看的客户。</h3>
                                    <img src="./images/img/uc4.jpg" alt="示例4" />
                                    
                            <h1><span><img src="./images/img/intru2.png" />车辆监控、查看报警消息</span></h1>
                                <h2>一、车辆监管</h2>
                                    <h3>（1）查看车辆：如下图所示，在监控界面选择“组织结构”选择需要监控的公司及车辆。在地图上查看车辆的信息及状态。</h3>
                                    <img src="./images/img/uc5.jpg" alt="示例5" />
                                    <h3>（2）编辑车辆分组：长按组“编辑”分组，长按分组来“移动分组”点击“添加组”来新增分组。通过“关注”来查看车辆的
“正常”“可疑”“高危”等状态。</h3>
                                    <img src="./images/img/uc6.jpg" alt="示例6" />
                                    <h3>（3）查看并操作车辆信息。</h3>
                                    <ul>
                                        <li>轨迹：查看车辆过去时间段行驶轨迹</li>
                                    </ul>
                                    <img src="./images/img/uc7.jpg" alt="示例7" />
                                    <ul>
                                        <li>命令：修改GPS设置</li>
                                    </ul>
                                    <img src="./images/img/uc8.jpg" alt="示例8" />
                                    <ul>
                                        <li>导航：查看“我的位置”到“目标车辆”的路程</li>
                                        <li>追踪：追踪该车辆在接下来的行程路线</li>
                                    </ul>
                                    <img src="./images/img/uc9.jpg" alt="示例9" />
                                    <ul>
                                        <li>信息：查看及修改客户的信息</li>
                                    </ul>
                                    <img src="./images/img/uc10.jpg" alt="示例10" />
                                <h2>二、查看报警消息</h2>
                                	<img src="./images/img/uc11.jpg" alt="示例11" />
                                    
                            </div>
                    </div>
				</div>
			</div>	
		)
	}
}

