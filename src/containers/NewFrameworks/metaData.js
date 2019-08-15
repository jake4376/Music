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
			des: ''
		}
	}
	handleClick = () => {
		this.props.setMetaData({
			name: this.state.name,
			creator: this.state.creator,
			other_as_needed: this.state.des
		})
	}
	onChnage = (val, type) => {
		if(type === 'name') {
			this.setState({name: val.target.value})
		} else if (type === 'creator') {
			this.setState({creator: val.target.value})
		} else {
			this.setState({des: val.target.value})
		}
	}
	render () {
		const { name, creator, des } = this.state
		const { items, contents } = this.props
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
							onChange={(e) => this.onChnage(e, 'name')}
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
						/>
						<Input
							placeholder="Enter Creator"
							className="inputbox"
							value = {creator}
							onChange={(e) => this.onChnage(e, 'creator')}
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
						/>
						<Input
							placeholder="Enter Description"
							className="inputbox"
							prefix={<Icon type="link" style={{ color: 'rgba(0,0,0,.25)' }} />}
							value = {des}
							onChange={(e) => this.onChnage(e, 'des')}
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