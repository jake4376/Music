import React, { Component } from 'react'
import FrameWorks from './frameworks.style'
import { Input, Tooltip, Icon } from 'antd'

export default class Contents extends Component {
	constructor (props) {
		super(props)
		this.state = {

		}
	}
	render () {
		return (
			<FrameWorks className="eachcol">
				<span className="title">Practice Contents</span>
				<Input
					placeholder="Enter your name"
					className="inputbox"
					prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
				/>
				<Input
					placeholder="Enter Description"
					className="inputbox"
					prefix={<Icon type="link" style={{ color: 'rgba(0,0,0,.25)' }} />}
					suffix={
						<Tooltip title="Extra information">
							<Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
						</Tooltip>
					}
				/>
				<Input
					placeholder="Enter Description"
					className="inputbox"
					prefix={<Icon type="link" style={{ color: 'rgba(0,0,0,.25)' }} />}
					suffix={
						<Tooltip title="Extra information">
							<Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
						</Tooltip>
					}
				/>
				<Input
					placeholder="Enter Description"
					className="inputbox"
					prefix={<Icon type="link" style={{ color: 'rgba(0,0,0,.25)' }} />}
					suffix={
						<Tooltip title="Extra information">
							<Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
						</Tooltip>
					}
				/>
				<Input
					placeholder="Enter Description"
					className="inputbox"
					prefix={<Icon type="link" style={{ color: 'rgba(0,0,0,.25)' }} />}
					suffix={
						<Tooltip title="Extra information">
							<Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
						</Tooltip>
					}
				/>
			</FrameWorks>
		)
	}
}