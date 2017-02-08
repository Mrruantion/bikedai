import React, { Component } from 'react'
import { Button, Icon, DatePicker, Row, Col, Input, Radio, Select } from 'antd'
import moment from 'moment';
const RangePicker = DatePicker.RangePicker;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Option = Select.Option;

import Echart from 'echarts/lib/echarts'
require('echarts/lib/chart/line')
require('echarts/lib/chart/bar')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

const chartOption = {
	tooltip : {
        trigger: 'axis'
    },
	legend: {
        data:['逾期','不良','拖车','结清']
    },
    toolbox: {
        show : true,
        showTitle: false,
        iconStyle: {
            normal: {
                borderColor: '#108ee9',
            },
        },
        feature : {
            magicType : {show: true, type: ['line', 'bar']}
        }
    },
	dataZoom: [
        {
            type: 'slider',
            xAxisIndex: [0],
            filterMode: 'filter'
        }
    ],
    xAxis : [
        {
            type : 'category',
			boundaryGap: false,
            splitLine: {show: true},
			axisTick: {interval: '0',show: 'true'},		/*显示刻度 */
			axisLabel: {interval: '0',show: 'true'}, 		/*显示刻度标签 */
            data: ['01/31', '02/01', '02/02', '02/03', '02/04', '02/05', '02/06']
        }
    ],
    yAxis : [
        {
			type : 'value',
        }
    ],
    series : [
        {
            name:'逾期',
            type:'line',
            data:[1,0.1,0.1,1,1,0.2,0.5]
        },
		{
            name:'不良',
            type:'line',
            data:[1,0.3,0.5,1,0.3,0.5,0.5]
        },
		{
            name:'拖车',
            type:'line',
            data:[1,1,0.4,0.7,1,1,0.8]
        },
		{
            name:'结清',
            type:'line',
            data:[1,0.4,0.6,0.1,1,0.9,0.1]
        }
    ]
};

export default class RiskTrend extends React.Component {
	constructor(props){
		super(props)
	}
	componentDidMount(){
		var myChart3 = Echart.init(this.refs.mychart3);
		myChart3.setOption(chartOption);
	}
	render(){
		return(
			<div>
				<div className="content-trace">
					 <div className="content-layout pl20 pr20">
						 <div className="query-bar">
							<Row>
								<div className="analysis">
									<Col span={24}>
										选择时间<RangePicker />
										<RadioGroup  defaultValue="a">
										  <RadioButton value="a">最近一周</RadioButton>
										  <RadioButton value="b">最近一月</RadioButton>
										  <RadioButton value="c">最近三月</RadioButton>
										  <RadioButton value="d">最近半年</RadioButton>
										</RadioGroup>
									</Col>
								</div>
							</Row>
							<Row style={{ marginTop: 20 }}>
								<Col span={7}>
									所属组织 <Input />
								</Col>
								<Col span={5}>
									风险类型 <Select defaultValue="回款" style={{ width: 80 }}>
												<Option value="回款">回款</Option>
												<Option value="数据">数据</Option>
											</Select>
								</Col>
								<Col span={3}>
									<Button type="primary">查询</Button>
								</Col>
							</Row>
						 </div>
						 <hr className="lines dashed mt30 mb30" />
						 <div className="line-chart clearfix">
							<ul className="fl circle-list" id="circle_pay">
								<li>
									<div className="mycircle blue-mark">
										<div className="pie_left">
											<div className="onleft" style={{transition: 'all 1s ease-in-out', transform: 'rotate(180deg)'}}></div>
										</div>
										<div className="pie_right">
											<div className="onright" style={{transition: 'all 1s ease-in-out', transform: 'rotate(180deg)'}}></div>
										</div>
										<div className="mask">
											<span>100</span>%
										</div>
									</div>
									<div className="circle-name">
										<h1>2/2</h1>
										<h2>
											正常
										</h2>
									</div>
								</li>
								<li>
									<div className="mycircle red-mark">
										<div className="pie_left">
											<div className="onleft" style={{transition: 'all 1s ease-in-out', transform: 'rotate(0deg)'}}></div>
										</div>
										<div className="pie_right">
											<div className="onright" style={{transition: 'all 1s ease-in-out', transform: 'rotate(0deg)'}}></div>
										</div>
										<div className="mask">
											<span>0.00</span>%
										</div>
									</div>
									<div className="circle-name">
										<h1>0/2</h1>
										<h2>
											逾期
										</h2>
									</div>
								</li>							
								<li>
									<div className="mycircle purple-mark">
										<div className="pie_left">
											<div className="onleft" style={{transition: 'all 1s ease-in-out', transform: 'rotate(0deg)'}}></div>
										</div>
										<div className="pie_right">
											<div className="onright" style={{transition: 'all 1s ease-in-out', transform: 'rotate(0deg)'}}></div>
										</div>
										<div className="mask">
											<span>0.00</span>%
										</div>
									</div>
									<div className="circle-name">
										<h1>0/2</h1>
										<h2>
											不良
										</h2>
									</div>
								</li>
								<div style={{clear:'both'}}></div>
								<li>
									<div className="mycircle orange-mark">
										<div className="pie_left">
											<div className="onleft" style={{transition: 'all 1s ease-in-out', transform: 'rotate(0deg)'}}></div>
										</div>
										<div className="pie_right">
											<div className="onright" style={{transition: 'all 1s ease-in-out', transform: 'rotate(0deg)'}}></div>
										</div>
										<div className="mask">
											<span>0.00</span>%
										</div>
									</div>
									<div className="circle-name">
										<h1>0/2</h1>
										<h2>
											拖车
										</h2>
									</div>
								</li>
								<li>
									<div className="mycircle skyblue-mark">
										<div className="pie_left">
											<div className="onleft" style={{transition: 'all 1s ease-in-out', transform: 'rotate(0deg)'}}></div>
										</div>
										<div className="pie_right">
											<div className="onright" style={{transition: 'all 1s ease-in-out', transform: 'rotate(0deg)'}}></div>
										</div>
										<div className="mask">
											<span>0.00</span>%
										</div>
									</div>
									<div className="circle-name">
										<h1>0/2</h1>
										<h2>
											结清
										</h2>
									</div>
								</li>
								
							</ul>
							<ul className="fl circle-list" id="circle_trace" style={{display: 'none'}}>
								<li>
									<div className="mycircle blue-mark">
										<div className="pie_left">
											<div className="onleft"></div>
										</div>
										<div className="pie_right">
											<div className="onright"></div>
										</div>
										<div className="mask">
											<span>0</span>%
										</div>
									</div>
									<div className="circle-name">
										<h1>
											0/0
										</h1>
										<h2>
											正常
										</h2>
									</div>
								</li>
								<li>
									<div className="mycircle orange-mark">
										<div className="pie_left">
											<div className="onleft" ></div>
										</div>
										<div className="pie_right">
											<div className="onright" ></div>
										</div>
										<div className="mask">
											<span>0</span>%
										</div>
									</div>
									<div className="circle-name">
										<h1>
											0/0
										</h1>
										<h2>
											可疑
										</h2>
									</div>
								</li>
								<li>
									<div className="mycircle red-mark">
										<div className="pie_left">
											<div className="onleft" ></div>
										</div>
										<div className="pie_right">
											<div className="onright" ></div>
										</div>
										<div className="mask">
											<span>0</span>%
										</div>
									</div>
									<div className="circle-name">
										<h1>
											0/0
										</h1>
										<h2>
											高危
										</h2>
									</div>
								</li>
							</ul>
							<div className="fl mychart3" ref="mychart3"></div>
						</div>
					 </div>
				</div>
			</div>
		)
	}
}

