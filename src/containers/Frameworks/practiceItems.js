import React, { Component } from 'react'
import FrameWorks from './frameworks.style'
import { Button, Input, Tooltip, Icon } from 'antd'

export default class Items extends Component {
	constructor (props) {
		super(props)
		this.state = {
			number: 1,
			subNumber: 1,
			title: '',
			details: '',
			name: '',
			data: [],
			item: {
				id: 1,
				item: '',
				item_notes: []
			}
		}
	}
	onChnage = (val, type) => {
		if(type === 'title') {
			this.setState({title: val.target.value})
		} else if (type === 'details') {
			this.setState({details: val.target.value})
		} else {
			this.setState({name: val.target.value})
		}
	}
	subHandleClick = () => {
		const { item, title, details } = this.state
		item.item_notes.push({
			title: title,
			details: details
		})
		this.setState({item})
		this.setState({title: ''})
		this.setState({details: ''})
		this.setState({subNumber: item.item_notes.length+1})
	}
	handleClick = () => {
		const { data, item, name } = this.state
		item.item = name
		item.id = this.state.number
		data.push(item)
		this.setState({ data })
		this.setState({ name: ''})
		this.setState({number: data.length+1})
		this.props.setItems(data)
	}
	render () {
		const { number, subNumber, title, name, details } = this.state
		return (
			<FrameWorks className="eachcol">
				<span className="title">Practice Items</span>
				<span>No. {number}</span>
				<div className="itemBox">
					<Input
						placeholder="Enter Item name"
						className="inputbox"
						prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
						value = {name}
						onChange={(e) => this.onChnage(e, 'name')}
					/>
				</div>
				<div className="itmesBox">
					<span>No. { subNumber }</span>
					<Input
						placeholder="Enter Item title"
						className="inputbox"
						prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
						value={title}
						onChange={(e) => this.onChnage(e, 'title')}
					/>
					<Input
						placeholder="Enter Item details"
						className="inputbox"
						prefix={<Icon type="link" style={{ color: 'rgba(0,0,0,.25)' }} />}
						onChange={(e) => this.onChnage(e, 'details')}
						value={details}
						suffix={
							<Tooltip title="Extra information">
								<Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
							</Tooltip>
						}
					/>
					<Button type="primary" className="clickButton" onClick={this.subHandleClick}>
						Next
						<Icon type="right" />
					</Button>
				</div>
				<Button type="primary" className="subSubmit" onClick={this.handleClick}>
					Next
					<Icon type="right" />
				</Button>
			</FrameWorks>
		)
	}
}