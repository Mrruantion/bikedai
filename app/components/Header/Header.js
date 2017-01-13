import React, { Component } from 'react'
import { Link } from 'react-router'

import LoginUser from '../../view/loginuser/loginUser.js'
import MessageCenter from '../../view/messageCenter/messageCenter.js'
import TrainingCenter from '../../view/trainingCenter/trainingCenter.js'

import './index.css'
import { Menu, Icon, Modal, Button, Tabs, Table } from 'antd';
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

class Header extends React.Component {
  constructor(props) {
	  super(props)
	  this.state = {
		  current: 'mail',
		  visible: false,
	  }
	  this.handleClick = this.handleClick.bind(this);
	  this.handleOk = this.handleOk.bind(this);
  }
  
  showModal() {
    this.setState({
      visible: true,
    });
  }
  
  handleOk() {
    console.log('Clicked OK');
    this.setState({
      visible: false,
    });
  }
  handleClick(e) {
	  console.log('click' ,e);
	  this.setState({
		  current: e.key,
		  visible: false,
	  })
	  
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
	  logout.style.backgroundColor = "#2ca015";
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
					<Link to="#" style={{ color: "#fff"}} id="logout">ceshihao<Icon type="caret-down" /></Link>
					<a href="#" className="loginout" style={{ display: "none"}}>退出</a>
				</li>
				<li>
					 <Link to="/trainingCenter">培训中心</Link>
				</li>
				<li>
					<Link to="/messageCenter"><Icon type="mail" />公告通知</Link>
				</li>
				<li>
					<Link to=""><Icon type="notification" />"预警中心</Link>
				</li>
				<li>
					<a href="#" style={{ color: "#fff"}} onClick={this.showModal.bind(this)}><Icon type="message" />消息</a>
					<Modal 
						width={800}
						visible={this.state.visible}
						  onOk={this.handleOk}
						  onCancel={this.handleClick}
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
					<Link to="" style={{ color: "#fff"}}>Access Key</Link>
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