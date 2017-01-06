import React, { Component } from 'react'
import { Link } from 'react-router'

import './index.css'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class Header extends React.Component {
  constructor(props) {
	  super(props)
	  this.state = {
		  current: 'mail',
	  }
	  this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
	  console.log('click' ,e);
	  this.setState({
		  current: e.key,
	  })
	  
  }
  render() {
    return (
		<div style={{ backgroundColor: "#34ab1c"}}>
			<div className="header-logo"><img src="./logo.png" width="110px" style={{ marginTop: 12}}/></div>
			<div className="header-logo2">专注于汽车金融风控</div>
			<Menu 
				mode="horizontal"
				style={{ width: 75, float: "right",  height:50}}
			>
				<SubMenu key="sub1" title="ceshihao">
					<Menu.Item key="1">退出</Menu.Item>
				</SubMenu>
				    </Menu>
			<ul className="header-nav">
				<li>
					 <Link to="" style={{ color: "#fff"}}>培训中心</Link>
				</li>
				<li>
					<Link to="" style={{ color: "#fff"}}><Icon type="mail" />公告通知</Link>
				</li>
				<li>
					<Link to="" style={{ color: "#fff"}}><Icon type="notification" />"预警中心</Link>
				</li>
				<li>
					<Link to="" style={{ color: "#fff"}}><Icon type="message" />消息</Link>
				</li>
				<li>
					<Link to="" style={{ color: "#fff"}}>Access Key</Link>
				</li>
				<li>
					<Link to="" style={{ color: "#fff"}}><Icon type="mobile" />手机版</Link>
				</li>
			</ul>
		</div>
    );
  }
}
export default Header