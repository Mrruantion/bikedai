import React, { Component } from 'react'
import { Link } from 'react-router'



import './index.css'
import { Menu, Icon, Modal, Button, Tabs, Table, Badge, Checkbox, Pagination } from 'antd';
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
	constructor(){
		super()
		this.state = {
			collapse: true
		};
		this.onCollapseChange = this.onCollapseChange.bind(this);
		
	}
	onCollapseChange(){
		this.setState ({
			collapse: !this.state.collapse
		})
	}
	render(){
		const collapse = this.state.collapse;
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
					   <div className="history-tit" id="history-tit">
						  <Tabs type="card">
							  <TabPane tab="全部" key="1"></TabPane>
							  <TabPane tab="未解除" key="2"></TabPane>
							  <TabPane tab="已解除" key="3"></TabPane>
						  </Tabs>
					   </div>
					   <div className="tab-cont">
						  
					   </div>       
					   <div className="page-bot">
						  <Pagination simple defaultCurrent={1} total={0} />
					   </div>
				   </div>
				   <div className="fl history-detail">
					   <div className="showWrap">
						   <ul className={collapse? "detail-top showtab": "hide"}>
							   <li><b>设备名称:</b><em></em></li> 
							   <li><b>报警类型</b><em></em></li>
							   <li><b>报警时间</b><em></em></li>
							   <li><b>地点</b><em></em></li>
						   </ul>
						   <div className="la" onClick={this.onCollapseChange}></div>
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
	  W('#qcode').style.display = "block";
  }
  handleMouseLeave(e){
	  W('#qcode').style.display = "none";
  }
  handlelogout() {
	  W('#logout').style.backgroundColor = "#fff";
	  W('#logout').style.color = "#000";
	  W('#logout').nextSibling.style.display = "block";
  }
  handlelogoutLeave(){
	  W('#logout').style.backgroundColor = "#108ee9";
	  W('#logout').style.color = "#fff";
	  W('#logout').nextSibling.style.display = "none";
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