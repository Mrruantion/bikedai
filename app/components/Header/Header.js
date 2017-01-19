import React, { Component } from 'react'
import { Link } from 'react-router'

import MainRight from '../../view/main_right/MainRight.js'
import MessageCenter from '../../view/messageCenter/messageCenter.js'
import TrainingCenter from '../../view/trainingCenter/trainingCenter.js'

import './index.css'
import { Menu, Icon, Modal, Button, Tabs, Table, Badge, Checkbox } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;


class TableOne extends React.Component {
	constructor(props) {
		super(props);
		this.columns = [{
			title: 'IMEI/ID',
			dataIndex: 'customer',
			width: '12%',
		}, {
			title: '设备名称',
			dataIndex: 'adddate',
			width: '16%',
		}, {
			title: '客户姓名',
			dataIndex: 'carnumber',
			width: '14%',
		}, {
			title: '所属组织',
			dataIndex: 'cartype',
			width: '20%',
		},{
			title: '接入服务到期时间',
			dataIndex: 'organization',
			width: '20%',
		},{
			title: '到期天数',
			dataIndex: 'loantype',
			width: '14%',
		}];
		
	}
	render(){
		const columns = this.columns;
		return (
			<div>
				<Table columns={columns} />			 
			</div>
		)
	}
}
class TableTwo extends React.Component {
	constructor(props) {
		super(props);
		this.columns = [{
			title: '物联网卡号',
			dataIndex: 'customer',
			width: '16%',
		}, {
			title: '卡商',
			dataIndex: 'adddate',
			width: '10%',
		}, {
			title: '所属组织',
			dataIndex: 'carnumber',
			width: '19%',
		}, {
			title: '套餐到期时间',
			dataIndex: 'cartype',
			width: '20%',
		},{
			title: '到期天数',
			dataIndex: 'organization',
			width: '20%',
		}];
		
	}
	render(){
		const columns = this.columns;
		return (
			<div>
				<Table columns={columns} />			 
			</div>
		)
	}
}
class TableThree extends React.Component {
	constructor(props) {
		super(props);
		this.columns = [{
			title: '车牌号码',
			dataIndex: 'customer',
			width: '16%',
		}, {
			title: '客户姓名',
			dataIndex: 'adddate',
			width: '16%',
		}, {
			title: '所属组织',
			dataIndex: 'carnumber',
			width: '15%',
		}, {
			title: '待解绑拆除数量',
			dataIndex: 'cartype',
			width: '20%',
		},{
			title: '操作',
			dataIndex: 'organization',
			width: '20%',
		}];
		
	}
	render(){
		const columns = this.columns;
		return (
			<div>
				<Table columns={columns} />			 
			</div>
		)
	}
}

class WarmCenter extends React.Component {
	render(){
		return (
			<div className="warmCenter">
				<div className="history-head">
				   <div className="fl"><b id="historyGeneral">0条, 未解除0条</b></div>
				   <div className="fr mr40">
						<Checkbox>开启报警声音</Checkbox>
				   </div>
				</div>
				<div className="history">
				   <div className="history-content fl">
					   <div className="history-tit">
						  
					   </div>
					   <div className="tab-cont">
						  
					   </div>                       
					   <div className="page-bot">
						  
					   </div>
				   </div>
				   <div className="fl history-detail">
					   <div className="showWrap">
						   <ul className="detail-top">
							   <li><b>设备名称:</b><em id="his_detail_name"></em></li> 
							   <li><b>报警类型</b><em id="his_detail_type"></em></li>
							   <li><b>报警时间</b><em id="his_detail_time"></em></li>
							   <li><b>地点</b><em id="his_detail_pos"></em></li>
						   </ul>
						   <div className="la"></div>
					   </div>
					   <div className="mapWrap">
						   
					   </div> 
				   </div>
				</div>
			</div>
		)
	}
	
}

class Header extends React.Component {
  constructor(props) {
	  super(props)
	  this.state = {
		  visible: false,
	  }
	  this.messageClick = this.messageClick.bind(this);
	  this.warmClick = this.warmClick.bind(this);
  }
  /*消息弹出层*/
  messageModal() {
    this.setState({
      visible: true,
    });
  }
  messageClick(e) {
	  console.log('click' ,e);
	  this.setState({
		  visible: false,
	  });
  }
  
  /*预警中心弹出层*/
  warmModal() {
    this.setState({
      warmvisible: true,
    });
  }
  
  warmClick(e) {
	  this.setState({
		  warmvisible: false,
	  });
  }
 
  
  handleMousemove(e){
	  e.stopepropagation
	  const qcode = document.getElementById("qcode");
	  qcode.style.display = "block"
  }
  handleMouseLeave(e){
	  e.stopepropagation
	  const qcode = document.getElementById("qcode");
	  qcode.style.display = "none";
  }
  handlelogout() {
	  const logout = document.getElementById("logout");
	  logout.style.backgroundColor = "#fff";
	  logout.style.color = "#000";
	  logout.nextSibling.style.display = "block";
  }
  handlelogoutLeave(){
	  const logout = document.getElementById("logout");
	  logout.style.backgroundColor = "#108ee9";
	  logout.style.color = "#fff";
	  logout.nextSibling.style.display = "none";
  }
  render() {
    return (
		<div className="header">
			<div className="header-logo"><img src="./logo.png" width="110px" style={{ marginTop: 12}}/></div>
			<div className="header-logo2">专注于汽车金融风控</div>
			<ul className="header-nav">
				<li className="logout" onMouseEnter={this.handlelogout} onMouseLeave={this.handlelogoutLeave}>
					<Link to="/mainRight" style={{ color: "#fff"}} id="logout">ceshihao<Icon type="caret-down" /></Link>
					<a href="#" className="loginout" style={{ display: "none"}}>退出</a>
				</li>
				<li>
					 <Link to="/trainingCenter">培训中心</Link>
				</li>
				<li>
					<Link to="/messageCenter"><Icon type="mail" />公告通知</Link>
					<i className="gg-tips"></i>
				</li>
				<li>
					<a href="javascript:;" onClick={this.warmModal.bind(this)} ><Icon type="notification" />"预警中心</a>
					<Modal 
						width={800}
						height={462}
						className="center"
						visible={this.state.warmvisible}
						  onCancel={this.warmClick}
						  maskClosable={false}
						  footer=""
					>
					  <WarmCenter />
					</Modal>
				</li>
				<li className="message">
					<a href="javascript:;" onClick={this.messageModal.bind(this)}><Icon type="message" />消息</a>
					<Modal 
						width={800}
						maskClosable={false}
						visible={this.state.visible}
						  onCancel={this.messageClick}
						  footer="备注：该消息为GPS设备在车贷管家平台的到期提示信息，请注意关注并及时续费，以免影响设备的正常使用"
					>
					  <Tabs type="card">
						  <TabPane tab="设备接入服务到期信息" key="1"><TableOne /></TabPane>
						  <TabPane tab="物联网卡套餐到期信息" key="2"><TableTwo /></TabPane>
						  <TabPane tab="客户结清设备待解绑拆除信息" key="3"><TableThree /></TabPane>
					  </Tabs>
					</Modal>
				</li>
				<li>
					<Link to="">Access Key</Link>
				</li>
				<li onMouseEnter={this.handleMousemove} onMouseLeave={this.handleMouseLeave}>
					<Link><Icon type="mobile" />手机版</Link>
					<div className="everycode" style={{ display: "none"}} id="qcode">
						<img src="./images/everycode.jpg" alt="二维码" />
						<p>扫码下载手机版<br />隼目车贷管家</p>
					</div>
				</li>
			</ul>
		</div>
    );
  }
}
export default Header