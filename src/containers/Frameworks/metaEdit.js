import React, { Component } from 'react'
import './style.css'

export default class MetaEdit extends Component {
	handleChange = (value, type) => {
		const data = this.props.present
		data.metadata[type] = value
		this.props.submit(data)
	}
	render () {
		const { present } = this.props
		return (
			<div>
					<div className="editBox">
						<span className="editTitle">Name: </span>
						<input placeholder={present.metadata.name} className="noneInput" onChange={(e) => this.handleChange(e.target.value, 'name')} />
					</div>
					<div className="editBox">
						<span className="editTitle">Creator: </span>
						<input placeholder={present.metadata.creator} className="noneInput" onChange={(e) => this.handleChange(e.target.value, 'creator')} />
					</div>
					<div className="editBox">
						<span className="editTitle">Description: </span>
						<input placeholder={present.metadata.other_as_needed} className="noneInput" onChange={(e) => this.handleChange(e.target.value, 'other_as_needed')} />
					</div>
				</div>
		)
	}
}