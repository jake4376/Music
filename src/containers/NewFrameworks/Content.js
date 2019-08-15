import React, { Component } from 'react'
import FrameWorks from './frameworks.style'
import 'antd/dist/antd.css'

export default class Content extends Component {
	render() {
		const { content } = this.props
		return (
			<FrameWorks className="metaDataBox">
				<div className="dataStructure">Contents Data</div>
				<div>
					{
						content.map((value, key) => (
							<div className="dataGroup" key={key}>
								<span className="dataTitle">{value.name}</span>
								<hr />
								<ul>
									{
										value.list_notes.map((val, index) => (
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