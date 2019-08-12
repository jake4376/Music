import React, { Component } from 'react'
import './style.css'
import { Layout, Row, Col } from 'antd'
import IsoWidgetsWrapper from '../Widgets/widgets-wrapper'
import StickerWidget from '../Widgets/sticker/sticker-widget'
import basicStyle from '../../config/basicStyle'
import Find from './Find'
import Table from './Table'
import NotFound from './NotFound'
import { Icon } from 'antd'

const { Header, Content } = Layout
const practise_columns = [
	{
		title: 'Name',
		value: 'name'
	},
	{
		title: 'Rating',
		value: 'rating'
	},
	{
		title: 'Last Practiced',
		value: 'last_practiced'
	},
	{
		title: 'Today',
		value: 'today'
	},
	{
		title: 'Last Date',
		value: 'last_date'
	},
	{
		title: 'This Month',
		value: 'this_month'
	},
	{
		title: 'Last Month',
		value: 'last_month'
	},
	{
		title: 'Total',
		value: 'total'
	}
]
const playlists_colums = [
	{
		title: 'Name',
		value: 'name'
	},
	{
		title: 'Today',
		value: 'today'
	},
	{
		title: 'Last Date',
		value: 'last_date'
	},
	{
		title: 'This Month',
		value: 'this_month'
	},
	{
		title: 'Last Month',
		value: 'last_month'
	},
	{
		title: 'Total',
		value: 'total'
	}
]

class User extends Component {

	constructor (props) {
		super(props)
		this.state = {
			toggle: 'practise',
			lpage: 0,
			tpage: 0,
			practise: [],
			open: false
		}
	}
	setPage = (name) => {
		this.setState({toggle: name})
	}
	prevpage = (name) => {
		if (name === 'lpage'){
			this.setState({lpage: this.state.lpage-1})
		} else {
			this.setState({tpage: this.state.tpage-1})
		}
	}

	nextpage = (name) => {
		if (name === 'lpage'){
			this.setState({lpage: this.state.lpage+1})
		} else {
			this.setState({tpage: this.state.tpage+1})
		}
	}

	render () {
		const { practise, closeUser, error } = this.props
		const { toggle, lpage, tpage } = this.state
		const { rowStyle, colStyle } = basicStyle
		if (error) {
			return <NotFound back={closeUser}/>
		}
		if ( !practise || !practise.practice ) {
			return <Find />
		}
		const practice_min = Math.round((practise.practice_total%3600)/60);
		const practice_hour = Math.round(practise.practice_total/3600);

		let data
		let column
		let page
		if ( toggle === 'practise' ) {
			data = practise.practice.slice(tpage*10, (tpage+1)*10)
			column = practise_columns
			page=tpage
			
		} else {
			data = practise.playlist.slice(lpage*10, (lpage+1)*10)
			column = playlists_colums
			page=lpage
		}

		return (
			<Layout>
				<Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
					<div className={this.state.toggle==='practise' ? 'header_user1' : 'header_user'} onClick={() => this.setPage('practise')}>Practice</div>
					<div className={this.state.toggle==='practise' ? 'header_user' : 'header_user1'} onClick={() => this.setPage('playiest')}>Practice List</div>
					<div className="header_user flooo" onClick={closeUser}><Icon type="left" />Back</div>
				</Header>
				<Content style={{padding: '0 30px', marginTop: 75}}>
					<Row style={rowStyle} gutter={0} justify="start">
						<Col md={5} sm={12} xs={24}></Col>
						<Col md={7} sm={12} xs={24} style={colStyle}>
							<IsoWidgetsWrapper>
							<StickerWidget
								number={practise.playlist_total}
								text={"Total Practice"}
								icon="ion-android-archive"
								fontColor="#ffffff"
								bgColor="#7ED320"
							/>
							</IsoWidgetsWrapper>
						</Col>
						<Col md={7} sm={12} xs={24} style={colStyle}>
							<IsoWidgetsWrapper>
							<StickerWidget
								number={`${practice_hour}hr ${practice_min}min`}
								text={"Total Practice time"}
								icon="ion-android-time"
								fontColor="#ffffff"
								bgColor="#42A5F6"
							/>
							</IsoWidgetsWrapper>
						</Col>
					</Row>
					<Table data={data} column={column} page={page} prevpage={this.prevpage} nextpage={this.nextpage} />
				</Content>
			</Layout>
		)
	}
}

export default User