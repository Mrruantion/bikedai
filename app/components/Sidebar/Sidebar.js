import React, {PropTypes} from 'react'
import { render } from 'react-dom'

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

// 引入Antd的导航组件
import { Menu, Icon, Switch, Breadcrumb, Alert } from 'antd'
const SubMenu = Menu.SubMenu


// 引入主体样式文件
import './index.css'



const Sidebar = React.createClass({
  getInitialState() {
    return {
      collapse: false,
    };
  },
  onCollapseChange() {
    this.setState({
      collapse: !this.state.collapse,
    })
  },
  
  render() {
    const collapse = this.state.collapse;
	const { routes, params, children } = this.props;
    return (
      <div className={collapse ? "layout-aside layout-aside-collapse" : "layout-aside"}>
        <aside className="layout-sider">
          <div className="aside-action" onClick={this.onCollapseChange}>
            {collapse ? <Icon type="menu-unfold" /> : <Icon type="menu-fold" />}
          </div>
          <Menu mode={collapse ? "vertical" : "inline"} theme="dark" defaultSelectedKeys={['user']}>
            <SubMenu key="sub1" title={<span><Icon type="mail" />{!collapse && <span className="nav-text">车辆管理</span>}</span>}>
                <Menu.Item key="1"><Link to="/">增加车辆信息</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/">删除车辆信息</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/">修改车辆信息</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/">查询车辆信息</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="user" title={<span><Icon type="user" />{!collapse && <span className="nav-text">用户管理</span>}</span>}>
                <Menu.Item key="5"><Link to="/">增加用户信息</Link></Menu.Item>
                <Menu.Item key="6"><Link to="/">审核用户信息</Link></Menu.Item>
                <Menu.Item key="7"><Link to="/">删除用户信息</Link></Menu.Item>
                <Menu.Item key="8"><Link to="/">修改用户信息</Link></Menu.Item>
                <Menu.Item key="9"><Link to="/">查询用户信息</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="team" />{!collapse && <span className="nav-text">运营商管理</span>}</span>}>
                <Menu.Item key="10"><Link to="/">添加运营商</Link></Menu.Item>
                <Menu.Item key="11"><Link to="/">删除运营商</Link></Menu.Item>
                <Menu.Item key="12"><Link to="/">修改运营商</Link></Menu.Item>
                <Menu.Item key="13"><Link to="/">承租车辆管理</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </aside>
      </div>
    );
  },
});

export default Sidebar
