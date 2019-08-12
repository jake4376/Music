import React, { Component } from 'react'
import './style.css'
import {Icon} from 'antd'

export default class NotFound extends Component {
	render () {
		return (
			<div className="loading">
				<div>
					<div className="notFoundData">There is no Data</div>
					<div className="backbutton" onClick={this.props.back}>
						<Icon type="left" />
						<span>back</span>
					</div>
				</div>
			</div>
		)
	}
}