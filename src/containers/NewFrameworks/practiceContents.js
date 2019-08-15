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
		}
	}
	onChange = (value, type) => {
		switch (type) {
			case 'select':
				this.setState({id: value})
				break
			case 'timer':
				this.setState({timer: value})
				break
			case 'title':
				this.setState({title: value})
				break
			case 'details':
				this.setState({details: value})
				break
			default:
				this.setState({name: value})
		}
	}
	setListNote = () => {
		const { listNote, title, details } = this.state
		listNote.push({
			title: title,
			details: details
		})
		this.setState({ title: '', details: ''})
		this.setState({noteNumber: this.state.noteNumber+1})
	}
	setListItem = () => {
		const { listItem, id, timer } = this.state
		const temp = parseInt(timer, 10)
		listItem.push ({
			id: id,
			timer: temp
		})
		this.setState({ id: 1, timer: ''})
		this.setState({itemNumber: this.state.itemNumber+1})
	}
	submitData = () => {
		const { name, listNote, listItem } = this.state
		const data = {
			name: name,
			list_notes: listNote,
			list_items: listItem
		}
		this.props.submit(data)
		this.setState({
			name: '',
			listNote: [],
			listItem: [],
			title: '',
			timer: [],
			noteNumber: 1,
			itemNumber: 1,
			details: 1,
		})
		this.setState({number: this.state.number+1})
	}
	render () {
		const { number, noteNumber, itemNumber } = this.state
		const { items } = this.props
		return (
			<FrameWorks className="eachcol">
				<span className="title">Practice Contents</span>
				<span>No. {number}</span>
				<div className="itemBox">
					<Input
						placeholder="Enter Item name"
						className="inputbox"
						prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />}
						value = {this.state.name}
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
								value={this.state.title}
								onChange={(e) => this.onChange(e.target.value, 'title')}
							/>
						</Col>
						<Col span={12} className="contentCol">
							<Input
								placeholder="Enter list details"
								prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />}
								value={this.state.details}
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
								value={this.state.timer}
								onChange={(e) => this.onChange(e.target.value, 'timer')}
							/>
						</div>
						<Button type="primary" className="contentButton" onClick={this.setListItem}>Next<Icon type="right" /></Button>
					</div>
				</div>
				<Button type="primary" className="subSubmit" onClick={this.submitData}>Next<Icon type="right" /></Button>
			</FrameWorks>
		)
	}
}