import { useState } from 'react';
import AddUserForm from './forms/AddUserForm';
import UserTable from './tables/UserTable';
import EditUserForm from './forms/EditUserForm';

function App() {
  const usersData = [
    { id: 1, name: 'sreenath', username: 'srikanth' },
    { id: 2, name: 'prasath', username: 'prashanthkumar' },
    { id: 3, name: 'sunil', username: 'sunilkumar' },
  ];

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setEditing(false);
  };

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, name: '', username: '' };

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };

  return (
    <div className="container">
      <h1>Student Details CRUD Dashboard</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit Student</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add Student</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View Student</h2>
          <UserTable editRow={editRow} deleteUser={deleteUser} users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
