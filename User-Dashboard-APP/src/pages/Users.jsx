import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Users = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));

  }, []);

  return (
    <div>

      <h2>User List</h2>

      {users.map(user => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </div>
      ))}

    </div>
  );
};

export default Users;