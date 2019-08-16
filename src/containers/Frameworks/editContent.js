import React, { Component } from 'react'
import './style.css'

export default class EditContent extends Component {
	render () {
		const { present } = this.props
		return (
			<div className="modalboxsize">
				{
					present.pack_contents.map((data, index) => (
						<div key={index}>
							<div className="editBox">
								<span className="editTitle">Name: </span>
								<input placeholder={data.name} className="noneInput" onChange={(e) => this.handleChange(e.target.value, 'item')} />
							</div>
							<div>List Items: </div>
							{
								data.list_items.map((val, key) => (
									<div key={key} className="modalsubContent">
										<div className="editBox">
											<span className="editTitle">ID: </span>
											<input placeholder={val.id} className="noneInput" onChange={(e) => this.handleChange(e.target.value, 'name')} />
										</div>
										<div className="editBox">
											<span className="editTitle">Timer: </span>
											<input placeholder={val.timer} className="noneInput" onChange={(e) => this.handleChange(e.target.value, 'name')} />
										</div>
									</div>
									
								))
							}
							<div>List Notes: </div>
							{
								data.list_items.map((val, key) => (
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