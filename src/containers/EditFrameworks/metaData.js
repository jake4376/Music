import React, { Component } from 'react'
import FrameWorks from './frameworks.style'
import { Button, Input, Tooltip, Icon, Row, Col } from 'antd'
import Data from './Data'
import Content from './Content'

export default class MetaData extends Component {
	constructor (props) {
		super(props)
		this.state = {
			name: '',
			creator: '',
			des: '',
			selectData: {}
		}
	}
	componentDidMount() {
		const { selectData } = this.props
		this.setState({selectData})
	}
	handleClick = () => {
		this.props.setMetaData(this.state.selectData)
	}
	onChnage = (val, type) => {
		const { selectData } = this.state
		let changevalue = selectData
		if(type === 'name') {
			changevalue.name = val
		} else if (type === 'creator') {
			changevalue.creator = val
		} else {
			changevalue.other_as_needed = val
		}
		this.setState({selectData: changevalue})
	}
	render () {
		const { items, contents } = this.props
		const { selectData } = this.state
		let creator = selectData.creator
		let name = selectData.name
		let other_as_needed = selectData.other_as_needed

		return (
			<FrameWorks className="metaWrapper">
				<Row>
					<Col span={12} className='container'>
						<span style={{fontSize: '25px', color: '#0000CD'}}>Data Structure</span>
						<Row className="datawrapper">
							<Col span={12}>
								<Data items={items} />
							</Col>
							<Col span={12}>
								<Content content={contents} />
							</Col>
						</Row>
					</Col>
					<Col span={12} className='container'>
						<span className="title">Information</span>
						<Input
							placeholder="Enter your name"
							className="inputbox"
							value = {name}
							onChange={(e) => this.onChnage(e.target.value, 'name')}
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
						/>
						<Input
							placeholder="Enter Creator"
							className="inputbox"
							value = {creator}
							onChange={(e) => this.onChnage(e.target.value, 'creator')}
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
						/>
						<Input
							placeholder="Enter Description"
							className="inputbox"
							prefix={<Icon type="link" style={{ color: 'rgba(0,0,0,.25)' }} />}
							value = {other_as_needed}
							onChange={(e) => this.onChnage(e.target.value, 'des')}
							suffix={
								<Tooltip title="Extra information">
									<Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
								</Tooltip>
							}
						/>
						<div>
							<Button type="primary" className="subSubmit" onClick={this.handleClick}>Submit</Button>
							<Button className="backButton" onClick={this.props.router}><Icon type="left" />Back</Button>
						</div>
					</Col>
				</Row>
			</FrameWorks>
		)
	}
}