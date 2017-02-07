import React, { Component } from 'react'
import { Button, Input, Radio } from 'antd'
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

import Echart from 'echarts/lib/echarts'

require('echarts/lib/chart/line')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

import './index.css'

const chartOption = {
	tooltip: {
		trigger: 'axis'
	},
	
	xAxis: {
        type: 'category',
        boundaryGap: false,
		splitLine: {show: 'true'}, /*分割线 */
		axisTick: {interval: '0',show: 'true'},		/*显示刻度 */
		axisLabel: {interval: '0',show: 'true'}, 		/*显示刻度标签 */
        data: ['2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月']
    },
	yAxis: {
		type: 'value',
		splitLine: {show: 'true'},
	},
	series: [
        {
            name: '数量',
            type:'line',
            data: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1]
        }
    ],
	itemStyle: {
		normal:{
			color: '#108ee9'
		}
	}

};


class DataView extends React.Component {
	constructor(){
		super()
	}
	componentDidMount(){
		var myChart1 = Echart.init(this.refs.chart1);
		myChart1.setOption(chartOption);
	}
	
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
										<div className="tuxin fr">
											 <div className="mycharts"  ref="chart1"></div>
										</div>
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
							<div className="sj-wrap sec clearfix">
								<div className="fl">
									<h1>系统动态</h1>
									<ul className="xtdt-list w mt40" id="system_dynamic">
										<li className="clearfix">
											<a className="xtdt-tit" style={{textDecoration: 'none'}} href="#" title="2016-10-19 17:12:19 测试专用111增加了客户 :测试客户  车牌号：闽A00000  车型：1234">2016-10-19 17:12:19 测试专用111增加了客户 :测试客户  车牌号：闽A00000  车型：1234</a>
											<a className="more small fr" href="#">详情&gt;</a>
										</li>
										<li className="clearfix">
											<a className="xtdt-tit"  style={{textDecoration: 'none'}} href="#" title="2017-01-17 11:47:33 测试专用111增加了客户 :ceshihao  车牌号：闽A00000  车型：地方">2017-01-17 11:47:33 测试专用111增加了客户 :ceshihao  车牌号：闽A00000  车型：地方</a>
											<a className="more small fr" href="#">详情&gt;</a>
										</li>
									</ul>
								</div>
								<div className="fl">
									<h1>报警动态</h1>
									<div className="bjdt-wrap">
										<div className="tubiao fl">
											<div className="tubiao-count on">
												<p className="fir on" id="d7">0</p>
												<p className="sec">
													报警总数
												</p>
											</div>
										</div>
										<div className="bjdt-list fr">
											<table className="fir">
												<tbody>
													<tr>
														<td id="t0" width="40%">
															离线超时报警
														</td>
														<td width="10%">
															<em id="d0">0</em>
														</td>
														<td id="t1" width="40%">
															停车超时报警
														</td>
														<td width="10%">
															<em id="d1">0</em>
														</td>
													</tr>
													<tr>
														<td id="t2">
															进敏感区域报警
														</td>
														<td>
															<em id="d2">0</em>
														</td>
														<td id="t3">
															出行政区域报警
														</td>
														<td>
															<em id="d3">0</em>
														</td>
													</tr>
													<tr>
														<td id="t4">
															敏感区域停车超时报警
														</td>
														<td>
															<em id="d4">0</em>
														</td>
														<td id="t5">
														   未进常用区域超时报警
														</td>
														<td>
															<em id="d5">0</em>
														</td>
													</tr>
													<tr>
														<td id="t6">
															设备功能报警
														</td>
														<td>
															<em id="d6">0</em>
														</td>
														<td id="t7">
															出围栏报警
														</td>
														<td>
															<em id="d7">0</em>
														</td>
							
													</tr>
													<tr>
														<td id="t8">
															有线无线分离报警
														</td>
														<td>
															<em id="d8">0</em>
														</td>
														<td id="t9">
															异动报警
														</td>
														<td>
															<em id="d9">0</em>
														</td>
							
													</tr>
												</tbody>
											</table>
											<table className="sec">
												<tbody>
													<tr>
														<td>
															<img src="./images/icon1@x.png" />
															<em id="p0">0%</em>
														</td>
														<td>
															<img src="./images/icon2@x.png" />
															<em id="p1">0%</em>
														</td>
														<td>
															<img src="./images/icon3@x.png" />
															<em id="p2">0%</em>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
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