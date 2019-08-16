import React, { Component } from 'react'
import Meta from './metaEdit'
import Content from './editContent'
import Item from './editItem'
import './style.css'

class EditContent extends Component {
	render () {
		const { present, type } = this.props
		if ( type === 'meta') {
			return (
				<Meta present={present} submit={this.props.submit} />
			)
		} else if (type === 'item') {
			return <Item present={present} submit={this.props.submit} />
		}
		return <Content present={present} submit={this.props.submit} />
	}
}

export default EditContent