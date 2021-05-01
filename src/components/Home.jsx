import React from 'react';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userList: [],
      loading: false
    };
    this.getUserList = this.getUserList.bind(this);
  }

    getUserList() {
      this.setState({ loading: true });
      fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(res => {
        setTimeout(() => {
          this.setState({ loading: false, userList: res.data });
        }, 2000);
      })
    }

    render() {
      const { userList, loading } = this.state;

      return (
        <div className="container Home">
          <h1>Welcome to the Home Page!</h1>
          <h4 className="d-inline-block">Clue Mediator</h4>
          <button className="btn btn-info float-right" onClick={this.getUserList} disabled={loading}>{loading ? 'Loading...' : 'Get User List'}</button>
          <div className="clearfix"></div>

          <table className="table mt-3">
            <thead className="thead-dark">
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Avatar</th>
              </tr>
            </thead>
            <tbody>
              {userList.map(x => <tr key="{x.id}">
                <td key="{x.first_name}">{x.first_name}</td>
                <td key="{x.last_name}">{x.last_name}</td>
                <td key="{x.email}">{x.email}</td>
                <td key="{x.id}{x.avatar}"><img src={x.avatar} width="50" height="50" alt="avatar" key="{x.avatar}" /></td>
              </tr>)}
              {userList.length == 0 && <tr>
                <td className="text-center" colSpan="4">
                  <b>No data found to display.</b>
                </td>
              </tr>}
            </tbody>
          </table>

        </div>
      );
    }
}

export default Home;
