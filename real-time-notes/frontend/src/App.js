import React from 'react';
import NoteEditor from './components/NoteEditor';
import UserList from './components/UserList';

const App = () => {
  const roomId = 'room1'; // Replace with dynamic room ID logic
  return (
    <div>
      <h1>Real-Time Collaborative Notes</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 3 }}>
          <NoteEditor roomId={roomId} />
        </div>
        <div style={{ flex: 1 }}>
          <UserList roomId={roomId} />
        </div>
      </div>
    </div>
  );
};

export default App;