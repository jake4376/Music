import React, { Component } from 'react'
import FrameWorks from './frameworks.style'
import { Row, Col } from 'antd'

import Contents from './practiceContents'
import MetaData from './metaData'
import Items from './practiceItems'
import Data from './Data'

class Edit extends Component {
	constructor (props) {
		super(props)
		this.state = {
			data: {},
			items: [],
			metaData: {},
			contents: []
		}
	}
	setItems = (data) => {
		console.log(data)
		this.setState({items: data})
	}
	setMetaData = (data) => {
		this.setState({metaData: data})
	}
	render () {
		console.log(this.state.items)
		return (
			<FrameWorks>
				<Row>
					<Col span={2}></Col>
					<Col span={10}>
						<Items setItems={this.setItems}/>
					</Col>
					<Col span={10}>
						<Contents />
					</Col>
					<Col span={2}></Col>
				</Row>
				<Row>
					<Col span={24}>
						<MetaData setMetaData={this.setMetaData} items={this.state.items} contents={this.state.contents} />
					</Col>
				</Row>
			</FrameWorks>
		)
	}
}

export default Edit