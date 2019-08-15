import React, { Component } from 'react'
import FrameWorks from './frameworks.style'
import 'antd/dist/antd.css'

export default class Data extends Component {
	render() {
		const { items } = this.props
		return (
			<FrameWorks className="metaDataBox">
				<div className="dataStructure">Items Data</div>
				<div>
					{
						items.map((value, key) => (
							<div className="dataGroup" key={key}>
								<span className="dataTitle">{value.item}</span>
								<hr />
								<ul>
									{
										value.item_notes.map((val, index) => (
											<li key={index} className="dataContent">{val.title}</li>
										))
									}
								</ul>
							</div>
						))
					}
				</div>
			</FrameWorks>
		)
	}
}