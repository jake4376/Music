import React, { Component } from 'react'
import { connect } from 'react-redux'
import frameActions from '../../redux/frameworks/actions'
import { Layout, Modal } from 'antd'

import Table from '../UserTable/Table'
import Find from '../UserTable/Find'
import './style.css'

const { getData } = frameActions;

const column = [
	{
		title: 'Name',
		value: 'name'
	},
	{
		title: 'Creator Name',
		value: 'creator'
	},
	{
		title: 'File URL',
		value: 'url'
	},
]

class View extends Component {
	constructor () {
		super()
		this.state = {
			frame: [],
			page: 0,
			visible: false,
			data: {}
		}
	}

	componentWillMount() {
		this.props.getData();
	}

	shouldComponentUpdate (nextProps, nextState) {
    if (nextProps === this.props && nextState === this.state) {
      return false
    } else {
      return true
    }
	}
	
	componentDidMount() {
		const { frame } = this.props
		this.setState({frame})
	}

	prevpage = () => {
		this.setState({page: this.state.page-1})
	}

	nextpage = () => {
		this.setState({page: this.state.page+1})
	}
	handleClick = () => {
		this.props.router('new')
	}
	handleEditData = (data) => {
		fetch(data.url, {mode: 'no-cors'}).then(response => response.json()).then(res => {
			console.log(res)
		})
		this.setState(data)
		this.showModal()
	}
	showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
	render() {
		const { frame, page } = this.state
		if (frame.length === 0) {
			return <Find />
		}
		let data = frame.slice(page*5, (page+1)*5)
		return (
			<Layout>
				<div>
					<button className="newRouterButton" onClick={this.handleClick}>New</button>
				</div>
				<div style={{padding: '0 30px', marginTop: '-20px'}}>
					<Table data={data} column={column} page={page} prevpage={this.prevpage} nextpage={this.nextpage} name={'frame'} editData={this.handleEditData} />
				</div>
				<Modal
					title="Edit Frameworks"
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					<p>fjeljfaljfelaf</p>
					<p>feaojfleajflaejflejfl</p>
				</Modal>
			</Layout>
		)
	}
}

export default connect(
  state => ({
		frame: state.Frame.get('frame'),
		status: state.Frame.get('status')
  }),
  { getData }
)(View);