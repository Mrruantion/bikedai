import React, { Component } from 'react'
import { Button, Icon } from 'antd'

import './index.css'

export default class Position extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			collapse: false
		}
		this.onCollapseChange = this.onCollapseChange.bind(this);
	}
	onCollapseChange() {
		this.setState({
			collapse: !this.state.collapse
		})
	}
	render(){
		const collapse =  this.state.collapse;
		return(
			<div className="positionMap">
				<div className={ !collapse ? "positionHeader" : "positionHeader hlf" }>
				
				</div>
				<div className={ !collapse? "left-direct" : "left-direct lf" } >
					<div className={ !collapse ? "row-btn" : "row-btn on"} onClick={this.onCollapseChange}></div>  
				</div>
				<div className="positionContent"></div>
			</div>
		)
	}

}