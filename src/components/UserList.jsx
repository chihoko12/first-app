import React, { useState } from 'react';
import axios from 'axios';

function UserList() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);
  const url = "https://reqres.in/api/users";

  const getUserList = () => {
    setError(null);
    setLoading(true)
    axios.get(url)
    .then((res) => {
      setLoading(false);
      setUserList(res.data)
    })
    .catch(err => {
      setLoading(false);
      setError(error)
    });
  }

  return (
    <>
      <button className="btn btn-info float-right" onClick={getUserList} disabled={loading}>{loading ? 'Loading...' : 'Get User List'}</button>
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

          {userList.map(user =>
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td><img src={user.avatar} width="50" height="50" alt="avatar"/></td>
            </tr>)}
          {userList.length == 0 &&
            <tr>
              <td className="text-center" colSpan="4">
                <b>No data found to display.</b>
              </td>
            </tr>}
        </tbody>
      </table>

    </>
  )

}

export default UserList;
