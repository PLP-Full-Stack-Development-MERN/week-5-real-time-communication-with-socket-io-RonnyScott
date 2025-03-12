import React, { useState, useEffect } from 'react';
import socket from '../socket';

const UserList = ({ roomId }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Listen for users joining the room
    socket.on('user-joined', (userId) => {
      setUsers((prevUsers) => [...prevUsers, userId]);
    });

    // Listen for users leaving the room
    socket.on('user-left', (userId) => {
      setUsers((prevUsers) => prevUsers.filter((user) => user !== userId));
    });

    // Listen for the list of current users in the room
    socket.on('current-users', (userList) => {
      setUsers(userList);
    });

    // Cleanup listeners on unmount
    return () => {
      socket.off('user-joined');
      socket.off('user-left');
      socket.off('current-users');
    };
  }, [roomId]);

  return (
    <div>
      <h3>Online Users:</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;