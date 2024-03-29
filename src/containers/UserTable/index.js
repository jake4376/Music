import React from 'react';
import { connect } from 'react-redux'
import './style.css'
import { Icon } from 'antd'
import userActions from '../../redux/users/actions'
import Find from './Find'
import User from './User'

const { getoneuser, pagechange, getpractise, requestPractise, preSuccess } =userActions;

class UserTable extends React.Component {
  
  constructor () {
    super();
    this.state = {
      searchText: "",
      pagenumber: 1,
      searchstart: false,
      show: false,
      oldEmail: '',
      practise: []
    };
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps === this.props && nextState === this.state) {
      return false
    } else {
      return true
    }
  }

  search = () => {
    this.setState({searchstart: true})
    this.props.getoneuser(this.state.searchText)
  }

  calculate = (second) => {
    const fulldate = new Date(second*1000);
    const Month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = fulldate.getDate();
    const month = fulldate.getMonth();
    const year = fulldate.getFullYear();
    return Month[month] + " " + date + " " + year;
  }
  change = (e) => {
    this.setState({searchText: e.target.value})
    this.setState({searchstart: false})
  }
  prevpage = (changed) =>(e) => {
    this.props.pagechange(changed, 'prev')
    this.setState({pagenumber: this.state.pagenumber-1})

  }
  nextpage = (changed) => (e) => {
    this.props.pagechange(changed, 'next')
    this.setState({pagenumber: this.state.pagenumber+1})
  }

  showUser = (email) => {
    const { oldEmail } = this.state
    if ( oldEmail === email) {
      this.setState({ show: true})
      return
    } else {
      this.props.requestPractise()
      this.props.getpractise(email)
      this.setState({oldEmail: email})
    }
    this.setState({show: true})
  }
  closeUser = () => {
    this.props.preSuccess()
    this.setState({show: false})
  }
  render() {
    const { users, oneuser, practise, error } = this.props
    const results = (users) ? users : [];
    const pagenumber = this.state.pagenumber;
    const { show } = this.state
    let prev_button = true;
    if (show && !!practise) {
      return (
        <User practise={practise} closeUser={this.closeUser} error={error} />
      )
    }

    if (pagenumber > 1) {
      prev_button = false
    }
    if(!(((oneuser) && oneuser.length > 0) || ((results) && (results.length > 0)))) {
      return (
        <Find />
      )
    }
    return (
      <div className="tableBox">
        <div className="searchBox">
          <input className="searchInput" type="text" placeholder="Search" onChange={(e) => this.change(e)} />
          <button className="searchButton" onClick={this.search}>
            <Icon type="search" />
          </button>
        </div>
        <div>
          <table className="customers">
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Name</th>
                <th>Sign Date</th>
                <th>Premium</th>
              </tr>
            </thead>
            <tbody>
              {
                (this.state.searchstart) ?
                ((oneuser && oneuser.length > 0 ) && 
                  <tr>
                    <td>{1}</td>
                    <td>{oneuser[0].email}</td>
                    <td>
                    {
                      (!!oneuser[0].name) ? oneuser[0].name : ''
                    }
                    </td>
                    <td>{this.calculate(oneuser[0].created)}</td>
                    <td>"premium"</td>
                  </tr>
                )
                : 
                (results.length > 0) && results.map((item, key) => 
                    <tr key={key} onClick={() => this.showUser(item.email)}>
                      <td>{key+1}</td>
                      <td>{item.email}</td>
                      <td>
                      {
                        (!!item.name) ? item.name : ''
                      }
                      </td>
                      <td>{this.calculate(item.created)}</td>
                      <td>"premium"</td>
                    </tr>
                )
              }
            </tbody>
          </table>
        </div>
        <div className="button_block">
            <button onClick={this.prevpage(results[4].uid)} disabled={prev_button} >
              <Icon type="left" />
            </button>
            <button>
              {pagenumber}
            </button>
            <button onClick={this.nextpage(results[4].uid)}>
              <Icon type="right" />
            </button>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    users: state.Users.get('users'),
    oneuser: state.Users.get('oneuser'),
    practise: state.Users.get('practise'),
    error: state.Users.get('error')
  }),
  { getoneuser, pagechange, getpractise, requestPractise, preSuccess }
)(UserTable);