import React, { Component } from 'react'
import FrameWorks from './frameworks.style'
import { Row, Col } from 'antd'
import { connect } from 'react-redux'
import frameActions from '../../redux/frameworks/actions'

import Contents from './practiceContents'
import MetaData from './metaData'
import Items from './practiceItems'

const { setData, getData, getStatus } = frameActions

class Edit extends Component {
	constructor (props) {
		super(props)
		this.state = {
			items: [],
			contents: []
		}
	}
	setItems = (data) => {
		const { items } = this.state
		items.push(data)
		this.setState({items})
	}
	setMetaData = (data) => {
		const { items, contents } = this.state
		const { setData } = this.props
		const result = {
			metadata: data,
			pack_practice_items: items,
			pack_contents: contents
		}
		setData(result)
		this.props.getStatus()
		this.props.router('view')
	}
	setContent = (data) => {
		const { contents } = this.state
		contents.push(data)
		this.setState({contents})
	}
	handleBack = () => {
		this.props.router('view')
	}
	render () {
		const { items } = this.state
		return (
			<FrameWorks>
				<Row>
					<Col span={2}></Col>
					<Col span={10}>
						<Items setItems={this.setItems}/>
					</Col>
					<Col span={10}>
						<Contents items={items} submit={this.setContent} />
					</Col>
					<Col span={2}></Col>
				</Row>
				<Row>
					<Col span={24}>
						<MetaData setMetaData={this.setMetaData} items={this.state.items} contents={this.state.contents} router={this.handleBack} />
					</Col>
				</Row>
			</FrameWorks>
		)
	}
}

export default connect(
  state => ({
    
  }),
  { setData, getData, getStatus }
)(Edit);