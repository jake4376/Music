import React, { Component } from 'react'
import FrameWorks from './frameworks.style'
import { Input, Icon, Col, Row, Button, Select } from 'antd'

const { Option } = Select

export default class Contents extends Component {
	constructor (props) {
		super(props)
		this.state = {
			number: 1,
			noteNumber: 1,
			itemNumber: 1,
			listItems: [],
			id: 1,
			timer: '',
			title: '',
			details: '',
			name: '',
			listNote: [],
			listItem: [],
			selectData: []
		}
	}
	componentDidMount() {
		const { selectData } = this.props
		this.setState({selectData})
	}
	onChange = (val, type) => {
		const { selectData, number, itemNumber, noteNumber } = this.state
		let changevalue = selectData
		if(number > changevalue.length) {
			const data = {
				name: '',
				list_items: [{
					id: 1,
					timer: '',
				}],
				list_notes: [{
					title: '',
					details: ''
				}]
			}
			changevalue.push(data)
		}
		if (type === 'name') {
			changevalue[number-1].name = val
		} else if (type === 'title') {
			if (changevalue[number-1].list_notes[noteNumber-1].length === 0) {
				changevalue[number-1].list_notes[noteNumber-1].push({
					title: '',
					details: ''
				})
			}
			changevalue[number-1].list_notes[noteNumber-1].title = val
		} else if (type === 'details') {
			if (changevalue[number-1].list_notes[noteNumber-1].length === 0) {
				changevalue[number-1].list_notes[noteNumber-1].push({
					title: '',
					details: ''
				})
			}
			changevalue[number-1].list_notes[noteNumber-1].details = val
		} else if (type === 'select') {
			if (changevalue[number-1].list_items[itemNumber-1].length === 0) {
				changevalue[number-1].list_items[itemNumber-1].push({
					id: 1,
					timer: ''
				})
			}
			changevalue[number-1].list_items[itemNumber-1].id = val
		} else {
			if (changevalue[number-1].list_items[itemNumber-1].length === 0) {
				changevalue[number-1].list_items[itemNumber-1].push({
					id: 1,
					timer: ''
				})
			}
			changevalue[number-1].list_items[itemNumber-1].timer = val
		}
		this.setState({selectData: changevalue})
	}
	setListNote = () => {
		const { number, noteNumber, selectData } = this.state
		let changevalue = selectData
		if (noteNumber >= changevalue[number-1].list_notes.length) {
			const data = {
				title: '',
				details: ''
			}
			changevalue[number-1].list_notes.push(data)
		}
		this.setState({selectData: changevalue})
		this.setState({noteNumber: this.state.noteNumber+1})
	}
	setListItem = () => {
		const { number, itemNumber, selectData } = this.state
		let changevalue = selectData
		if (itemNumber >= changevalue[number-1].list_items.length) {
			const data = {
				id: '',
				timer: ''
			}
			changevalue[number-1].list_items.push(data)
		}
		this.setState({selectData: changevalue})
		this.setState({itemNumber: this.state.itemNumber+1})
	}
	submitData = () => {
		const { number, selectData } = this.state
		let changevalue = selectData
		if(number >= changevalue.length) {
			const data = {
				name: '',
				list_items: [{
					id: 1,
					timer: '',
				}],
				list_notes: [{
					title: '',
					details: ''
				}]
			}
			changevalue.push(data)
		}
		this.setState({selectData: changevalue})
		this.setState({number: this.state.number+1})
		this.setState({noteNumber: 1})
		this.setState({itemNumber: 1})
	}
	handleChangeOk = () => {
		const { selectData } = this.state
		this.props.submit(selectData)
	}
	render () {
		const { number, noteNumber, itemNumber, selectData } = this.state
		const { items } = this.props
		let name = ''
		let title = ''
		let details = ''
		let timer = ''
		if (number <= selectData.length) {
			name = selectData[number-1].name
			if (selectData[number-1].list_items.length >= itemNumber) {
				timer = selectData[number-1].list_items[itemNumber-1].timer
			}
			if (selectData[number-1].list_notes.length >= noteNumber) {
				title = selectData[number-1].list_notes[noteNumber-1].title
				details = selectData[number-1].list_notes[noteNumber-1].details
			}
		}
		return (
			<FrameWorks className="eachcol">
				<span className="title">Practice Contents</span>
				<span>No. {number}</span>
				<div className="itemBox">
					<Input
						placeholder="Enter Item name"
						className="inputbox"
						prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />}
						value = {name}
						onChange={(e) => this.onChange(e.target.value, 'name')}
					/>
				</div>
				<div className="itmesBox">
					<span style={{fontSize: '18px'}}>List notes</span>
					<span style={{marginLeft: '15px'}}>(No. {noteNumber})</span>
					<Row style={{marginTop: '15px'}}>
						<Col span={12}>
							<Input
								placeholder="Enter list title"
								prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />}
								value={title}
								onChange={(e) => this.onChange(e.target.value, 'title')}
							/>
						</Col>
						<Col span={12} className="contentCol">
							<Input
								placeholder="Enter list details"
								prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />}
								value={details}
								onChange={(e) => this.onChange(e.target.value, 'details')}
							/>
						</Col>
					</Row>
					<Button type="primary" className="clickButton" onClick={this.setListNote}>Next<Icon type="right" /></Button>
				</div>
				<div className="itmesBox">
					<span style={{fontSize: '18px'}}>List Items</span>
					<span style={{marginLeft: '15px'}}>(No. {itemNumber})</span>
					<div className="selectContent">
						<div>
							<Select defaultValue='Select Item' onChange={(value) => this.onChange(value, 'select')}>
								{
									(items.length > 0) && items.map((val, index) => (
										<Option key={index} value={val.id}>{val.item}</Option>
									))
								}
							</Select>
						</div>
						<div className="contentCol">
							<Input
								placeholder="Enter Item timer"
								prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />}
								value={timer}
								onChange={(e) => this.onChange(e.target.value, 'timer')}
							/>
						</div>
						<Button type="primary" className="contentButton" onClick={this.setListItem}>Next<Icon type="right" /></Button>
					</div>
				</div>
				<div>
					<Button type="primary" className="subSubmit" onClick={this.submitData}>
						Next
						<Icon type="right" />
					</Button>
					<Button className="ChangeOk" onClick={this.handleChangeOk}>Change</Button>
				</div>
			</FrameWorks>
		)
	}
}