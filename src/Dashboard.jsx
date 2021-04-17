import React from 'react';
import { getUser, removeUserSession } from './Utils/Common';

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
      <input type="button"onClick={handleLogout} value="Logout" />
    </div>
  );
}

export default Dashboard;
