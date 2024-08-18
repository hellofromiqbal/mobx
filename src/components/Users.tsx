import React, { useState } from 'react';
import usersStore from '@/store/usersStore';
import { observer } from 'mobx-react';

// interface UsersProps {
//   store: typeof usersStore
// };

// const Users = ({ store } : UsersProps) => {
const Users = observer(() => {
  const [inputValue, setInputValue] = useState('');
  const addUser = () => {
    usersStore.addUser(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <h2>Total: {usersStore.total}</h2>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addUser}>Add User</button>
      </div>
      <div>
        {usersStore.users.map((user, index) => (
          <div key={index}>{user.name}</div>
        ))}
      </div>
    </div>
  )
});

export default Users;