import React from "react";
import "antd/dist/antd.css";
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';


const data = [
  {
    key: "1",
    name: "John Brown",
    email: "a@a.com",
    signdate: "New York No. 1 Lake Park",
    premium: false
  },
  {
    key: "2",
    name: "Joe Black",
    email: "b@b.com",
    signdate: "London No. 1 Lake Park",
    premium: true
  },
  {
    key: "3",
    name: "Jim Green",
    email: "d@d.com",
    signdate: "Sidney No. 1 Lake Park",
    premium: true
  },
  {
    key: "4",
    name: "Jim Red",
    email: "c@c.com",
    signdate: "London No. 2 Lake Park",
    premium: false
  }
];

class UserTable extends React.Component {
  
  constructor () {
    super();
    this.state = {
      searchText: "",
    };
  }

  componentWillMount() {
    
  }

  search = (e) => {
    this.setState({searchText:e.target.value})
  }

  render() {
    const users = this.props.users;
    return (
      <div>
        <Table striped bordered hover variant="dark">
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
            {(users.length > 1) ? users.map((item, key) => 
                <tr key={key}>
                  <td>{key+1}</td>
                  <td>{item.email}</td>
                  <td>
                  {
                    (item.name && item.name !== undefined) ? item.name : ''
                  }
                  </td>
                  <td>{this.calculate(item.created)}</td>
                  <td>"premium"</td>
                </tr>
            ) :(<span>"Dwonloading Files"</span>)
            }
          </tbody>
        </Table>
      </div>
    )
  }
}

export default connect(
  state => ({
    users: state.Users.get('users'),
  }),
  {  }
)(UserTable);