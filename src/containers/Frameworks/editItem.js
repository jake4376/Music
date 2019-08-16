import React, { Component } from 'react'
import './style.css'

export default class EditItem extends Component {
	render () {
		const { present } = this.props
		return (
			<div className="modalboxsize">
				{
					present.pack_practice_items.map((data, index) => (
						<div key={index}>
							<div className="editBox">
								<span className="editTitle">Item: </span>
								<input placeholder={data.item} className="noneInput" onChange={(e) => this.handleChange(e.target.value, 'item')} />
							</div>
							<span>List Notes: </span>
							{
								data.item_notes.map((val, key) => (
									<div key={key} className="modalsubContent">
										<div className="editBox">
											<span className="editTitle">Title: </span>
											<input placeholder={val.title} className="noneInput" onChange={(e) => this.handleChange(e.target.value, 'name')} />
										</div>
										<div className="editBox">
											<span className="editTitle">Details: </span>
											<input placeholder={val.details} className="noneInput" onChange={(e) => this.handleChange(e.target.value, 'name')} />
										</div>
									</div>
									
								))
							}
						</div>
					))
				}
			</div>
		)
	}
}