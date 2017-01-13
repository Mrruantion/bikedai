import React, { Component } from 'react'
import { Button, Row, Col, Collapse } from 'antd'
const Panel = Collapse.Panel;

/*const text = (<div>
                  <div>答：离线是设备与服务器断开链接了，离线后设备的GPS数据就不能上传到服务器，所以在平台上看到的可能不是设备当前的位置。</div>
                  <p>1、设备关机或断电了无线设备请检查电池是否有电，若没有请及时更换电池。有线设备请检查线路安装是否正常。（确认一下设备供电线路是否有问题，线路是否断电，供电电压、电流是否在设备的额定电压、电流范围内）</p>
                  <p>2、设备无通信信号尽可能将车停在信号条件较好的环境。安装位置不要过于封闭，不要有金属物摭挡，尽量靠上安装。 （在地下车库、隧道、偏远闭塞等无信号的区域，会导致设备离线）</p>
                  <p>3、SIM卡欠费，GPRS服务到期请续费后使用，或直接联系我们。</p>
              </div>)*/

export default class PageOne extends React.Component {
	constructor(props){
		super(props)
		this.data = [{
			key: 1,
			title: '问：如何判定我对设备下发的指令成功了？',
			text: '答：通过网站后台或者手机App对设备发送命令，设备收到信号后修改，并反馈到消息提醒中。或者您可以再次查看设备状态确认是否修改成功。'
		}, {
			key: 2,
			title: '问：设备为什么离线了',
			text: (<div>
                  <div>答：离线是设备与服务器断开链接了，离线后设备的GPS数据就不能上传到服务器，所以在平台上看到的可能不是设备当前的位置。</div>
                  <p>1、设备关机或断电了无线设备请检查电池是否有电，若没有请及时更换电池。有线设备请检查线路安装是否正常。（确认一下设备供电线路是否有问题，线路是否断电，供电电压、电流是否在设备的额定电压、电流范围内）</p>
                  <p>2、设备无通信信号尽可能将车停在信号条件较好的环境。安装位置不要过于封闭，不要有金属物摭挡，尽量靠上安装。 （在地下车库、隧道、偏远闭塞等无信号的区域，会导致设备离线）</p>
                  <p>3、SIM卡欠费，GPRS服务到期请续费后使用，或直接联系我们。</p>
				</div>)
		}, {
			key: 3,
			title: '问：车开走了，为什么还显示在之前的位置？',
			text: (<div>
                  <div>答：离线是设备与服务器断开链接了，离线后设备的GPS数据就不能上传到服务器，所以在平台上看到的可能不是设备当前的位置。</div>
                  <p>1、若您用的是无线设备，非追踪模式下，车辆状态信息只停留在在最后一次上报时间的位置。</p>
                  <p>2、踪模式或有线设备下，因为没有搜索到卫星信号，与设备当前所处环境（地下车库、隧道、偏远闭塞等无信号的区域），信号条件，安装位置（安装的过于封闭，信号一掉不容易再搜索到卫星信号）等因素有关系。如果多次发生该问题，建议调整安装位置。如果在设备露天放置情况下测试，依然时常出现该情况，请联系车贷管家售后。 </p>
				</div>)
		}, {
			key: 4,
			title: '问：新安装的设备，为什么显示在外地？',
			text: (<div>
                  <p>1、如果车装上后在平台显示“静止”状态，但在地图上还显示在别的地方。这是因为设备装上后，车辆一直处于静止状态，当设备在静止时，是不会向服务器传送GPS数据的（节省流量考虑）。所以看到的还是旧的位置数据。解决方法：请将车辆开出去到空旷地区行驶一段路程，车辆有运动时就有最新的定位数据传上服务器，就能看到准确的位置。</p>
                  <p>2、如果车装上后在平台显示“离线”或“未上线”状态。这是因为设备还没有连接上服务器，GPS定位数据没有上传到服务器，看到的是旧的定位数据。详情参考问题“设备为什么离线了？” </p>
				</div>)
		}, {
			key: 5,
			title: '问：设备没有行驶轨迹，行驶时显示“离线”状态，停车时显示“静止”状态？',
			text: '答：如果出现该现象，不用怀疑，请勿必检查一下安装线路是否有问题。电压是否超过设备的最大电压范'	
		}, {
			key: 6,
			title: '问：为什么监控页面看到设备在线，下发指令的时候却提示设备离线？',
			text: (<div>
                  <p>1、首先此时设备肯定已经离线了</p>
				  <p>离线判断：设备未向平台发送数据，即意味着设备离线。</p>
                  <p>2、由于设备有时可能会由于信号问题（比如过隧道），短时中断向平台发送数据， </p>
                  <p>3、故监控页面有做了延时离线处理：只有在设备连续比较长时间（比如25分钟）未发送数据到平台来，才会显示设备离线。 </p>
				</div>)
		}]
	}
	
	render(){
		const data = this.data;
		return(
			<div>
				<div className="topbar"> 
					<div className="topbar-cell">
						<b className="topbar-tit"><span id="title">全部通知</span></b>
					</div>
					<div className="topbar-cell">
						<span className="fr">
							<Button>导出</Button>
						</span>
					</div>
				</div>
				<div style={{ marginTop: 20 }} className="Collapse">
					<Collapse defaultActiveKey={['1']} >
						<Panel header={data[0].title} key="1">
						  <p>{data[0].text}</p>
						</Panel>
						<Panel header={data[1].title} key="2">
						  <p>{data[1].text}</p>
						</Panel>
						<Panel header={data[2].title} key="3">
						  <p>{data[2].text}</p>
						</Panel>
						<Panel header={data[3].title} key="4">
						  <p>{data[3].text}</p>
						</Panel>
						<Panel header={data[4].title} key="5">
						  <p>{data[4].text}</p>
						</Panel>
						<Panel header={data[5].title} key="6">
						  <p>{data[5].text}</p>
						</Panel>
				  </Collapse>
				</div>
			</div>	
		)
	}
}

