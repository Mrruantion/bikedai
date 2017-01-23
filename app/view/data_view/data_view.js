import React, { Component } from 'react'
import { Button, Input, Radio } from 'antd'
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

import './index.css'

class DataView extends React.Component {
	render(){
		return (
			<div className="main-box">
				<div className="content-wrap">
					<div className="content-layout">
						<div className="data_view">
							<div className="sj-wrap fir clearfix">
								<div className="fl">
									<h1>客户一览<a className="more fr" href="#">详情 》</a></h1>
									<div className="w clearfix">
									   <div className="fl">
										   <Input placeholder="测试专用111" style={{ width: 130}}/>	
										</div>
										<div className="fl ml5">
											<RadioGroup defaultValue="a">
											  <RadioButton value="a">最近六月</RadioButton>
											  <RadioButton value="b">最近一年</RadioButton>
											</RadioGroup>
										</div>
										<Button className="fr">查询</Button>
									</div>
									<div className="tubiao-wrap mt30">
										<div className="tubiao fl">
											<div className="tubiao-count">
												<p className="fir">2</p>
												<p className="sec">客户总数</p>
											</div>
										</div>
										<div className="tuxin fr"></div>
									</div>
								</div>
								<div className="fl">
									<h1>设备一览<a className="more fr" href="#" >详情 》</a></h1>
									<div className="w clearfix">
										<div className="clientChoose2 choose-kh w200 fl ">
											<Input placeholder="测试专用111" style={{ width: 200}}/>		
										</div>
										<Button className="fr">查询</Button>
									</div>
									<div className="tubiao-wrap mt30">
										<div className="tubiao fl">
											<div className="tubiao-count">
												<p className="fir">2</p>
												<p className="sec">设备总数</p>
											</div>
										</div>
										<ul className="sbyl-list fr">
											<li>
												<p className="sbyl-img"><img src="./images/l1.png" /></p>
												<p>有线设备</p>
												<p className="sbyl-num"><em>1</em>/1</p>
											</li>
											<li>
												<p className="sbyl-img"><img src="./images/l2.png" /></p>
												<p>无线设备</p>
												<p className="sbyl-num"><em>1</em>/1</p>
											</li>
											<li>
												<p className="sbyl-img"><img src="./images/l3.png" /></p>
												<p>OBD设备</p>
												<p className="sbyl-num"><em>0</em>/0</p>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


export default DataView