import React  from 'react';
import axios from 'axios';
import { getUser, removeUserSession } from '../Utils/Common';
import Button from '@material-ui/core/Button';
import UserList from './UserList';

function Dashboard(props) {
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  };

  return (
    <div className="container">
      <h1>Welcome {user.name}!<br /><br /></h1>
      <UserList />
      <Button variant="contained" color="primary" type="button" onClick={ handleLogout} value="Logout">
        Logout
      </Button>
    </div>
  );
}

export default Dashboard;
