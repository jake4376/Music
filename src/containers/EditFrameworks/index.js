import React, { Component } from 'react'
import FrameWorks from './frameworks.style'
import { Row, Col } from 'antd'
import { connect } from 'react-redux'
import frameActions from '../../redux/frameworks/actions'

import Contents from './practiceContents'
import MetaData from './metaData'
import Items from './practiceItems'

const { setData, getData, getStatus, upDate } = frameActions

class Edit extends Component {
	constructor (props) {
		super(props)
		this.state = {
			items: [],
			contents: [],
			selectData: {}
		}
	}
	componentDidMount() {
		const { selectData } = this.props
		this.setState({items : selectData.pack_practice_items})
		this.setState({contents : selectData.pack_contents})
	}
	setItems = (data) => {
		this.setState({items: data})
	}
	setMetaData = (data) => {
		const { items, contents } = this.state
		const change = {
			name: data.name,
			creator: data.creator,
			id: data.id,
		}
		const real = {
			name: data.name,
			creator: data.creator,
			other_as_needed: data.other_as_needed
		}
		const result = {
			metadata: real,
			pack_practice_items: items,
			pack_contents: contents
		}
		const temp = {
			metadata: change,
			pack_practice_items: items,
			pack_contents: contents
		}
		let string = JSON.stringify(result)
		if (string !== data.data) {
			this.props.upDate({
				present: temp,
				string: string
			})
			this.props.getStatus()
		}
		this.props.router('view')
	}
	setContent = (data) => {
		this.setState({contents: data})
	}
	handleBack = () => {
		this.props.router('view')
	}
	render () {
		const { selectData } = this.props
		return (
			<FrameWorks>
				<Row>
					<Col span={2}></Col>
					<Col span={10}>
						<Items setItems={this.setItems} selectData={selectData.pack_practice_items} />
					</Col>
					<Col span={10}>
						<Contents items={this.state.items} submit={this.setContent} selectData={selectData.pack_contents} />
					</Col>
					<Col span={2}></Col>
				</Row>
				<Row>
					<Col span={24}>
						<MetaData setMetaData={this.setMetaData} items={this.state.items} contents={this.state.contents} router={this.handleBack} selectData={selectData.metadata} />
					</Col>
				</Row>
			</FrameWorks>
		)
	}
}

export default connect(
  state => ({
    
  }),
  { setData, getData, getStatus, upDate }
)(Edit);