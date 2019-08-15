import React, { Component } from 'react'
import View from './View'
import Edit from '../NewFrameworks'

class Frameworks extends Component {
	constructor(props) {
		super(props)
		this.state = {
			pageload: 'view'
		}
	}

	handlePageLoad = (name) => {
		this.setState({pageload: name})
	}
	render () {
		const { pageload } = this.state
		if (pageload === 'view') {
			return <View router={this.handlePageLoad}/>
		} else if (pageload === 'new') {
			return <Edit router={this.handlePageLoad} />
		}
		return <div>This is the page</div>
	}
}

export default Frameworks