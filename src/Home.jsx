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
      return (
        <div>
          <h1>
            Welcome to the Home Page!
          </h1>


        </div>
      );
    }
}

export default Home;
