import React, { Component } from 'react'
import View from './View'
import { connect } from 'react-redux'
import New from '../NewFrameworks'
import Edit from '../EditFrameworks'
import frameActions from '../../redux/frameworks/actions'
const { getData, upDate, onDelete, getStatus } = frameActions

class Frameworks extends Component {
	constructor(props) {
		super(props)
		this.state = {
			pageload: 'view',
			frame: [],
			selectData: {}
		}
	}
	componentWillMount() {
		this.props.getData()
	}
	shouldComponentUpdate (nextProps, nextState) {
    if (nextProps === this.props && nextState === this.state) {
      return false
    } else {
      return true
    }
	}
	handlePageLoad = (name, selectData) => {
		this.setState({pageload: name})
		if (name === 'edit') {
			this.setState({selectData})
		}
	}
	handleUpdate = (change) => {
		this.props.upDate(change)
		this.props.getStatus()
	}
	handleDelete = (id) => {
		this.props.onDelete(id)
		this.props.getStatus()
	}
	render () {
		let { pageload } = this.state
		const { frame, status } = this.props
		if (!status) {
			this.props.getData()
		}

		if (pageload === 'view') {
			return <View router={this.handlePageLoad} frame={frame} delete={this.handleDelete}/>
		} else if (pageload === 'new') {
			return <New router={this.handlePageLoad} />
		} else if (pageload === 'edit') {
			return <Edit router={this.handlePageLoad} selectData={this.state.selectData} />
		}
		return <div>This is the page</div>
	}
}

export default connect(
  state => ({
		frame: state.Frame.get('frame'),
		status: state.Frame.get('status')
  }),
  { getData, upDate, onDelete, getStatus }
)(Frameworks);