import React, { Component } from 'react'
import { Button, Icon, DatePicker, Row, Col, Input, Radio, Select } from 'antd'
import moment from 'moment';
const RangePicker = DatePicker.RangePicker;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Option = Select.Option;


export default class PageTwo extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<div className="content-wrap">
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
					 </div>
				</div>
			</div>
		)
	}
}

