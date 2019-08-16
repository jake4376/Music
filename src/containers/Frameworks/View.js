import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout, Modal, Row, Col, Button } from 'antd'

import Table from '../UserTable/Table'
import Find from '../UserTable/Find'
import './style.css'

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
			page: 0,
			visible: false,
			present: {},
			mid: {},
			name: '',
			editvisible: false,
			oldData: ''
		}
	}

	shouldComponentUpdate (nextProps, nextState) {
    if (nextProps === this.props && nextState === this.state) {
      return false
    } else {
      return true
    }
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
		let result = JSON.parse(data.data)
		this.setState({oldData: data.data})
		result.metadata.id = data.id
		result.metadata.data = data.data
		this.setState({present: result})
		this.showModal()
	}
	showModal = () => {
    this.setState({
      visible: true,
    })
  }

  handleOk = e => {
		const { oldData, present } = this.state
    this.setState({
      visible: false,
		})
		const metadata = {
			name: present.metadata.name,
			creator: present.metadata.creator,
			other_as_needed: present.metadata.other_as_needed
		}
		const newData = {
			metadata: metadata,
			pack_practice_items: present.pack_practice_items,
			pack_contents: present.pack_contents
		}
		const string = JSON.stringify(newData)
		if (string !== oldData) {
			const change = {
				present: present,
				string: string
			}
			this.props.change(change)
		}
  }

  handleCancel = e => {
    this.setState({
      visible: false,
    });
	}
	editData = () => {
		this.setState({
      visible: false,
		})
		this.props.router('edit', this.state.present)
	}
	
	handleChange = (editValue) => {
		this.setState({present: editValue})
	}
	handleDelete = () => {
		const { present } = this.state
		this.props.delete(present.metadata.id)
		this.setState({
      visible: false,
    });
	}
	render() {
		const { page, present } = this.state
		const { frame } = this.props
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
					title="View Frameworks"
					visible={this.state.visible}			
					className="modal_ContentSize"
					footer={[
            <Button key="Delete" onClick={this.handleDelete} type="danger">
              Delete
            </Button>,
            <Button key="submit" type="primary" onClick={this.editData}>
              Edit
						</Button>,
						<Button key="Return" onClick={this.handleCancel}>
							Return
						</Button>,
          ]}
				>
					{
						(!!present.metadata) && (<Row>
							<Col span={8} className="mainCol">
								<div className="presentTitle">MetaData</div>
								<div className="presentContent"><span>Name: </span><span>{present.metadata.name}</span></div>
								<div className="presentContent"><span>Creator: </span><span>{present.metadata.creator}</span></div>
								<div className="presentContent"><span>Other_as_needed: </span><span>{present.metadata.other_as_needed}</span></div>
							</Col>
							<Col span={8} className="mainCol">
								<div className="presentTitle">Practice Items</div>
								{
									present.pack_practice_items.map((val, index) => (
										<div key={index} className="present1Content">
											<div><span>Item: </span><span>{val.item}</span></div>
											<div className="presentSubContent">
												<span>list_notes: </span>
												<div>
													{
														val.item_notes.map((value, key) => (
															<div key={key} style={{marginLeft: '5px'}}>
																<div><span>Title: </span><span>{value.title}</span></div>
																<div><span>Details: </span><span>{value.details}</span></div>
															</div>
														))
													}
												</div>
											</div>
										</div>
									))
								}
							</Col>
							<Col span={8} className="mainCol">
								<div className="presentTitle">Practice Contents</div>
								{
									present.pack_contents.map((val, index) => (
										<div key={index} className="present1Content">
											<div><span>Name: </span><span>{val.name}</span></div>
											<div className="presentSubContent">
												<span>List Items: </span>
												{
													val.list_items.map((value, key) => (
														<div key={key} style={{marginLeft: '5px'}}>
															<div><span>ID: </span><span>{value.id}</span></div>
															<div><span>Timer: </span><span>{value.timer}</span></div>
														</div>
													))
												}
											</div>
											<div className="presentSubContent">
												<span>List Notes: </span>
												{
													val.list_notes.map((value, key) => (
														<div key={key} style={{marginLeft: '5px'}}>
															<div><span>Title: </span><span>{value.title}</span></div>
															<div><span>Details: </span><span>{value.details}</span></div>
														</div>
													))
												}
											</div>
										</div>
									))
								}
							</Col>
						</Row>)
					}
				</Modal>
			</Layout>
		)
	}
}

export default connect(
  state => ({
		status: state.Frame.get('status')
  }),
  { }
)(View);