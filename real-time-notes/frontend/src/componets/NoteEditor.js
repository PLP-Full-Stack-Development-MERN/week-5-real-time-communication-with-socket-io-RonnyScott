import React, { useState, useEffect } from 'react';
import socket from '../socket';

const NoteEditor = ({ roomId }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    socket.emit('join-room', roomId);

    socket.on('note-updated', (updatedContent) => {
      setContent(updatedContent);
    });

    return () => {
      socket.off('note-updated');
    };
  }, [roomId]);

  const handleChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
    socket.emit('edit-note', { roomId, content: newContent });
  };

  return (
    <textarea
      value={content}
      onChange={handleChange}
      placeholder="Start typing..."
    />
  );
};

export default NoteEditor;