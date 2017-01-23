import React, { Component } from 'react'
import { Select } from 'antd'
const Option = Select.Option;

export default class AreaThree extends React.Component {
	constructor(){
		super()
	}
	render(){
		return (
			<div>
				<Select>
					<Option value='yami'>yami</Option>
					<Option value='aha'>aha</Option>
				</Select>
			</div>
		)
	}
}