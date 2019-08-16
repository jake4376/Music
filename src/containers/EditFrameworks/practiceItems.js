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
			},
			selectData: []
		}
	}
	componentDidMount() {
		const {selectData} = this.props
		this.setState({selectData})
	}
	onChnage = (val, type) => {
		const { selectData, number, subNumber } = this.state
		let changevalue = selectData
		if ( number > changevalue.length) {
			const data = {
				id: 1,
				item: '',
				item_notes: [{
					title: '',
					details: ''
				}]
			}
			changevalue.push(data)
		}
		if (type === 'name') {
			changevalue[number-1].item = val
			changevalue[number-1].id = number
		} else if (type === 'title') {
			changevalue[number-1].item_notes[subNumber-1].title = val
		} else {
			changevalue[number-1].item_notes[subNumber-1].details = val
		}
		this.setState({selectData: changevalue})
	}
	subHandleClick = () => {
		const { number, subNumber, selectData } = this.state
		let changevalue = selectData
		if (subNumber >= changevalue[number-1].item_notes.length) {
			const data = {
				title: '',
				details: ''
			}
			changevalue[number-1].item_notes.push(data)
		}
		this.setState({selectData: changevalue})
		this.setState({subNumber: this.state.subNumber+1})
	}
	handleClick = () => {
		const { number, selectData } = this.state
		let changevalue = selectData
		if ( number >= changevalue.length) {
			const data = {
				id: 1,
				item: '',
				item_notes: [{
					title: '',
					details: ''
				}]
			}
			changevalue.push(data)
		}
		this.setState({number: this.state.number+1})
		this.setState({subNumber: 1})
		this.setState({selectData: changevalue})
	}
	handleChangeOk = () => {
		const { selectData } = this.state
		this.props.setItems(selectData)
	}
	render () {
		let { number, subNumber, selectData } = this.state
		let name = ''
		let title = ''
		let details = ''
		if (number <= selectData.length) {
			name = selectData[number-1].item
			if (selectData[number-1].item_notes.length >= subNumber) {
				title = selectData[number-1].item_notes[subNumber-1].title
				details = selectData[number-1].item_notes[subNumber-1].details
			}
		}
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
						onChange={(e) => this.onChnage(e.target.value, 'name')}
					/>
				</div>
				<div className="itmesBox">
					<span>No. { subNumber }</span>
					<Input
						placeholder="Enter Item title"
						className="inputbox"
						prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />}
						value={title}
						onChange={(e) => this.onChnage(e.target.value, 'title')}
					/>
					<Input
						placeholder="Enter Item details"
						className="inputbox"
						prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />}
						onChange={(e) => this.onChnage(e.target.value, 'details')}
						value={details}
						suffix={
							<Tooltip title="Extra information">
								<Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
							</Tooltip>
						}
					/>
					<Button type="primary" className="clickButton" onClick={() => this.subHandleClick()}>
						Next
						<Icon type="right" />
					</Button>
				</div>
				<div>
					<Button type="primary" className="subSubmit" onClick={this.handleClick}>
						Next
						<Icon type="right" />
					</Button>
					<Button className="ChangeOk" onClick={this.handleChangeOk}>Change</Button>
				</div>
			</FrameWorks>
		)
	}
}